

$(document).ready(function() {
    if (typeof(localStorage) == 'undefined') {
        alert('Your browser does not support HTML5 LocalStorage');
    } else getItems();
        $('#additemform').submit(function() {
        var newDate = new Date();
        var itemId = newDate.getTime();

        var cat = $("#cat").val();
        var name = $("#item-name").val();
        var brand = $("#brand").val();
        var size = $("#size").val();
        var color = $("#item-color").val();
        var date = $("#mydate").val();
        var drycln = $("#dryclean").val();
        var notes = $("#notes").val();

        var vals = [cat,name,brand,size,color,date,drycln,notes];


        localStorage.setItem(itemId, vals);
        alert('Storage Successful');

    });
 });

function getItems() {
    var i = 0;
    var listelement = "";
    var dblen = localStorage.length-1;
 
    for (i = 0; i <= dblen; i++) {
        var itemKey = localStorage.key(i);
        var vals = localStorage.getItem(itemKey);
        vals = vals.split(',');
        var cat = vals[0];
        var name = vals[1];
        var brand = vals[2];
        var size = vals[3];
        var color = vals[4];
        var date = vals[5];
        var drycln = vals[6];
        var notes = vals[7];

        listelement += '<li>' +
            '<h3> Name: ' + name + '</h3>' +
            '<p> Brand: ' + brand + '&nbsp;&nbsp; &nbsp;&nbsp; Size: ' + size + '</p>' +
            '<p> Color: ' + color + ' &nbsp;&nbsp; &nbsp;&nbsp; Date Bought: ' + date + '</p>' +
            '<p> Dryclean?: ' + drycln + '&nbsp;&nbsp; &nbsp;&nbsp; Notes: ' + notes + '</p>' +

            '<p><input type="button" value="Delete" onclick="deleteData(' + itemKey + ');"></p>' +
            '<hr/></li>';


        if (cat === "jewelry") {
            $("#jewelry-list").html(listelement);

        } else if (cat === "tops") {
            $("#tops-list").html(listelement);
        } else if (cat === "bottoms") {
            $("#bottoms-list").html(listelement);
        } else if (cat === "shoes") {
            $("#shoes-list").html(listelement);
        } else if (cat === "handbags") {
            $("#handbags-list").html(listelement);
        }
    }
    $("#tops-list").listview( "refresh" );
}
function deleteData(id) {
	var ask = confirm("Are you sure?");
	if (ask)
    {
		localStorage.removeItem(id);
		location.reload(true);

    }else {
		alert("Item not removed!");

    }
}

function XML(){
	$.ajax({
		url: "data.xml",
		type: "GET",
		dataType: "xml",
		success: function(data, status){
			alert("Data successfully loaded");
			console.log(status, data);
			$(data).find("info").each(function(){
				var xmlitemname= $(this).find("name").text();
				var xmlbrand= $(this).find("brand").text();
				var xmlitemcolor= (this).find("color").text();
				var xmldate= (this).find("date").text();
				var xmlsize= (this).find("size").text();
				$("#item-name").val(xmlitem-name);
				$("#brand").val(xmlbrand);
				$("#item-color").val(xmlitem-color);
				).appendTo("#xml");
			};
		
		}
	
	};

}

function JSON(){
	$.ajax({
		url: "data.json",
		type:"GET",
		dataType: "json"
		success: function(data, status){
			alert ("Data successfully loaded");
			console.log(staus, data);
				var jsonname= (data.info.name);
				var jsonbrand= (data.info.brand);
				var jsoncolor= (data.info.color;)
				var jsondate= (data.info.date);
				var jsonsize= (data.info.size);
				$("#item-name").val(jsonitem-name);
				$("#brand").val(jsonbrand);
				$("item-color").val(jsonitem-color);	
				).appendTo("#json");	
			};
		}
	};
}

// CSV here- no clue how to call it

$("#submit").bind("click", validate);
$("#view").bind("click", getData);
$("#clear").bind("click", clearLocal);
$("JSON").bind("click", JSON);
$("XML").bind("click", XML);

		}
	}:
}












}

