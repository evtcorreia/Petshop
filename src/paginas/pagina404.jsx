import React, { Component } from 'react';
import image  from './../assets/img/doguito404.svg';
import './../assets/css/404.css'


const pagina404 = ()=>{
    return(
        <main className="container flex flex--centro flex--coluna">
            <img src={image} alt="ilustração doguito"/>
            <p className="naoencontrado-texto">
                Ops, pagina nao encontrada"
            </p>
        </main>
    )
}

export default pagina404