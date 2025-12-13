const input=document.querySelector("input");
const ul =document.querySelector("ul");
const button=document.querySelector("button");
function add(){
    const inputVal=input.value;
    if (inputVal===""){
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "You Are Not Enter Task!",
  footer: '<a href="issue.html">Why do I have this issue?</a>',
   customClass: {
    popup: 'small-alert'
  }
});
    }
    
    else{
        let li=document.createElement("li");
        li.classList.add("task")
        let P=document.createElement("p");
        P.textContent=inputVal;
        li.appendChild(P);
        let i=document.createElement("i");
       i.className = "fa-solid fa-trash";
        li.appendChild(i)
        ul.appendChild(li)
  }
input.value="";
setLocal();
}


button.addEventListener("click",add);

ul.addEventListener("click", function(e){
    if(e.target.tagName === "P"){ 
        const li = e.target.parentElement; // نجيب ال li الأب
        li.classList.toggle("checked");
    }
    setLocal()
}
);

ul.addEventListener("click",function(e){
    if (e.target.tagName==="I"){
       e.target.parentElement.remove();
    }
    setLocal()
})
input.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
        add();
    }
})
function setLocal(){
   localStorage.setItem("tasks",ul.innerHTML)//we save all li 
}
function loadLocal(){
   ul.innerHTML=localStorage.getItem("tasks")
}
loadLocal();