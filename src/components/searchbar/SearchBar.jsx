import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   return (
      <div className={style.divButton} >
         <input type='search' />
         <button className={style.button} onClick={onSearch}>Agregar</button>
      </div>
   );
}
