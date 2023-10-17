document.addEventListener("DOMContentLoaded",function(){
    var inp=document.getElementById("inp");
    var button=document.getElementById("button");
    var ans=document.querySelector(".val");
    button.addEventListener("click", function () {
                 add();
             });
      inp.addEventListener("keyup", function(event) {
             if (event.key === "Enter") {
                 add();
          }
       });
    function add(){
     let input=inp.value;
     if(input.trim()==="") return;
     const create=document.createElement("li");
     create.innerHTML=`${input}  <button class="delete">Delete</button>`;
     ans.appendChild(create);
     create.querySelector(".delete").addEventListener("click",function(){
         ans.removeChild(create);
     })
     
     inp.value="";
     inp.focus();
    }
 
 
 
         })
     