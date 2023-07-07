import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import style from "./Card.module.css";

function Card({
  id,
  name,
  status,
  species,
  origin,
  gender,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const { pathname } = useLocation();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const isFavorite = myFavorites.some((charFav) => charFav.id === id);
    setIsFav(isFavorite);
  }, [myFavorites, id]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, origin, gender, image });
    }
  };

  return (
    <div className={style.container}>
      {pathname === "/home" && <button onClick={() => onClose(id)}>X</button>}
      <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
      <h2>{id}</h2>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <img src={image} alt={name} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

/* import style from "./Card.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useLocation } from "react-router-dom";

function Card({
  id,
  name,
  status,
  species,
  origin,
  gender,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
  allCharacters,
}) {
  const { pathname } = useLocation();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((charFav) => {
      //all characters
      if (charFav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, origin, gender, image }); //creo debe ser character
    }
  };

  return (
    <div className={style.container}>
      {pathname === "/home" && <button onClick={() => onClose(id)}>X</button>}
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <h2>{id}</h2>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <img src={image} alt={name} />
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addFav: function (character) {
      dispatch(addFav(character));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites, //allcharacters
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
 */