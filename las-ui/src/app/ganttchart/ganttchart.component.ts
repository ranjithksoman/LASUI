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



  public constructor(private zone: NgZone, private router: Router) {

    //exposing component to the outside here
    //componentFn called from outside and it in return calls callExampleFunction()
    window['angularComponentReference'] = {
      zone: this.zone,
      componentFn: (value) => this.callExampleFunction(),
      component: this,
    };
  }

  callExampleFunction(): any {
    console.log('this works perfect');
  }
  onSelect(task: Task): void {
    this.selectedTask = task;
    console.log(this.selectedTask.title)
  }

  public ontheeventofclick() {
    console.log("click registered")
  }
  ngOnInit() {
    this.test();
  }


  ngOnDestroy() {
    window['angularComponentRef'] = null;
  }

  test() {
    var HttpClient = function () {
      this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
          if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) {
            aCallback(anHttpRequest.responseText);
            const flag = false;
          }
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
      }
    }

    function CreateGanttChart(data1) {
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
          console.log("Clicked on tab");
          console.log(data);
          for (let task of Taskdetails) {
            if (data.id == task.id) {
              this.selectedTask = task;
              window.angularComponentReference.zone.run(() ={ window.angularComponentReference.componentFn(); });


              console.log(this.selectedTask.title)


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

    // Browser global variables data,cycle, config
    function CreateChart() {
      console.log("Entered create chart function ");
      var data;
      var client = new HttpClient();
      console.log("Waiting for data");

      $.get("http://127.0.0.1:5000/api/data/", function (data) {

        console.log("Load was performed.");
        var data1 = JSON.parse(data);
        CreateGanttChart(data1);
      });
    }

    CreateChart();
  }


}
