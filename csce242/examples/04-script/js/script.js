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


///start and stop ball bounceing 
document.getElementById("btn-bounce").onclick = () => {

    const ball = document.getElementById("ball");

    if(e.currentTarget.innerHTML.toLowerCase() == "start") {
        e.currentTarget.innerHTML = "Stop";
        ball.classList.add("bounce"); 
    } else {
        e.currentTarget.innerHTML = "Start"; 
        ball.classList.remove("bounce");
    }
}

//plant display 
document.getElementById("txt-num-days").oncahnge = (e) =>  {
    const numEntered = parseInt(e.currentTarget.value)
    const p = document.getElementById("p-plant-message");

    if(numEntered <=0) {
        p.innerHTML = "Yay! We were fed today!";
    }else if (numEntered <= 2) {
        p.innerHTML = "I'm getting a little thirsty";
    }else if (numEntered <=5) {
        p.innerHTML = "I'm starting to wilt";
    } else {
        p.innerHTML = "You killed me :(";
    }
};

