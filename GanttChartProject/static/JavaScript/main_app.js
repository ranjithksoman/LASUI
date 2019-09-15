var HttpClient = function () {
  this.get = function (aUrl, aCallback) {
    var anHttpRequest = new XMLHttpRequest();


    anHttpRequest.onreadystatechange = function () {
      if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) {
        aCallback(anHttpRequest.responseText);
        flag = false;
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
      OpenOnClick(data);

    },
    onEmptyButtonClick: function () {
      console.log("Empty Clicked");
    },
    onAreaClick: function (location) {
      console.log("Clicked On" + location);
    }
  }
  console.log("config:" + config);

  ganttChart(config);
}
function testfunc()
{
  alert("clicked");
  console.log("Add reource button clicked");
 }

var el = document.getElementById('AddResourceButton');
if(el){
  el.addEventListener('click', testfunc, false);
}



// Browser global variables data,cycle, config
function CreateChart() {
  var data;
  var client = new HttpClient();
  console.log("Waiting for data");

 // $.get("http://127.0.0.1:5000/api/data/", function (data) {

   // console.log("Load was performed.");
    data1 = JSON.parse(data);
    CreateGanttChart(data1);

  });
}