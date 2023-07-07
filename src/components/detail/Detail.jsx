import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const { id } = useParams();
  const [charDetail, setCharDetail] = useState({});

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        const data = response.data;
        if (data.name) {
          setCharDetail(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacterDetail();

    return () => {
      setCharDetail({});
    };
  }, [id]);

  return (
    <div>
      <h2>{charDetail.id}</h2>
      <h2>{charDetail.name}</h2>
      <h4>{charDetail.status}</h4>
      <h4>{charDetail.species}</h4>
      <h4>{charDetail.gender}</h4>
      <h4>{charDetail.origin?.name}</h4>
      <img src={charDetail.image} alt={charDetail.name} />
    </div>
  );
}

export default Detail;

/* import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
    const { id } = useParams();
    const [ charDetail, setCharDetail ] = useState({})

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then((data) => {
      if (data.name) {
        setCharDetail(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharDetail({});
    },[id])
  return <div>
    <h2>{charDetail.id}</h2>
    <h2>{charDetail.name}</h2>
    <h4>{charDetail.status}</h4>
    <h4>{charDetail.species}</h4>
    <h4>{charDetail.gender}</h4>
    <h4>{charDetail.origin?.name}</h4>
    <img src={charDetail.image} alt={charDetail.name} />
  </div>;
}

export default Detail; */