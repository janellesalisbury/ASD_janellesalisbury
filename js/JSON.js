// Janelle Salisbury
//MiU 1111
//Project 3


function autoFillData(){
		var json = {
			"contact1":{
				"group":["Group:", "Shoes"],
				"name":["Name:", "Janelle"],
				"brand":["Brand:", "BCBG"],
				"color":["Color:", "Black"],
				"notes":["Notes:", "Stored"]
			},
			"contact2":{
				"group":["Group:", "Tops"],
				"name":["Name:", "T-shirt"],
				"brand":["Brand:", "Aero"],
				"color":["Color:", "Black"],
				"notes":["Notes:", "Drawer 2"]
		    },		
		    "contact3":{
				"group":["Group:", "Pants"],
				"name":["Name:", "Jeans"],
				"brand":["Brand:", "Maurices"],
				"color":["Color:", "Light Denim"],
				"notes":["Notes:", "Drawer 5"]
		    },	
		    "contact4":{
				"group":["Group:", "Jewelry"],
				"name":["Name:", "Necklace"],
				"brand":["Brand:", "Al Scott Creations"],
				"color":["Color:", "Green multi/glass center"],
				"notes":["Notes:", "Stored in basket"]
		    },	
		    "contact5":{
				"group":["Group:", "Handbags"],
				"name":["Name:", "Banana Bag"],
				"brand":["Brand:", "Dooney & Bourke"],
				"color":["Color:", "Multi"],
				"notes":["Notes:", "In tote 1"]
		    },
		    "contact6":{
				"group":["Group:", "Shoes"],
				"name":["Name:", "Trina"],
				"brand":["Brand:", "Nine West"],
				"color":["Color:", "Leopard"],
				"notes":["Notes:", "Stored"]
			},
			"contact7":{
				"group":["Group:", "Tops"],
				"name":["Name:", "Long-sleeve"],
				"brand":["Brand:", "GAP"],
				"color":["Color:", "White"],
				"notes":["Notes:", "Hanging"]
		    },		
		    "contact8":{
				"group":["Group:", "Pants"],
				"name":["Name:", "Molly"],
				"brand":["Brand:", "A&F"],
				"color":["Color:", "Blue"],
				"notes":["Notes:", "Drawer 4"]
		    },	
		    "contact9":{
				"group":["Group:", "Jewelry"],
				"name":["Name:", "Ring"],
				"brand":["Brand:","Class Ring"],
				"color":["Color:", "Platinum/Hematite"],
				"notes":["Notes:", "In dish/dresser"]
		    },	
		    "contact10":{
				"group":["Group:", "Handbags"],
				"name":["Name:", "Sabres"],
				"brand":["Brand:", "Fanatic"],
				"color":["Color:", "Multi"],
				"notes":["Notes:", "on rack"]
		    },
		    "contact11":{
				"group":["Group:", "Shoes"],
				"name":["Name:", "UGG"],
				"brand":["Brand:", "UGG"],
				"color":["Color:", "Tan"],
				"notes":["Notes:", "By front door"]
			},
			"contact12":{
				"group":["Group:", "Tops"],
				"name":["Name:", "Blouse"],
				"brand":["Brand:", "Forever 21"],
				"color":["Color:", "Grey"],
				"notes":["Notes:", "Hanging"]
		    },		
		    "contact13":{
				"group":["Group:", "Pants"],
				"name":["Name:", "Jeans"],
				"brand":["Brand:", "Maurices"],
				"color":["Color:", "Dark Denim"],
				"notes":["Notes:", "Drawer 4"]
		    },	
		    "contact14":{
				"group":["Group:", "Jewelry"],
				"name":["Name:", "Bracelet"],
				"brand":["Brand:", "Erika Chaffee Creations"],
				"color":["Color:", "Hemp/Blue beads/Lily charm"],
				"notes":["Notes:", "In dish/dresser"]
		    },	
		    "contact15":{
				"group":["Group:", "Handbags"],
				"name":["Name:", "Cowboy"],
				"brand":["Brand:", "JCPenny"],
				"color":["Color:", "Tan suede"],
				"notes":["Notes:", "In tote 2"]
		    },
		    "contact16":{
				"group":["Group:", "Shoes"],
				"name":["Name:", "Halle"],
				"brand":["Brand:", "ShoeDazzle"],
				"color":["Color:", "Green"],
				"notes":["Notes:", "Hanging rack/door"]
			},
			"contact17":{
				"group":["Group:", "Tops"],
				"name":["Name:", "Tank"],
				"brand":["Brand:", "MileyCyrus for Max Azria"],
				"color":["Color:", "White"],
				"notes":["Notes:", "Drawer 3"]
		    },		
		    "contact18":{
				"group":["Group:", "Pants"],
				"name":["Name:", "Jeans"],
				"brand":["Brand:", "Maurices"],
				"color":["Color:", "Light Denim"],
				"notes":["Notes:", "Drawer"]
		    },	
		    "contact19":{
				"group":["Group:", "Jewelry"],
				"name":["Name:", "Necklace"],
				"brand":["Brand:", "Al Scott Creations"],
				"color":["Color:", "Clear crystal"],
				"notes":["Notes:", "Stored in basket"]
		    },	
		    "contact20":{
				"group":["Group:", "Handbags"],
				"name":["Name:", "Margaret"],
				"brand":["Brand:", "Louis Vuitton"],
				"color":["Color:", "Multi"],
				"notes":["Notes:", "In tote 1"]
		    }		
		 };
		// Store JSON OBJECT inot Local Storage
		
		for(var n in json){
		var id = 	Math.floor(Math.random()*100000001);
		localStorage.setItem(id, JSON.stringify(json[n]));
		}
	}
