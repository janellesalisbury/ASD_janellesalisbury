$(document).ready(function(){
	$.ajax({
		"url":"_view/Items",
		"dataType":"json",
		"success":function(data){
			$.each(data.rows, function(index, Items){
				var name= Items.value.name;
				var brand= Items.value.brand;
				var color= Items.value.color;
				var date= Items.value.date;
					$("#Itemslist").append(
						$("<li>").text(name)
				);
				
			});
						
		}
	});
	$.ajax({
		"url":"_view/Bottoms",
		"dataType":"json",
		"success":function(data){
			$.each(data.rows, function(index, Bottoms){
				var name= Bottoms.value.name;
				var brand=Bottoms.value.brand;
				var color= Bottoms.value.color;
				var date= Bottoms.value.date;
					$("#Bottomslist").append(
						$("<li>").text(name)
				);
				
			});
						
		}
	});
	$.ajax({
		"url":"_view/Jewelry",
		"dataType":"json",
		"success":function(data){
			$.each(data.rows, function(index, Jewelry){
				var name= Jewelry.value.name;
				var brand=Jewelry.value.brand;
				var color= Jewelry.value.color;
				var date= Jewelry.value.date;
					$("#Jewelrylist").append(
						$("<li>").text(name)
				);
				
			});
						
		}
	});
	$.ajax({
		"url":"_view/Tops",
		"dataType":"json",
		"success":function(data){
			$.each(data.rows, function(index, Tops){
				var name= Tops.value.name;
				var brand=Tops.value.brand;
				var color= Tops.value.color;
				var date= Tops.value.date;
					$("#Topslist").append(
						$("<li>").text(name)
				);
				
			});
						
		}
	});
	
	
	
	
	
	
});