var list = [];
var display = document.body.querySelector(".display");
var nav = document.body.querySelector(".nav");
var value = document.body.querySelector(".value");

var pages = [
  {
    title: "View",
    content: ""
  }
]

function pageMaker(pg){
  this.button = document.createElement("button");
  this.button.addEventListener("click", function(){
      writeStuff(pg.content, pg.title);
   })
  this.button.innerHTML = pg.title;
  nav.appendChild(this.button);
}

function validate(){
 var valEle = document.body.querySelector(".valMess")
 
  var username = document.body.querySelector(".username").value;
  
  if(username==="coolStudent123"){
    for(var i = 0; i < pages.length; i++){
  pageMaker(pages[i]);
}
  }else{
    valEle.innerHTML="Wrong username"
    }
}

function writePage(){
  display.innerHTML= "";
  var heading = document.createElement("h1")
  heading.innerHTML = "View"
  display.appendChild(heading);
}

function writeStuff(stuff, pg){
  if(pg!=="View"){
    display.innerHTML= "";
    var top = document.createElement("h1");
    var body = document.createElement("h3");
    top.innerHTML= pg;
    body.innerHTML= stuff;
    display.appendChild(top);
    display.appendChild(body);
  }else{
    writePage()
  }
}

function renderList(){
  var listEle = document.body.querySelector(".list")
  listEle.innerHTML="";
  
  for(var i=0; i<list.length; i++){
    var element = document.createElement("div");
    element.innerHTML=list[i];
    listEle.appendChild(element);
  }
}

document.body.querySelector(".validate").addEventListener("click", function(){
  validate()
})

document.body.querySelector(".add").addEventListener("click", function(){
  renderList()
})

writeStuff(pages[0].content, "");