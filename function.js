function openPage(pageName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


var modals = document.getElementsByClassName("modal");
var btns = document.getElementsByClassName("btn");
var spanes = document.getElementsByClassName("close"); 
var funcs = [];
 
function Modal(num) {
  return function() {
    btns[num].onclick =  function() {
        modals[num].style.display = "block";
        console.log(num);
    };
 
    spanes[num].onclick = function() {
        modals[num].style.display = "none";
    };
  };
}
 
for(var i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}
for(var j = 0; j < btns.length; j++) {
  funcs[j]();
}
window.onclick = function(event) {
  if (event.target.className == "modal") {
      event.target.style.display = "none";
  }
};
