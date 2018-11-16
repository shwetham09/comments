function createCommentBox(event)
{
event.preventDefault();
//create a div for comment
var counter=1;
var ccounter=1;
if(document.querySelector("#page-commment-input").value!= "")
{
var element = document.createElement("div");
element.setAttribute("class", "parent-comment");
idname="parentcomment"+String(counter);
counter=counter+1;
element.setAttribute("id",idname);
element.innerHTML= '<div>'+document.querySelector("#page-commment-input").value+'</div>' + '<img src="delete.png" width="30" height="30" onclick="deletecomment(idname)"/>';


//Append the element in page
var txt = document.getElementById("commentarea");
txt.appendChild(element);


var element = document.createElement("div");
element.setAttribute("class", "child-comment");
cidname="childcomment"+String(ccounter);
ccounter=ccounter+1;
element.setAttribute("id",cidname);
element.setAttribute("placeholder","Enter your reply here");
element.innerHTML='<input type="text" placeholder="Enter your reply here" class="inputcss">' +'<button class="submit" onclick="addReply(cidname)" >Add Reply</button>';



//Append the element in page
var txt = document.getElementById("commentarea");
txt.appendChild(element);
// clear the parent page input after the append
document.querySelector("#page-commment-input").value = "";
}
else{
    alert("Please input comment!!");
}

}

function addReply(cidname)
{


var element = document.createElement("div");
element.setAttribute("class", "child-comment");
element.setAttribute("placeholder","Enter your reply here")
element.innerHTML='<input type="text" placeholder="Enter your reply here" class="inputcss">' + '<button class="submit" onclick="addReply()" >Add Reply</button>';



//Append the element in page
var txt = document.getElementById("commentarea");
txt.appendChild(element);

}


function deletecomment(parent1)
{
    alert("Its going to delete its child comment too!!")
    var parent = document.getElementById(parent1);
    var child = document.getElementById("cidname")
    parent.parentNode.removeChild(parent);
    child.parentNode.removeChild(child);
}
