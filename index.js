let text = document.getElementById("typeText");
let textArea = document.getElementById("textArea");
let button = document.querySelector(".btn-primary")
textArea.disabled=true;
textArea.style.backgroundColor = "white";

let startTime,endTime;
let textShow = [
    "The quick brown fox jumps over the lazy dog.",
    "However, most of the traders experienced in forex trading will tell you that's not a good idea.",
    "They can, however, give their views, or opininons, about something, if they make it clear",
    "It had winds of one hundred fifty mph. the hurricane turned to the northeast and again",
    "It had located between the lungs, to the left of the thorax, resting on the  diaphragm",
    "Fluids are the lifeblood of the transmission, serving to keep the internal parts cool",
  ]

let startType = ()=>{
    textArea.value = "";
    document.getElementById("msg2").innerHTML = "";
    document.getElementById("msg1").innerHTML ="";
    let numRandom = Math.floor(Math.random()*textShow.length);
    text.innerText = textShow[numRandom];
    let time = new Date ();
    startTime = time.getTime();
    console.log(startTime);
}

let words = (str)=>{
    result = str.length;
    return result;
}

function compare (str1,str2){
   let num = 0;
   let words1 = str1.split (" ");
   let words2 = str2.split (" ");
    words1.forEach((elem,index) => {
        // console.log(elem);
        // console.log(words2[index])
        if(elem === words2[index]){
            // console.log(words2[index]);
            num++;
        }   
    });
    console.log(num);
    console.log(words1.length);
    error = words1.length - num ;
    console.log(error);
    return error;
}

let endType = ()=>{

    if(textArea.value ===' '){
        alert("Your typing speeed is 0 WPM");
        alert.style.color = "red";
    }else{
        let time = new Date ();
        endTime = time.getTime();
        let totalTime = ((endTime - startTime)/1000)/60;
        // console.log(endTime);
        
        // console.log(totalTime);
    
        let countLetter = words(textArea.value);
        // console.log(countLetter);
        let typeSpeed = Math.round((countLetter/5)/totalTime);
        // console.log(typeSpeed);
        document.getElementById("msg1").innerHTML=`${typeSpeed} WPM`;
        alert(`Your type speed is = ${typeSpeed} WPM`)
        let errorCount = compare(text.innerHTML,textArea.value);
        document.getElementById("msg2").innerHTML = `${errorCount} word`; 
    }
   
    
}

let start = true;
let toggle = ()=>{
    if(start===true){
        textArea.disabled=false;
        button.innerHTML="■ stop";
        startType();
        start=false;

    }else{
        textArea.disabled=true;
        button.innerHTML="⏵Start";
        endType();
        start=true;
    }
}


button.addEventListener("click",toggle)