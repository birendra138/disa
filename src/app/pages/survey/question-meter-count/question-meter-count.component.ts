import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-meter-count',
  standalone: true,
  imports: [],
  templateUrl: './question-meter-count.component.html',
  styleUrl: './question-meter-count.component.scss'
})
export class QuestionMeterCountComponent {
  @Input('counts') counts: number = 0;
}