
let boxs = document.querySelectorAll(".box");
let game = document.querySelector(".game");
let reset = document.querySelector("#reset");
let msg = document.querySelector(".msg");
let OO = document.querySelector("#OO");
let XX = document.querySelector("#XX");



reset.addEventListener("click",()=>{
    for(box of boxs) 
        {
            box.disabled = false;
            box.innerHTML = "";
            msg.innerHTML = "";
            XX.value = "";
            OO.value = "";
        }

})
let ternO = true;
const winPattern = [[1,2,3],[1,4,7],[1,5,9],
           [4,5,6],[7,8,9],[7,5,3],
           [2,5,8],[3,6,9]];

          // boxs.forEach((box) => { normal use of event listner (1)
                game.addEventListener("click", (event)=>{ // event deligation (2)
                    if(ternO)
                        {

// console.dir(event); 
// console.dir(event.srcElement);
// console.dir(event.srcElement.outHTML);                          
                                    event.target.innerHTML= "O";
                                    ternO = false;
                                         
                        }
                    else{
                        
                                event.target.innerHTML = "X";
                                ternO = true;         
                        
                    }    
                    event.target.disabled=true;
                    checkWinner();
                },true);
            //});
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
                                                    msg.innerHTML = `!congratulation ${OO.value ? OO.value + " - O": "O"} is the winner`;
                                                }
                                            else{
                                                msg.innerHTML = `!congratulation ${XX.value ? XX.value + " - X": "X"} is the winner`;
                                            }    
                                            disableRestBox();
                                            
                                        }
                                }
                        }
            }
            
           const disableRestBox = ()=>{
            for(box of boxs)
                {
                    box.disabled = true;
                }
           }







