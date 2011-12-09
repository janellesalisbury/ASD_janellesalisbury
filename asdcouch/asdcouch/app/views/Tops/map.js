function(doc){
	if(doc.type.substr(0, 4)==="Tops"){
		emit(doc.type,{
			"color":doc.color,
			"brand":doc.brand,
			"date":doc.date,
			"name":doc.name
			
		});
	}
	
};