import searchConfig from '../config/searchPlaceholderConfig';

export function randomSearchPlaceholder() {
  let length = searchConfig.length;
  let random = Math.floor(Math.random() * length);
  return searchConfig[random];
}

export function randomNum(minNum = 1,maxNum = 40){
  switch(arguments.length){
    case 1:
      return parseInt(Math.random()*minNum+1,10);
    case 2:
      return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
    default:
      return 0;
  }
}

export function validResponse(result) {
  if(result && result.status === 200 && result.data.code === 0){
    return true
  }
  else{
    return false
  }
}
