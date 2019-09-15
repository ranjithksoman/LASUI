

function OpenOnClick(data) {
    tempdata = data;
    
    var client = new HttpClient();
    console.log("Waiting for data");
    $("#constraintshtml thead").empty();
    $("#constraintshtml tr").remove();

    $("#constraintshtml thead").append("<tr ><th>Type</th><th>Description</th></tr>");


    $.get("http://127.0.0.1:5000/api/constraints/", function (datay) {

        console.log("constraintLoad was performed.");
        datacon  = JSON.parse(datay);
        console.log(datacon);
        console.log(data);
        for (constraintinstance of datacon) {
            console.log("looping to find constraint");
            console.log(constraintinstance)
            if (data.Constraint.indexOf(constraintinstance.ConstraintID) > -1) {
                console.log("Constraint found");
                $("#constraintshtml tbody").append("<tr>" +
                    "<td>" + constraintinstance.ConstraintID + "</td>" +
                    "<td>" + constraintinstance.Constraint_Type + "</td>" +
                    "</tr>");
            }
        }
    });

    $("#resourceshtml thead").empty();
    $("#resourceshtml tr").remove();
    $("#resourceshtml p").remove();
    $("#resourceshtml thead").append("<tr ><th>ID</th><th>Type</th></tr>")
    $.get("http://127.0.0.1:5000/api/resource/", function (dataz) {

        console.log("Resource Load was performed.");
        datares  = JSON.parse(dataz);
        console.log(datares);
        console.log(data);
        for (resourceinstance of datares) {
            console.log("looping to find resource");
            console.log(resourceinstance)
            if (data.Resource.indexOf(resourceinstance.Resource_ID) > -1) {
                console.log("Resource found");
                $("#resourceshtml tbody").append("<tr>" +
                    "<td>" + resourceinstance.Resource_ID + "</td>" +
                    "<td>" + resourceinstance.Resource_Type + "</td>" +
                    "</tr>");
            }
        }
    });

    
    
    
    
    
    
    
    
    
    
    
    //document.getElementById("ValidateResource").addEventListener("click", ValidateResource(data));    
    //document.getElementById("AddResourceButton").addEventListener("click", openfunction1(data));

    console.log(data); // Onclick of each node
    console.log("tempdata:" + data); // Onclick of each node
}
function ValidateResource(data) {

    document.getElementById("ValidateResource").removeEventListener("click", ValidateResource(data));
    if (data.id == 1) { alert("fail" + data.id); }
    else { alert("pass"); }
}

function openfunction1(data) {
    // AddResource(data);
    alert("Hello world" + data.id);
    $('#AddResourceButton').replaceWith($('#mAddResourceButton').clone());
};