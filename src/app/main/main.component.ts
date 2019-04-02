import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  fibonacci: any[] = [];
  isRunFibonacciSequence: boolean = false;
  interval$: Subscription;

  constructor() {
  }

  ngOnInit() {

  }

  runFibonacci() {
    this.isRunFibonacciSequence = !this.isRunFibonacciSequence;
    if (this.isRunFibonacciSequence) {
      this.interval$ = Observable.interval(1000 * 3).subscribe(() => this.fibonacciSequence());
    } else {
      this.interval$.unsubscribe();
    }

  }

  fibonacciSequence() {
    const index = this.fibonacci.length;
    if (index === 0) {
      this.fibonacci.push(0)
    } else if (index === 1) {
      this.fibonacci.push(1)
    } else {
      this.fibonacci[index] = this.fibonacci[index - 2] + this.fibonacci[index - 1];
    }
  }

  isOddValue(value) {
    return value % 2 === 0;
  }
}
