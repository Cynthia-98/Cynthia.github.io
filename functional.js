/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
/* 
    Created on : Sep 6, 2022, 7:52:48 PM
    Author     : cynthiamatuba
    St NO      : c20463
*/
//getting all required elements

const inputBox= document.querySelector(".inputField input");
const btn_add = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");


inputBox.onkeyup = () => {
    let userData = inputBox.value;  //getting the user entered value
    if (userData.trim() !==0){//if user is not using only spaces
       btn_add.classList.add("active");  //activate the add button
    }else{
         btn_add.classList.remove("active");  //unactivate the add button
    }
};

//if user press click the add button


btn_add.onclick = ()=>{
    let userData = inputBox.value; //getting user entered value
    let getlocalStorage = localStorage.getItem("New Todo"); // getting localstorage
    if(getlocalStorage === null) { // if the localStorage is empty
        listArr = [];//creating blank array
    }else{
        listArr = JSON.parse(getlocalStorage); //transforming json string into javascript object
    }
    listArr.push(userData); //pushing or adding user data
    localStorage.setItem("New Todo", + "JSON.stringify"(listArr)); // transforming javascript object into json string
    
};
// function  that add a list task into ul tags
function showTask(){
    let getlocalStorage = localStorage.getItem("New Todo"); //getting local storage
    if (getlocalStorage === null){// if storage is empty
        listArr =[]; // creaating a blank array
    }else { 
        listArr= JSON.parse(getlocalStorage); //transforming json string into javascript object
    }
    let newLiTag ="";
    listArr.forEach((element,index) => {
       newLiTag  += "<li> ${element} <span><button>delete</button></span></li>";
   });
   todoList.innerHTML = newLiTag; // adding a new list innside ul tags
   inputBox.value ="";
};

//delete task function

function deleteTask(index){
    let getlocalStorage = localStorage.getItem("New Todo"); 
    listArr = JSON.parse(getlocalStorage);
    listArr.splice(index,1); // delete  the particular indexed li
    //after deleting  the li update the local storage again
    localStorage.setItem("New Todo", JSON.stringfy(listArr)); // tansforning  javascript object into json string
    showTask(); // calling the showtask function
};
