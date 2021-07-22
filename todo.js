let input = document.querySelector(".add-task input");
let plusBtn = document.querySelector(".add-task span");
let tasksList = document.querySelector(".tasks-list");
let tasksCount = document.querySelector(".tasks-count");
let tasksCompleted = document.querySelector(".tasks-completed");
let noTaskMsg = document.querySelector(".no-task-message");
let deleteAll = document.querySelector(".delete-all");
let finishAll = document.querySelector(".finish-all");

plusBtn.addEventListener("click",addTask);

window.addEventListener("keyup",checkKey);
function checkKey(key) {
    if (key.keyCode == 13) {
        addTask();
    }
}
window.onload = function () {
    input.focus();

};
clac();


function addTask() {
    if(input.value === ''){
        alert("you didn't type any tasks name")
    }else{
        
        noTaskMsg.style.display="none";

        let mainSpan = document.createElement("span");
        let text = document.createTextNode(input.value);
        
        mainSpan.classList.add("main-span")
        mainSpan.appendChild(text);
        let deleteElement = document.createElement("span");
        deleteElement.classList.add("delete");
        let deleteText = document.createTextNode("Delete");
        deleteElement.appendChild(deleteText);
        let finished = document.createElement("span");
        finished.classList.add("finished-btn");
        let finishedText = document.createTextNode("Finished");
        finished.appendChild(finishedText);
        mainSpan.appendChild(deleteElement);
        mainSpan.appendChild(finished)
        tasksList.appendChild(mainSpan);


        input.value = "";
        clac();
        input.focus();
        plusBtn.classList.toggle("rotate")

        


    }

}

document.addEventListener("click",function (e) {
    if(e.target.className == "delete"){
        e.target.parentNode.remove();
        clac();
        input.focus();



}
})

document.addEventListener("click",function (e) {
    if(e.target.className == "finished-btn"){
        e.target.parentNode.classList.toggle("finished")
        input.focus();
        clac();

    }
    
})

function clac() {
    tasksCount.innerHTML = document.querySelectorAll(".tasks-list .main-span").length;
    tasksCompleted.innerHTML = document.querySelectorAll(".finished").length;
    if (document.querySelectorAll(".tasks-list .main-span").length == 0) {
        noTaskMsg.style.display="flex";
        
    }else if(document.querySelectorAll(".tasks-list .main-span").length > 1){
        finishAll.classList.add("active");
        deleteAll.classList.add("active");
    }else if (document.querySelectorAll(".tasks-list .main-span").length <=1) {
        deleteAll.classList.remove("active");
        finishAll.classList.remove("active");
        
    }
}




deleteAll.addEventListener("click",deleteAllFun)
function deleteAllFun() {
    let AllSpans = document.querySelectorAll(".main-span");
    AllSpans.forEach(function (span) {
        span.remove();
        input.focus();
        clac();
    })  
}
finishAll.addEventListener("click",finishAllFun);
function finishAllFun() {
    let AllSpans = Array.from(document.querySelectorAll(".main-span"))
    let fin = AllSpans.filter(finishedSpan => finishedSpan.classList.contains('finished'));
    AllSpans.forEach(function (span) {
        if (fin.length < AllSpans.length ) {
            span.classList.add("finished")
        }else if (fin.length == AllSpans.length){
            span.classList.toggle("finished")
        }
    })
    input.focus();
        clac();
}

    
function calculate(a) {
    let b = eval(a.replace(/plus/g, "+"))
    return b.toString()
}
console.log(calculate("1plus2plus3plus4"))