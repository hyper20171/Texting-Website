var storage = [];

function update(){

	var temp = document.getElementById("textAddedContainer");
	var data = "";
	for(i = 0; i < storage.length; i++){
		data += "<textarea id='"+i+"' readonly>";
		data += storage[i];
		data += "</textarea>";
		data += "<button class='btn btn-danger' onclick=remove("+i+")>Delete</button>";
		data += "&nbsp<button id ='edit"+i+"' class='btn btn-warning' onclick=edit("+i+")>Edit</button>";
		data += "&nbsp<button id='save"+i+"' style='display: none;' class='btn btn-warning' onclick=edit("+i+")>Save</button>";
		data += "<br><br>";
	}
	temp.innerHTML = data; 
}

function add(){
	var temp = document.getElementById("textAdded");
	var value = temp.value.trim();
	if(value){
		storage.push(value);
		temp.value = "";
		update();
	}
}

function remove(position){
	storage.splice(position,1);
	update();
}

function edit(position){
	var textField = document.getElementById(position);
	var save = document.getElementById("save" + position);
	var edit = document.getElementById("edit" + position)

	edit.style.display = "none";
	save.style.display = "inline";
	textField.removeAttribute('readonly');
	
	//This is not working 
	save.onclick = function(){
		
		save.style.display = "none";
		//textField.setAttribute('readonly', 'true');
		edit.style.display = "block";
		var text = textField.value.trim()
		if(text){
			//console.log(1);
			storage.splice(position,1,text);
			update();
		}
	}
}

/*
$(document).ready(function(){
	$("#textAdded").hide();
});  
*/