function(doc){
	if(doc.type.substr(0, 5) === "Shoes") {
		emit(doc.type,{
			"color":doc.color,
			"name":doc.name,
			"brand":doc.brand,
			"date":doc.date
			
		});
		
	}
};