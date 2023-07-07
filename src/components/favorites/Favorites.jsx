import React from "react";
//import { connect } from "react-redux";
import Card from "../card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";//reemplazan a connect


function Favorites() {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);
  const myFavorites = useSelector(state => state.myFavorites);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  }

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  }

  return (
    <div>
      <div>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknow">Unknow</option>
        </select>
      </div>
      {myFavorites.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={char.onClose}
          />
        );
      })}
    </div>
  );
}

export default Favorites

/* function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites); */
