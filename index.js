var totaltries = 0;
var randomnumber = randomIntFromInterval(1, 10);
var el = document.getElementById("USER_NUMBER");
var cntel = document.getElementById("cnt");
var inputel = document.getElementById("user-input");
var successel = document.getElementById("success");
var errorel = document.getElementById("error");
var responseel = document.getElementById("response");
successel.style.display = 'none';
errorel.style.display = 'none';
console.log(randomnumber);
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function checkNumber() {
    console.log(totaltries);
    console.log(randomnumber);
    var val = Number(el.value);
    totaltries += 1;
    console.log(val);
    cntel.innerHTML = totaltries.toString();
    if (val != randomnumber) {
        if (totaltries >= 5) {
            alert('You are out of tries!');
            inputel.style.display = 'none';
            responseel.style.display = 'none';
        }
    }
    else {
        alert('Congratulations! You have guessed it right!');
        inputel.style.display = 'none';
        responseel.style.display = 'none';
    }
}
