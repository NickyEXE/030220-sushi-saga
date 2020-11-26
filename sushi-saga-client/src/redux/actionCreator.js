export const eat = (id) => ({type: "EAT_SUSHI", payload: { id }})
export const moreSushis = () => ({type: "MORE_SUSHIS"})

// THUNK ALLOWS US TO PASS A FUNCTION THAT TAKES IN DISPATCH AS AN ARGUMENT TO OUR DISPATCH FUNCTION
// WITHOUT THUNK THIS CODE WILL GIVE US AN ERROR:
export const getSushis = () => {
  return dispatch => fetch("http://localhost:3000/sushis")
  .then(res => res.json())
  .then(sushis => dispatch({type: "SET_SUSHIS", payload: { sushis }}))
}
