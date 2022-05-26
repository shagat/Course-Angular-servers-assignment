import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  toggleDisplay: boolean = false;
  btClickTimes = [];
  btClick: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  onToggleDisplay(){
    this.btClick += 1;
    this.toggleDisplay = !this.toggleDisplay;
    this.btClickTimes.push(new Date());
    // console.log(this.toggleDisplay);
    // console.log(this.btClick);
  }
  getColor(){
    if (this.btClick > 5  ){
      return 'blue'
    }
    else{
      return
    }
  }
}
