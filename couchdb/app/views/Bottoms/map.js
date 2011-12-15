function(doc){
	if(doc.type.substr(0, 7)==="Bottoms"){
		emit(doc.type,{
			"color":doc.color,
			"brand":doc.brand,
			"date":doc.date,
			"name":doc.name
		});
	}
};