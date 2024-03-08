import { useState } from "react"
import martilloimg from '../img/martillo.png'
import '../styles/martillo.css'
function Martillo(){

    const [animacion, setAnimacion] = useState(false)

    const clickear = () => {
        setAnimacion(true); 
        setTimeout(() => {
          setAnimacion(false);
        }, 500);
      };

    return(
        <img src={martilloimg} className={animacion? 'animado': 'noanimado'} onClick={clickear}/>
    )
}

export default Martillo;