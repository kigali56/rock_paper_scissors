function getComputerChoice() {
      const chooseRand= ['rock', 'paper', 'scissors'];
      return chooseRand[Math.floor(Math.random()*chooseRand.length)];
}

function playrounds(playerselection,computerselection){
      if(playerselection!=='paper'&& playerselection!=='rock' && playerselection!=='scissors'){
            return 'Ooops! you have chosen incorectly try again'
      }
      if(computerselection==='rock'){
            if(computerselection==='rock' && playerselection==='paper' ){
                  return 'you win! paper beat rock';
            
            }
            else if(computerselection==='rock' && playerselection==='scissors' ){
                  return 'you loose! rock beat scissors';
            
            } else{
                  return 'Ooops! draw';
            
            }  
      }else if(computerselection==='paper'){
            if(computerselection==='paper' && playerselection==='rock' ){
                  return 'you loose! paper beat rock';
            
            }
            else if(computerselection==='paper' && playerselection==='scissors' ){
                  return 'you win! scissors beat paper';
            
            } else{
                  return 'Ooops! draw';
            
            }  
      } else if(computerselection==='scissors'){
            if(computerselection==='scissors' && playerselection==='paper' ){
                  return 'you loose! scissors beat  paper';
            
            }
            else if(computerselection==='scissors' && playerselection==='rock' ){
                  return 'you win! rock beat scissors';
            
            } else{
                  return 'Ooops! draw';
            
            }  
      }  

}
const playerselection=prompt("Start the game by choosing one of these words: rock,paper OR scissors ").toLowerCase();
const computerselection= getComputerChoice();
console.log (playrounds(playerselection,computerselection)) ;
