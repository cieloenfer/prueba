import React, { useEffect, useState } from "react";
import ItenDetail from "./itemDetail";

export default function itemDetailContainer() {
    const [servicios, setServicios] = useState();

    useEffect(()=>{
        fetch()
        .then((res)=>res.json())
        .then((data)=>setServicios(data))
    }, [])

    if(!servicios) return null;

    return(
        <div className="item-list-container">
            <ItemDetail servicios={servicios}/>
        </div>
    );
}