//java script

//geometric shape
document.getElementById("sunColumn").onclick = () => {
    document.getElementById("sunList").innerHTML = "<div class='geometric-shape'></div>"; 
};

//date
const dateInput = document.getElementById('dateInput');
const displayDate = document.getElementById('displayDate');
const dateOutput = document.getElementById('dateOutput');

dateInput.addEventListener('change', function() {
    if (this.value) {
        // Convert from YYYY-MM-DD to MM-DD-YYYY
        const parts = this.value.split('-');
        //adding different parts of date tg
        const formattedDate = parts[1] + '-' + parts[2] + '-' + parts[0];
        displayDate.textContent = formattedDate;
        dateOutput.style.display = 'block';
    }
});

//image - add colorful frame when clicked
const imageColumn = document.getElementById("imageColumn");
const sunImage = document.getElementById("sun");

if (imageColumn && sunImage) {
    imageColumn.onclick = function() {
        sunImage.style.border = "10px solid";
        sunImage.style.borderTopColor = "red";
        sunImage.style.borderRightColor = "green";
        sunImage.style.borderBottomColor = "blue";
        sunImage.style.borderLeftColor = "purple";
    };
} else {
    console.error("Cannot find imageColumn or sun element!");
}