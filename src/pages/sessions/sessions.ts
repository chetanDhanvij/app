import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuesType, Question, Options } from '../../data/globals'

/**
 * Generated class for the SessionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sessions',
  templateUrl: 'sessions.html',
})
export class SessionsPage {
  questions: Question[] = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SessionsPage');
    let question: Question = {
      id: "id1",
      type: QuesType.MCQSA,
      ques: "What is your class?",
      options: [{
        id: "1",
        opt: "10"
      },{
        id: "2",
        opt: "20"
      },{
        id: "3",
        opt: "30"
      }]
    }

    this.questions[0] = question;
  }

}
