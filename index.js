
let boxs = document.querySelectorAll(".box");
let game = document.querySelector(".game");
let start = document.querySelector("#reset");
let msg = document.querySelector(".msg");




let who = "O";
let count =0;

let clickSound = new Audio('./soundEffects/click.mp3')
let startSound = new Audio('./soundEffects/Start.wav')
let winSound = new Audio('./soundEffects/win.wav')




const  disableRestBox = () =>{
    for(b of boxs)
        {
            b.disabled = true;
        }
    
   };

disableRestBox();

const startGame = ()=>{
            count =0;
            getSoundEffect("start");
            setTimeout(()=>{
            for(b of boxs) 
                {
                    b.disabled = false;
                    b.innerHTML = "";
                    msg.innerHTML = `Start With : ${who}`;
                    
                }},3000)    
}

start.addEventListener("click",()=>{
    count = 0;
    getSoundEffect("start");
    for(b of boxs) 
        {
            b.disabled = false;
            b.innerHTML = "";
            msg.innerHTML = `Start With : ${who}`;
            
        }
})


const getSoundEffect = (sound)=>{
   if(sound === "start") startSound.play();
   else if(sound === "win") winSound.play();
   else if(sound === "click") clickSound.play();

}


const winPattern = [[1,2,3],[1,4,7],[1,5,9],
           [4,5,6],[7,8,9],[7,5,3],
           [2,5,8],[3,6,9]];

          // boxs.forEach((box) => { normal use of event listner (1

                game.addEventListener("click", (event)=>{ // event deligation (2)
                    getSoundEffect("click");
                    count++;
                    //console.log(count);
                    if(count === 9)
                         {    
                               msg.innerHTML = "No one won this match better luck next time";

                               startGame();
                         }
                    if(who === "O")
                        {                        
                                event.target.innerHTML= "O";
                                who = 'X';
                                            
                        }
                        else{
                            
                                event.target.innerHTML = "X";
                                who = 'O';         
                            
                        }    
                        event.target.disabled=true;
                        checkWinner();
                });
           // });

            function checkWinner(){
                    for(pattern of winPattern)
                        {
                              
                            let pos1 = boxs[pattern[0]-1].innerHTML;
                            let pos2 = boxs[pattern[1]-1].innerHTML;
                            let pos3 = boxs[pattern[2]-1].innerHTML;
                           
                           if(pos1 != "" && pos2  != "" && pos3 != "")
                                {
                                    if(pos1 == pos2 && pos2 == pos3)
                                        {
                                            if(pos1 == "O")
                                                {
                                                    msg.innerHTML = `!congratulation O is the winner`;
                                                   
                                                }
                                            else{
                                                    msg.innerHTML = `!congratulation X is the winner`;
                                                    
                                            }
                                            getSoundEffect("win");   
                                            disableRestBox();
                                            startGame();
                                            
                                        }
                                        
                                }
                                
                        }
            }
        







