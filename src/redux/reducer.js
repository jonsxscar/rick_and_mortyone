import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER_CARDS,
  ORDER_CARDS
} from "./action_types";

const initialState = {
  myFavorites: [],
  allCharacters: []
};

const filterCharactersByGender = (characters, gender) => {
  return characters.filter((char) => char.gender === gender);
};

const orderCharactersById = (characters, order) => {
  return characters.sort((a, b) => {
    return order === "A" ? a.id - b.id : b.id - a.id;
  });
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
          (char) => char.id !== action.payload
        ),
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        )
      };
    case FILTER_CARDS:
      return {
        ...state,
        myFavorites: filterCharactersByGender(state.allCharacters, action.payload)
      };
    case ORDER_CARDS:
      return {
        ...state,
        myFavorites: orderCharactersById(state.allCharacters, action.payload)
      };
    default:
      return state;
  }
};

export default reducer;