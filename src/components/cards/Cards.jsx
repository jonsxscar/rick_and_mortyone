import Card from '../card/Card';
import style from './Cards.module.css'

export default function Cards({characters}) {
   return( 
   <div className={style.container}> {
      characters.map(({id, name, status, species, gender, origin, image}) => (
         <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={() => window.alert('Emulamos que se cierra la card')} />
      ))
      }
   </div>
   );
}
