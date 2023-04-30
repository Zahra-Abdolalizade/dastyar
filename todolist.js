
const inputBox=document.getElementById("text");
const listContainer = document.getElementById('todocontainer')

function addToDo(){

    if(inputBox.value===""){
        alert("fill me")
    }
    else{
        let li=document.createElement("Li");
        li.innerHTML=inputBox.value;
        // console.log(inputBox)
        listContainer.appendChild(li)
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputBox.value=""
}


listContainer.addEventListener("click",function(e){
    if (e.target.tagName==='SPAN'){
        console.log(listContainer)
        e.target.parentElement.remove();
    };
},false)



  

