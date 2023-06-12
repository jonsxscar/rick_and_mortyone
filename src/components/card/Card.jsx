import style from './Card.module.css'

export default function Card(props) {
   return (
      <div className={style.container}>
         <button onClick={props.onClose}>X</button>
         <h2>{props.id}</h2>
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt={props.name} />
      </div>
   );
}
