
function AddResource(data){
    var Resourcetype=$("#ResourceType").val();
    var AddResdialog=$("#AddResourceform").dialog({
        modal: true,
        autoOpen: false,
        title: "Add Resources",
        width: 300,
        height: 400,
        buttons: {
            "Submit": function () {
                           AddResdialog.dialog("close");
                
            },
            Close: function () {
                AddResdialog.dialog("close");
            }
        }
    });
    switch(Resourcetype){
        case "crane":
        document.getElementById('PropType').textContent =  'Crane capacity';
        console.log(document.getElementById('PropType').textContent)
        break;
        case "module":
        document.getElementById('PropType').textContent = 'Module weight';
        break;
        default:
        break;

    }

    AddResdialog.dialog('open');
    console.log(data);

}
function AddConstraint()
{
    var AddConstraintdialog=$("#AddConstraintform").dialog({
        modal: true,
        autoOpen: false,
        title: "Add Constraint",
        width: 500,
        height: 400,
        buttons: {
            "Submit": function () {
                
                AddConstraintdialog.dialog("close");
                
            },
            Close: function () {
                AddConstraintdialog.dialog("close");
            }
        }
    }); 
    AddConstraintdialog.dialog('open');
}