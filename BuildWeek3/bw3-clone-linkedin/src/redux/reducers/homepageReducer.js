
// export default function homepageReducer(state=[], action) {
//     switch(action.type){
//         case 'GET_POST_LIST':
//             return action.payload
//           // case 'CREATE_POST':
//           // return action.payload
//         default:
//           break
//     }
//   return state
// }

export default function homepageReducer(state=[], action) {
  switch(action.type){
      case 'GET_POST_LIST':
          return {
            ...state, 
            homepage:[action.payload]}
        case 'CREATE_POST':
          return {
            ...state, 
            post:[action.payload]}
      default:
        break;
  }
return state
}