import { Component, OnInit, } from '@angular/core';
import {TrainingService} from "../training.service";
import {Exercise} from "../exercise.model";
import { NgForm } from '@angular/forms';
import {AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises: Exercise[];

  constructor(private trainigService: TrainingService, private db: AngularFirestore) { }

  ngOnInit() {
    this.trainigService.exerisesChanged.subscribe(result => {
      this.exercises = result;
    });
   this.trainigService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainigService.startExercise(form.value.exercise);
  }

}
