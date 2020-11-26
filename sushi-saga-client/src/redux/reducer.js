
const initialState = {
  sushis: [],
  offset: 0
}

// reducer takes in the state of the app, and an action, and returns a new state of the app

export const reducer = (state=initialState, action) => {
  switch (action.type){
    case "SET_SUSHIS":
      return {...state, sushis: action.payload.sushis};
    case "MORE_SUSHIS":
      const {offset, sushis} = state
      if (offset + 4 < sushis.length - 1){
        return ({ ...state, offset: offset + 4 })
      } else {
        return ({ ...state, offset: 0 })
      }
    case "EAT_SUSHI":
      return({...state, sushis: state.sushis.map(sushi => sushi.id === action.payload.id ? {...sushi, eaten: true} : sushi)})
    default:
      return {...state}
  }
}
