import React, { useState, useEffect } from "react";
import LibroService from "../services/LibroService";

const InicioView = () => {
    
    const [libros, setLibros] = useState(null);

    useEffect(() => {
        driverGetLibros();
    }, []);

    const driverGetLibros = async () => {
        try {
            const resp = await LibroService.get();
            console.log(resp);
            console.log(resp.data);
            setLibros(resp.data)
        } catch (err) {
            console.log(err); 
        }
    }

    const driverDeleteLibros = (id) => {
        LibroService.delete(id).then(resp => {
            console.log(resp);
            driverGetLibros();
        }, (err) => {
            console.log('ocurrio algo al eliminar', err);
        });
    }

   

}

export default InicioView;