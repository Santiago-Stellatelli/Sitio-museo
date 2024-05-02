import React from "react";

var ItemNovedad = (props) =>{
    const {title, date, imagen, body} = props;

    return(
        <div className="fondo">
        <div id="cronograma">
        <h3>{title} <br/>{date}</h3>
        <p dangerouslySetInnerHTML={{__html: body}}/>
            <img src={imagen}/>
        </div>
        <script>
    window.onload = function() {
      window.scrollTo(0, 0)};
  </script>
    </div>
    )

}

export default ItemNovedad;