import { Component, OnInit, } from '@angular/core';
import {TrainingService} from "../training.service";
import {Exercise} from "../exercise.model";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises: Exercise[] = [];

  constructor(private trainigService: TrainingService) { }

  ngOnInit() {
    this.exercises = this.trainigService.getAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainigService.startExercise(form.value.exercise);
  }

}
