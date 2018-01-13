import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuesType, Question, Options } from '../../data/globals';

/**
 * Generated class for the QuestionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'question',
  templateUrl: 'question.html'
})
export class QuestionComponent {

  @Input('questions') questions: Question[]; 

  constructor() {
    console.log('Hello QuestionComponent Component');
  }

}
