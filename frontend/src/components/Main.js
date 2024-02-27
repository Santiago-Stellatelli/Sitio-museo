import Section1 from "./Section1"
import Section2 from "./Section2";
import Misionpage from "../pages/Misionpage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Main = (props) =>{
    return(
        <main>
        <Section1></Section1>
        <Section2></Section2>
        </main>

    )
}

export default Main;