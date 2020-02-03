/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import iris_roxo from "./img/iris_roxo.png";
import './Cabecalho.css';


export default function Cabecalho() {
  return (
    <body>
      <title>IRIS</title> 
    <header>
      
    <nav>
                        <div class="menu-icon">
                              <i class="fa fa-bars fa-2x"></i>
                        </div>

                        <div class="logo">
                              <a href="index.html"><img src={iris_roxo}/></a>
                         </div>

                        <div class="menu">
                              <ul>
                                    <li><a href="#Home">Inicio</a></li>
                                    <li><a href="#Serviços">Serviços</a></li>
                                    <li><a href="#Projetos">Projetos</a></li>
                                    <li><a href="sobre.html">Sobre</a></li>
                                    <li><a href="index.php">Contatos</a></li>
                              </ul>
                        </div>
                  </nav>
           
     
   
    </header>
  </body>
  )
}