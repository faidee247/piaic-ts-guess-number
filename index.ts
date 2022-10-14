let totaltries:number = 0;
let randomnumber:number = randomIntFromInterval(1,10);

const el = document.getElementById("USER_NUMBER") as HTMLInputElement;

const cntel = document.getElementById("cnt") as HTMLSpanElement;

const inputel = document.getElementById("user-input") as HTMLDivElement;
const successel = document.getElementById("success") as HTMLDivElement;
const errorel = document.getElementById("error") as HTMLDivElement;
const responseel = document.getElementById("response") as HTMLDivElement;

successel.style.display = 'none';
errorel.style.display = 'none';


console.log(randomnumber);

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function checkNumber():void{

    
    
    console.log(totaltries);
    console.log(randomnumber);
    let val:number = Number(el.value);
    totaltries += 1;
    console.log(val);

    cntel.innerHTML = totaltries.toString();

    if (val != randomnumber){
    
    if(totaltries >= 5){
        alert('You are out of tries!');
        inputel.style.display = 'none';
        responseel.style.display = 'none';
        
    }
    }else{
        alert('Congratulations! You have guessed it right!');
        inputel.style.display = 'none';
        responseel.style.display = 'none';
    }
}