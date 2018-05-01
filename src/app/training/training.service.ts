import { Exercise } from "./exercise.model";
import {Subject} from 'rxjs/Subject';
import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";

@Injectable()
export class TrainingService {
    private availableExercises: Exercise[];
    private runningExercise: Exercise;
    exerciseChange = new Subject<Exercise>();
    exerisesChanged = new Subject<Exercise[]>();
    exercises: Exercise[] = [];
    constructor(private db: AngularFirestore) {

    }

    fetchAvailableExercises() {
        this.db.collection('availableExercises').snapshotChanges()
        .map(docArray => {
          return docArray.map(doc => {
            return {
              id: doc.payload.doc.id,
              name: doc.payload.doc.data().name,
              duration: doc.payload.doc.data().duration,
              calories: doc.payload.doc.data().calories,
            };
          });
        }).subscribe(result => {
            this.availableExercises = result;
            this.exerisesChanged.next([...this.availableExercises]);
        });
    }

    startExercise(selectedId) {
        this.runningExercise = this.availableExercises.find(ex => selectedId === ex.id);
        this.exerciseChange.next({ ...this.runningExercise});
    }

    getRunningExercise() {
        return { ...this.runningExercise};
    }

    completeExercise() {
        this.exercises.push({ ...this.runningExercise,
            date: new Date(), state: 'completed'});
        this.runningExercise = null;
        this.exerciseChange.next(null);
    }

    cancelExercise(progress) {
        this.exercises.push({ ...this.runningExercise,
            date: new Date(),
            duration: this.runningExercise.duration * (progress / 100),
            calories: this.runningExercise.calories * (progress / 100),
             state: 'cancelled'});
        this.runningExercise = null;
        this.exerciseChange.next(null);
    }

    getCompletedandCancelledExercise() {
        return this.exercises.slice();

    }

}
