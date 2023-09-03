let timer = 20;
let score = 0;
let rnHit =0;

function makeBubble(){
    let clutter ="";

for (let i = 1; i <=70; i++) {
    let randomNo = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${randomNo}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();


function createDiv() {
    let div = document.createElement('div');
    div.innerText = document.getElementById('getText').innerText;
    document.body.appendChild(div);
  }


function runTimer(){

 let timerInt =  setInterval(()=>{

        if(timer>0){
            timer--;
            document.querySelector('#timerVal').textContent = timer;
        }
        else{
           clearInterval(timerInt)
           
           document.getElementById('pbtm').innerHTML =`
           <h2>Your Score: ${score}</h2>
           <div id="btnPLayAgain">Play Again</div>
           `
        }
    },1000)

}
runTimer();

function getNewHit(){
    rnHit = Math.floor(Math.random()*10);
    document.querySelector('#hitVal').textContent = rnHit;
}
getNewHit()



function scoreUpdated(){
    score += 5;
    document.querySelector('#scoreVal').textContent = score;
}

document.getElementById('pbtm').addEventListener('click',function(details){
      let  clickedNum =  Number(details.target.textContent)
      if(clickedNum==rnHit){
        scoreUpdated();
        getNewHit();
        makeBubble();
      }
});


document.body.addEventListener('click', function (event) {
    if (event.target.id === 'btnPLayAgain') {
        location.reload();
    }
});