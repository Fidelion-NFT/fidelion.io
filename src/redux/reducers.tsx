import { languege } from './initalState';
import { EN, KR, JP } from './action';

export const languegeReducer = (state = languege, action: { type: any; payload: any; }) => {
  switch(action.type){
    case EN:
      return state = 'EN';
    case KR:
      return state = 'KR';
    case JP:
      return state = 'JP';
    default:
      return state;
  }
}