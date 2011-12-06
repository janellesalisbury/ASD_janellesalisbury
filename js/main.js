
window.addEventListener("DOMContentLoaded", function(){

//get element by id function
	function $(x){
	   var theElement = document.getElementById(x);
	   return theElement;
	}
	
// create select field and populate with options
	function makeCats(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $("select"),
			makeSelect = document.createElement("select");
			makeSelect.setAttribute("id","groups");
		for (var i = 0, j = clothingCategories.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optText = clothingCategories[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	function getCheckboxValue(){
		if ($("dryCleanOnly").checked){
			dryCleanValue = $("dryCleanOnly").value;
			
		}else{
			dryCleanValue = "No"
		}
	
	}
	
	function toggleControls(n){
		switch(n){
			case "on":
				$("contactForm").style.display = "none";
				$("clear").style.display = "inline";
				$("displayLink").style.display = "none";
				$("addNew").style.display = "inline";
				break;
			case "off":
				$("contactForm").style.display = "block";
				$("clear").style.display = "inline";
				$("displayLink").style.display = "inline";
				$("addNew").style.display = "none";
				$("items").style.display = "none";
				break;
			default:
				return false;
		}
			
	}
	
	function storeData(key){
	//If there is no key, this means this is a brand new item and we need a new key.
		if(!key){
			var id		= Math.floor(Math.random()*100000001);
		}else{
			// Set the id to the existing item we're editing so that it will save over the data.
			// The key is the same key that's been passed along from the editSubmit event handler
			// to the validate function, and then passed here, to the storeData function.
			id = key;
		}
		// Gather up form field values and store in an object
		// Object properties contain array with the form label and input values.
		getCheckboxValue();
		var item	= {};
			item.groups = ["Groups", $("groups").value];
			item.name = ["Name", $("name").value];
			item.brand = ["Brand", $("brand").value];
			item.color = ["Color", $("color").value];
			item.drycleanonly = ["Dry Clean Only", dryCleanValue];
			item.notes = ["Notes", $("notes").value];
		// Save data to local storage: Use stringify to convert our object to a string
		localStorage.setItem(id, JSON.stringify(item));
		alert ("Item Saved");
	}
	
	function getData(){
		toggleControls("on");
		if(localStorage.length === 0){
			autoFillData();
			alert("There is no data in Local Storage so default data was stored.");
		}
	//write data from local storage to browser
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$("items").style.display = "block";
		for (var i=0, len=localStorage.length; i<len;i++){
			var makeLi = document.createElement("li");
			var linksLi = document.createElement("li");
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// convert the string from local storage value back to an object using JSON.parse ()
			var obj = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeLi.appendChild(makeSubList);
			for (var n in obj){
				var makeSubli=document.createElement("li");
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
				
			}	
		makeItemLinks(localStorage.key(i), linksLi); //create our edit and delete buttons/links for each item in local storage.
		}
	}
	
	
		//Make Item Links
	//Create the edit and delete links for each stored item when displayed
	
	function makeItemLinks(key, linksLi){
	
	//add edit single item link
	var editLink = document.createElement("a");
    editLink.href = "#";
	editLink.key = key;
	var editText = "Edit Item";
	editLink.addEventListener("click", editItem);
	editLink.innerHTML = editText;
	linksLi.appendChild(editLink);
	
	//add link break
	var breakTag = document.createElement("br");
	linksLi.appendChild(breakTag);
	
	
	//add delete single item link
	var deleteLink = document.createElement("a");
    deleteLink.href = "#";
	deleteLink.key = key;
	var deleteText = "Delete Item";
	deleteLink.addEventListener("click", deleteItem);
	deleteLink.innerHTML = deleteText;
	linksLi.appendChild(deleteLink);
	
	}
	//Edit single items
	function editItem(){
		// Grab the data from our item from local storage.
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		//show the form
		toggleControls("off");
		
		// Populate the form fields with the current local storage values.
		$("groups").value = item.group[1];
		$("name").value = item.name[1];
		$("brand").value = item.brand[1];
		$("color").value = item.color[1];
		if(item.dryClean[1]==="Yes"){
			$("dryCleanOnly").setAttribute("checked", "checked");
		}
		$("notes").value = item.notes[1];
		
		//Remove the initial listener from the input 'save item' button.
		save.removeEventListener("click", storeData);
		// Change submit button value to Edit Button.
		$("submit").value = "Edit Item";
		var editSubmit = $("submit");
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
	
	
	}
	
	function deleteItem(){
		var ask = confirm("Are you sure you want to delete this item?");
		if(ask){
			localStorage.removeItem(this.key);
			window.location.reload();
		}else{
			alert("Item was not deleted.")
		
		}
	
	
	 }
	
	
	function clearLocal(){
		if(localStorage.length === 0){
		   alert ("There is no data to clear.")
		
		}else{
			localStorage.clear();
			alert("All items deleted!");
			window.location.reload();
			return false;
		}
	}
	
	function validate(e){
	// Define elements we want to check
		var getGroup = $("groups");
		var getName = $("name");
		var getBrand = $("brand");
		var getColor = $("color");
		
		// reset Error Messages
		errMsg.innerHTML = "";
		getGroup.style.border = "1px solid black";
		getName.style.border = "1px solid black";
		getBrand.style.border = "1px solid black";
		getColor.style.border = "1px solid black";
		
		//Get error messages
		var messageAry = [];
		//Group validation
		if(getGroup.value ==="--- Choose A Group ---"){
			var groupError = "Please choose a group";
			getGroup.style.border = "1px solid red";
			messageAry.push(groupError);
		}	
		//Name
		if(getName.value === ""){
			var nameError = "Please enter a name";
			getName.style.border = "1px solid red";
			messageAry.push(nameError);
		}	
		//Brand 
		if(getBrand.value === ""){
			var brandError = "Please enter a brand";
			getBrand.style.border = "1px solid red";
			messageAry.push(brandError);
		}
		//Color
		if(getColor.value === ""){
			var colorError = "Please enter a color";
			getColor.style.border = "1px solid red";
			messageAry.push(colorError);
		}
		//If there are errors, display on the screen.
		if(messageAry.length >= 1){
			for(var i=0, j=messageAry.length; i < j; i++){
				var txt = document.createElement("li");
				txt.innerHTML = messageAry[i];
				errMsg.appendChild(txt);
			}
			e.preventDefault();
		    return false;
		}else{
			// If all is okay, save our data! Send the key value(which came from the editData function.)
			// Remember this key value was passed through the event listener as a property.
			storeData(this.key);

		}
	}
//Variable defaults
	var clothingCategories = ["--Choose a Category--", "Shoes", "Tops", "Bottoms", "Jewelry", "Handbags"],
		dryCleanValue = "No",
		errMsg=$("errors");
		;
	makeCats();

//set link & submit click events

	var displayLink = $("displayLink");
	displayLink.addEventListener("click", getData);
	var clearLink = $("clear");
	clearLink.addEventListener("click", clearLocal);
	var save = $("submit");
	console.log(save);
	save.addEventListener("click", validate);
	


});