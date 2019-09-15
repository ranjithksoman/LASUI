var HttpClient = function() {
  this.get = function(aUrl, aCallback) {
      var anHttpRequest = new XMLHttpRequest();
      anHttpRequest.onreadystatechange = function() { 
          if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
              aCallback(anHttpRequest.responseText);
      }

      anHttpRequest.open( "GET", aUrl, true );            
      anHttpRequest.send( null );
  }
}

var client = new HttpClient();
client.get('http://127.0.0.1:5000/api/data/', function(response) {
   data=response;
  });
var data = [
  {
    id: 1,
    title: "Lift 1",
    start_date: "08/08/2018",
    end_date: "08/09/2018",
    value: 67,
    term: "Short Term",
    completion_percentage: 29,
    color: "#770051",
    testvar: "test",
    Resource: [
      {
        Resource_type: "Resource type value",
        Resource_id: "Resource ID value",
        Resource_property: [{ Resource_property_type: "Resource_property_type_value" }]
      },
      {
        Resource_type: "Resource type value2",
        Resource_id: "Resource ID value2",
        Resource_property: [{ Resource_property_type: "Resource_property_type_value" }]
      }
    ]
  },
  {
    id: 2,
    title: "Lift 2",
    start_date: "08/09/2018",
    end_date: "08/10/2018",
    value: 67,
    term: "Short Term",
    completion_percentage: 29,
    color: "#05f20c",
    testvar: "test",
    Resource: [
      {
        Resource_type: "Resource type value",
        Resource_id: "Resource ID value",
        Resource_property: [{ Resource_property_type: "Resource_property_type_value" }]
      }
    ]
  },
  {
    title: "Lift 3",
    start_date: "08/10/2018",
    id: 3,
    end_date: "08/11/2018",
    value: 67,
    term: "Short Term",
    completion_percentage: 29,
    color: "#914ae1",
    testvar: "test",
    Resource: [
      {
        Resource_type: "Resource type value",
        Resource_id: "Resource ID value",
        Resource_property: [{ Resource_property_type: "Resource_property_type_value" }]
      }
    ]
  }


];

// data = [];

var cycles = [
  {
    id: 1,
    name: "Cycle 1",
    start_date: "01/01/2017",
    end_date: "02/28/2017",
  },
  {
    id: 2,
    name: "Cycle 2",
    start_date: "05/01/2017",
    end_date: "06/30/2017",
  },
  {
    id: 3,
    name: "Cycle 3",
    start_date: "07/01/2017",
    end_date: "10/30/2017",
  },
  {
    id: 4,
    name: "Cycle 4",
    start_date: "10/01/2017",
    end_date: "12/30/2017",
  },
  {
    id: 5,
    name: "Cycle 5",
    start_date: "01/01/2018",
    end_date: "02/28/2018",
  }

]

var config = {
  data: data, // Your actuall data
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
// Browser global variables data,cycle, config
function CreateChart(){
ganttChart(config);
}