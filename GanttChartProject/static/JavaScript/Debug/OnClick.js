function ValidateResource(data) {
   if (data.id ==1)   {       alert("fail");    }
   else   {       alert("pass");   }
}

function OpenOnClick(data) {
    var Resdialog = $("#Resourcesdialog").dialog({
        modal: true,
        autoOpen: false,
        title: "ResourcesDialog",
        width: 600,
        height: 500,
        buttons: {
            "Add resource": function () {
                AddResource(data);
            },
            "Validate Resources": function () {
                ValidateResource(data);
            },
            Close: function () {
               
                Resdialog.dialog("close");
            }
        }
    });
    $("#resourceshtml thead").empty();
    $("#resourceshtml tr").remove();
    $("#resourceshtml thead").append("<\"tr class=\"ui-widget-header \"><th>Type</th><th>Value</th></tr>");
    for (resourceinstance of data.Resource) {

        $("#resourceshtml tbody").append("<tr>" +
            "<td>" + resourceinstance.Resource_type + "</td>" +
            "<td>" + resourceinstance.Resource_id + "</td>" +
            "</tr>");

    }
    Resdialog.dialog('open');
    console.log(data); // Onclick of each node
}
