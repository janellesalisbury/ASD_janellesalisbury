

$(document).ready(function() {
function XML(){
	$.ajax({
		url: "XHR/data.xml",
		type: "GET",
		dataType: "xml",
		success: function(data, status){
			alert("Data successfully loaded");
			console.log(data, status);
			$(data).find("item").each(function(){
				var xmlname= $(this).find("name").text();
				var xmlbrand= $(this).find("brand").text();
				var xmlcolor= $(this).find("color").text();
				var xmldate= $(this).find("date").text();
				var xmlsize= $(this).find("size").text();
				var listelement = '<li>' +
           			 '<h3> Name: ' + xmlname + '</h3>' +
           			 '<p> Brand: ' + xmlbrand + '&nbsp;&nbsp; &nbsp;&nbsp; Size: ' +xmlsize + '</p>' +
            		 '<p> Color: ' + xmlcolor + ' &nbsp;&nbsp; &nbsp;&nbsp; Date Bought: ' + xmldate + '</p>' +
           			 '<hr/></li>';


				$(listelement).appendTo("#xml");
			}); //end of .each
		} //end of success	
		
	}); //end of .ajax
	
};// end of function.xml


function JSON(){
	$.ajax({
		url: "XHR/data.json",
		type:"GET",
		dataType: "json",
		success: function(data, status){
			alert("Data successfully loaded");
			console.log(data, status);
			$.each(data.items, function(index,value){
				console.log(value);
				var jsonname= (value.name);
				var jsonbrand= (value.brand);
				var jsonsize= (value.size);
				var jsoncolor= (value.color);
				var jsondate= (value.date);
				var listelement= '<li>' +
           			 '<h3> Name: ' + jsonname + '</h3>' +
           			 '<p> Brand: ' + jsonbrand + '&nbsp;&nbsp; &nbsp;&nbsp; Size: ' +jsonsize + '</p>' +
            		 '<p> Color: ' + jsoncolor + ' &nbsp;&nbsp; &nbsp;&nbsp; Date Bought: ' + jsondate + '</p>' +
            		 '<hr/></li>';
            		 
           		$(listelement).appendTo("#json");
           	}); // end of .each
		} // end of success
	}); // end of ajax 
};// end of function.json

/*function CSV(){
	$.ajax({
		url: "XHR/data.csv",
		type: "GET",
		dataType: "csv",
		success: function(data, status){
			alert("Data successfully loaded");
			console.log(data, status);
			var lines= data.split("/n");
				for (var lineNum = 0; lineNum < lines.length; lineNum++){
					var row= lines[lineNum];
					var columns= row.split(",");
					console.log(cloumns);
				}
		}

});*/


$("#getJSON").click(JSON);
$("#getXML").click(XML);


});

  //  if (typeof(localStorage) == 'undefined') {
  //      alert('Your browser does not support HTML5 LocalStorage');
 //   } else getItems();
    //    $('#additemform').submit(function() {
    //    var newDate = new Date();
    //    var itemId = newDate.getTime();

    //    var cat = $("#cat").val();
     //   var name = $("#item-name").val();
     //   var brand = $("#brand").val();
     //   var size = $("#size").val();
      /*  var color = $("#item-color").val();
        var date = $("#mydate").val();
        var drycln = $("#dryclean").val();
        var notes = $("#notes").val();

        var vals = [cat,name,brand,size,color,date,drycln,notes];


        localStorage.setItem(itemId, vals);
        alert('Storage Successful');

    });*/


/*function getItems() {
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
}*/



/*$("#submit").bind("click", validate);
$("#view").bind("click", getData);
$("#clear").bind("click", clearLocal);

		}
	}:
}*/













