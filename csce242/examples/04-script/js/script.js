/*
const showMessage = () => {
    console.log("hi");
}
*/
//button click
document.getElementById("btn-show-message").onclick = ()=>{
    document.getElementById("p-message").innerHTML = "Hi olivia";
}; 
/* console.log(button); */

//link example
//e is the event (Clicking)
//e.currentTarget is the element the event was performed on (the Link)
document.getElementById("a-click").onclick = (e) => {
    e.preventDefault(); //not go to links destintaion
    //console.log(e.currentTarget);
    e.currentTarget.innerHTML = "clicked";  
};

//event driven programming. The link takes you to the page where the link is, 
// that's why there is a # at the end of the url link