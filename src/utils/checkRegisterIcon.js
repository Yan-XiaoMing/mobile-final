import { randomNum } from './utils'

let num = 0
export function checkRegisterIcon(){
  if(num === 0){
    let random = randomNum(1,6);
    num = random
  }
  else{
    if(num < 6){
      num++
    }
    else{
      num = 1;
    }
  }
  return num
}
