  //single Element selectors
  //getElement byid

   console.log(document.getElementById("task-title"));
     console.log(document.getElementById("task-title").id)
     console.log(document.getElementById("task-title").className)

     //change style
     const a=document.getElementById("task-title")
     a.style.backgroundColor="blue";
     a.style.color="red";
     a.style.padding="10px";

     //textcontent
     a.textContent="shiva";
     a.innerText="shiva coder";
         a.innerHTML="<span style=color:yellow>Task-List</span>"

     //Query element Selector
     console.log(document.querySelector("#task-title"));
     console.log(document.querySelector(".card-action"));
     console.log(document.querySelector("ul"));

     document.querySelector("li").style.color="pink";
     document.querySelector("li:last-child").style.color="red";
     document.querySelector("li:nth-child(2)").style.color="darkblue";
     document.querySelector("li:nth-child(3)").style.color="aqua";
