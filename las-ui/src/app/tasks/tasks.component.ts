import { Component, OnInit, Input } from '@angular/core';
import {Task,Constraint} from '../task';
import {Taskdetails,constraintypes,resourcetypes,propertytype} from '../taskdet';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

@Input() task:Task;
constrainttypes=constraintypes;
resourcetypess=resourcetypes;
propertytypess=propertytype;
operators:string []=['>','<','==']
constraintname:string;
  constructor() { }

  ngOnInit() {
    console.log("init")
    console.log(this.constrainttypes)
  }

  onSave()
  {
    var  Cns:Constraint = {id: 'C10',
      type: 'Logical'};
      this.task.Constraint.push(Cns);
              
  };

  }


