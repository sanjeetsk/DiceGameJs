let playerName = document.querySelectorAll("input")
let btns=document.getElementsByClassName("diceRollButton")
let scores = document.getElementsByTagName("span")
let winnerbtn = document.getElementById("winner")
let output = document.querySelector(".output")


for(let i=0; i<=btns.length-1;i++){   //it will go button by button
    btns[i].addEventListener("click", ()=>{rollDice(btns[i].id)})
}

let btn_click=0

function rollDice(btn_id){
    btn_click++

    if(btn_click==5)
        winnerbtn.disabled=false
    btns[btn_id].disabled = true
    // console.log(btn_id)
    let arr=["1","2","3","4","5","6"]     //dice number
    let randomIndex=Math.floor(Math.random()*arr.length)  //0-6 only integer
    let randomDice=arr[randomIndex]
    // console.log(randomDice)
    scores[btn_id].innerText=randomDice
}

winnerbtn.addEventListener("click", decideWinner)

function decideWinner(){
    //highest Score
    let big=0
    for(let t of scores){
        //console.log(t)
        if(big < t.innerText){
            big=t.innerText
        }
    }
    //console.log(big)
    //find all those people who have highest score:
    let winnerList = []
    for(let i=0; i<=scores.length-1; i++){
        if(scores[i].innerText == big)
            winnerList.push(i)
    }

    console.log(winnerList)
    let names=[]
    //let names=""
    for(let t of winnerList){
        names.push(playerName[t].value)
        //names = names + " " + playerName[t].value
    }
    // output.innerText=names + " won the game"
    // console.log(names) 
    names=names.join(", ")
    output.innerText=names + " won the game"
}


