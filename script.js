let startBtn = document.querySelector("button");
let typeText = document.getElementById("typeText");
let inputText= document.getElementById("inputText");
let speed = document.getElementById("msg1");
let errorCount= document.getElementById("msg2");
let startTime,endTime;
// This text i wanna show 
inputText.disabled = true;
let text = [
    "with blue can but all out one four find once away can I eat she said what yellow  are new saw at welt he live this know  say make red now was jump that whi te red",    
     "Chapter I Tom! No answer. Tom! No answer. What's gone with that boy, I wonder? You Tom!",
     "A fox once saw a crow fly off with a piece of cheese in its beak and settle on a branch of a tree. The fox walked up to the foot of the tree." ,
     "It might seem crazy what I'm about to say. Sunshine she's here, you can take away. I'm a hot air balloon,",
     "Better slip with foot than tongue. He that can have patience can have what he will. If your head is wax, don't walk in the sun. Love your enemies",
     "nation decide caught sharp that's near slide flew cattle green mind he's not itself ask best general you're white major moving Mary street purpose mouth",
    ]



let startType = ()=>{
   inputText.disabled = false;
   inputText.value= " ";
   let numRandom = Math.floor(Math.random()*text.length);
   typeText.innerText=`${text[numRandom]}`;
   typeText.style.color = "Green";
   let time = new Date();
   startTime=time.getTime();
}

let countWord = (word)=>{
    let resutl = word.split(" ").length;
    return resutl;
}

let validation =()=>{
    if(inputText.value ===' '){
        alert('Pls Type the green color text in the white box')
        startBtn.innerText="Stop";
        document.querySelector("i").classList="fa-solid fa-stop"
    }else{
        endType();
    }
}

const compare = (str1,str2)=>{
    let words1 = str1.split();
    let words2 = str2.split();
    let num = 0;
    words1.forEach((elem,index) => {
        if(elem==words2[index]){
            num++;
        }
    });   
    let error = words1.length - num;
    return error;
}

let endType = ()=>{
    inputText.disabled = true;
    let time = new Date ();
    endTime = time.getTime();
    let totalTime = (endTime - startTime)/1000;
    console.log(totalTime);
    let str = inputText.value;
    let words = countWord (str);
    console.log(words)
    typeSpeed = Math.round((words/totalTime)*60);
    console.log(typeSpeed);
    speed.innerText = `${typeSpeed} WPM` 
    errorWords = compare(typeText.innerHTML,str)
    console.log(errorWords);
    errorCount.innerText = `${errorWords}`
}

start = true;

let toggle = ()=>{
   if(start==true){
       startBtn.innerText="Stop";
       document.querySelector("i").classList="fa-solid fa-stop";
       startType();
       start= false;
   }else{
       startBtn.innerText="Start";
       document.querySelector("i").classList="fa-solid fa-play";
       validation();
       start = true;
   }
}


startBtn.addEventListener("click",toggle);