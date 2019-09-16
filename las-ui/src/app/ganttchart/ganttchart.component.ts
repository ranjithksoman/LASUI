import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { Task } from '../task';
import { Taskdetails } from '../taskdet';
import { Router } from '@angular/router';
declare const window: any;

declare const mainapp: any;
declare const startapp: any;
@Component({
  selector: 'app-ganttchart',
  templateUrl: './ganttchart.component.html',
  styleUrls: ['./ganttchart.component.css']
})
export class GanttchartComponent implements OnInit {
  public tasks = Taskdetails;
  gantttitle = 'GanttChart'
  private data;
  Tasks = Taskdetails;
  selectedTask: Task;



constructor(public httpclient: HttpClient) {    }

  public callExampleFunction(): any {
    console.log('this works perfect');
    console.log(this.selectedTask.id)
  }


  ngOnInit() {
    this.get_gantchartdata();

  }





  public get_gantchartdata()
  {
    this.httpclient.get("http://127.0.0.1:5000/api/data/").subscribe(data=>{
      console.log(data);
      this.CreateGanttChart(data,this);
    });


  }
  public CreateGanttChart(data1,component) {
        console.log(data1);
        var config = {
          data: data1, // Your actuall data
          element: "#Chart", // The element for rendering the chart
          box_padding: 15, // Padding for the blocks
          // metrics: {type: "overall", years: [2016, 2017, 2018,2019]}, // Type of gantt
          //metrics: {type: "sprint", year: 2017, cycles: cycles}, // Type of gantt
          //metrics: {type: "yearly", year: 2017}, // Type of gantt
          metrics: { type: "monthly", month: 'August 2018' }, // For Monthly Data
          // metrics: {type: "quarterly", months: ['January 2017','February 2017','March 2017', 'April 2017', 'May 2017', 'June 2017']}, // For quarterly or half yearly data
          onClick: function (data) {

            //this.callExampleFunction();
            console.log("Clicked on tab");
            console.log(data);
            for (let task of Taskdetails) {
              if (data.id == task.id) {
                component.selectedTask = task;
                component.callExampleFunction();
                console.log(component.selectedTask.title)
              }
            }
          },
          onEmptyButtonClick: function () {
            console.log("Empty Clicked");
          },
          onAreaClick: function (location) {
            console.log("Clicked On" + location);
          }
        }
        console.log("config:" + config);

        mainapp(config);
      }




}
