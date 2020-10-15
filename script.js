//Counter message

var messages = document.getElementsByClassName("row").length;

document.getElementById("counter").textContent = messages;

//Trash function
var trashDOM = document.getElementsByClassName("trash");

for (var i = 0; i < trashDOM.length; i++) {
  trashDOM[i].addEventListener("click", function () {
    this.parentNode.remove();
    messages = document.getElementsByClassName("row").length;
    document.getElementById("counter").textContent = messages;
  });
}

//nouvelle row function
var newMsg = () => {
  //create div row
  var div = document.createElement("div");
  div.classList.add("row");
  div.id = "first-row";
  //create avatar
  var avatar = document.createElement("img");
  avatar.src = "avatar-RG.jpeg";
  avatar.classList.add("avatar");
  div.appendChild(avatar);
  //create div child
  var div_child = document.createElement("div");
  div.appendChild(div_child);
  //create h6
  var h6 = document.createElement("h6");
  var auteur = document.createTextNode("Raphaël Guedj");
  h6.appendChild(auteur);
  div_child.appendChild(h6);
  //create p
  var p = document.createElement("p");
  var valueMsg = document.getElementById("input_msg").value;
  var msg = document.createTextNode(valueMsg);
  p.appendChild(msg);
  div_child.appendChild(p);
  //create trash
  var trash = document.createElement("img");
  trash.src = "trash.png";
  trash.classList.add("trash");
  div.appendChild(trash);
  //delete input msg
  document.getElementById("input_msg").value = "";
  //delete function
  trash.addEventListener("click", function () {
    this.parentNode.remove();
    messages = document.getElementsByClassName("row").length;
    document.getElementById("counter").textContent = messages;
  });
  var firstChild = document.getElementById("first-row");
  var parentDiv = firstChild.parentNode;
  parentDiv.insertBefore(div, firstChild);
};

//Add click
var add = document.getElementById("btn");

add.addEventListener("click", function () {
  //new message function
  newMsg();
  //message counter
  var messages = document.getElementsByClassName("row").length;
  document.getElementById("counter").textContent = messages;
});
