let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".btn");
let newGamebtn=document.querySelector("#new");
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let turno = true;
let count=0;

const winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
  
];

const resetgame=()=>{
  turno=true;
  count=0;
  enbledBox();
  msgContainer.classList.add("hide");

  
}

boxes.forEach((box) => {
  
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turno === true) {
      box.innerText = "O";
      
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    count=count+1;


    let isWinner=checkWinner();
    if(count===9 && !isWinner){
      Draw();
    }

  });
});

const Draw=()=>{
  msg.innerText=`This game was draw,Try new one`;
  msgContainer.classList.remove("hide");
  disableBoxes();


};


const disabledBox=() =>{
    for(let box of boxes){
        box.disabled=true;
        
    }
}

const enbledBox=() =>{
  for(let box of boxes){
      box.disabled=false;
      box.innerText="";
  }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is  ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBox();
}

const checkWinner = () => {
  for (let pattern of winningPattern) {
   
    posVal1= boxes[pattern[0]].innerText
    posVal2= boxes[pattern[1]].innerText
    posVal3= boxes[pattern[2]].innerText
    if(posVal1!=0 && posVal2!=0 && posVal3!=0){
        if(posVal1===posVal2 && posVal2===posVal3){
            console.log("winner",posVal1)
            showWinner(posVal1);
        }
    }
    
  }
};
newGamebtn.addEventListener("click",resetgame)

resetbtn.addEventListener("click",resetgame)