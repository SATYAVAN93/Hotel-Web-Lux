let inputBill = document.getElementById("bill")
let caseGiven = document.getElementById("case")
let checkBtn = document.getElementById("btn")
let errMesg = document.getElementById("error")
let noOfNotes = document.querySelectorAll(".no-of-notes");
let notes = [2000, 500, 100, 20, 10, 5, 1];

function errorHandle(error) {
    errMesg.style.display = "block";
    errMesg.innerText = error;
}

function hideMessage(){
    errMesg.style.display = "none";
}

function clickHandler() {
    hideMessage();
    if (inputBill.value < 0) {
        errorHandle("Please Enter a positive value");
    } else {
        var remaining = cashGiven.value - inputBill.value;
        if (remaining < 0) {
            errorHandle("Give me more");
        } else {
            for (var i = 0; i < notes.length; i++) {
                const paisa = Math.trunc(remaining / notes[i]);
                remaining %= notes[i];
                noOfNotes[i].innerText = paisa;

            }

        }
    }
}

checkBtn.addEventListener("click", clickHandler);