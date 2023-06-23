import { useState } from "react";
import style from'./Form.module.css';
import { validation } from "./validation";

function Form({ login }) {

    const [userData, setUserData] = useState({
        email:'',
        password:''
    })

    // console.log(userData);

    const [errors, setErrors] = useState({})

    const handleChange = function(evento){
        const nameProperty = evento.target.name;
        const value = evento.target.value

        setErrors(validation({...userData, [nameProperty]:value}))
        setUserData({...userData, [nameProperty]:value})
    }

    function handleSubmit(evento){
        evento.preventDefault()
        login(userData)
    }
    
    return <div>
            <form className= {style.form} onSubmit={handleSubmit} >
                <label className= {style.label} htmlFor="">
                    email:
                    <input className= {style.input}
                        type="text" 
                        value={userData.email}
                        name="email"
                        onChange={handleChange} />
                </label>
                <span style={{color:"white"}} >{errors.email}</span>
                <label className= {style.label} htmlFor="">
                    password:
                    <input className= {style.input}
                        type="password" 
                        value={userData.password}
                        name="password"
                        onChange={handleChange} />
                </label>
                <span style={{color:"white"}}>{errors.password}</span>
                <button className= {style.button} >Submit</button>
            </form>
        </div>;
}

export default Form;