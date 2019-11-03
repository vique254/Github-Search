import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Github } from '../github';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newGithub = new Github;
  @Output() addGithub =new EventEmitter<Github>();

  submitGoal(){
    this.addGithub.emit(this.newGithub);
  }
  constructor() { }

  ngOnInit() {
  }

}