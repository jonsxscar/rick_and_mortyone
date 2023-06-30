import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./action_types";

const initialState = {
  myFavorites: [],
  allCharacters: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload]
      };
    case REMOVE_FAV:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(
          (char) => char.id !== action.payload),
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };
    case FILTER_CARDS:
      let copy = [...state.allCharacters];
      let filterGender = copy.filter((char) => {
        return char.gender === action.payload
        })
        return {
          ...state,
          myFavorites: filterGender
        }
    case ORDER_CARDS:
      let copy2 = [...state.allCharacters];
      return {
        ...state,
        myFavorites: copy2.sort((a,b) =>{
          return action.payload === "A" ? a.id - b.id : b.id - a.id
        })
      }

    default:
      return { ...state };
  }
};

export default reducer;
