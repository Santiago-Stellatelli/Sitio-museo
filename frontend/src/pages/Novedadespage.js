import Header from "../components/Header";
import '../styles/Novedadespage.css';
import Cintaimg from "../img/Cinta.jpeg";
import Section2alt4 from "../components/Section2alt4";
import { useState, useEffect } from "react";
import axios from 'axios';
import ItemNovedad from "../components/novedades/ItemNovedad";

var Novedades=(props)=>{
    const[loading, setLoading] = useState(false);
    const[novedades, setNovedades] = useState([]);

    useEffect(()=>{
        const cargarNovedades = async ()=>{
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    },[]);
    return(
        <div className="fondo">
            <Header/>
            {
                loading ? (
                    <p>Cargando...</p>
                ): (
                    novedades.map(item => <ItemNovedad key={item.id} title={item.titulo} date={item.fecha} imagen={item.imagen} body={item.cuerpo}/>)
                )


            }
                    <Section2alt4></Section2alt4>
        </div>
    )
};

export default Novedades;