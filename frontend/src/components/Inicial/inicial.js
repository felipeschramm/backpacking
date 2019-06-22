import React, { Component } from 'react';
import "./styles.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import vancouver from "../../assets/img/vancouver.jpg";
import mexico from "../../assets/img/mexico.jpg";
import londres from "../../assets/img/londres.jpg";

import mountain3 from "../../assets/img/mountain3.png"

class Inicial extends Component {
    /*AXIOS COMECA AQUI*/
    /* state = {
         backpack: []
     };
     pegarApi = () => {
         axios
             .get("http://localhost:9000/api/listar", {
                 crossDomain: true
             })
             .then(result => {
                 this.setState({ backpack: result.data });
             });
     };
 
     componentDidMount() {
         this.pegarApi();
     }*/
    /*AXIOS ACABA AQUI*/

    botaoSelect() {
        const item = document.getElementById('selectMenu').value;
        const texto = document.getElementById("inputMenu").value;

        if(item === "" || texto === ""){
            alert("Dados em branco");
        }
        if(item === "Buscar Cidades"){
            
        }
        if(item === "Buscar Viajantes"){

        }
        if(item === "Buscar Anfitriões"){

        }

    }

    render() {
        return (
            <>
                <header>
                    <div id="barra-fixa">
                        <div id="container">
                            <Link to="/"><img id="logo" src={mountain3} alt="imagem logo" /></Link>
                            <div>
                                <h1>
                                    <Link id="backtitle" to="/">Backpacking</Link>
                                </h1>
                            </div>

                            <div id="busca">
                                <select className="custom-select" id="selectMenu">
                                    <option>
                                        Buscar Anfitriões
                                    </option>
                                    <option>
                                        Buscar Viajantes
                                    </option>
                                    <option>
                                        Buscar Cidades
                                    </option>
                                </select>
                                <input className="inputBusca" id="inputMenu" placeholder="Digite aqui" />
                            </div>
                            <button onClick={this.botaoSelect} type="button" className="btn btn-primary" id="tamanho">Ir</button>

                            <div id="menu-hamb" className="dropdown">
                                <button styles="font-size:24px; background: #ff5757;" className="btn btn-primary" id="dropdownMenuButton"
                                    data-toggle="dropdown">
                                    <i className="fa fa-align-justify">alo</i>
                                </button>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link to="/perfil" className="dropdown-item">
                                        <i className="fa fa-user" aria-hidden="true"></i>&nbsp;Meu Perfil</Link>
                                    <Link to="/atualizar" className="dropdown-item">
                                        <i className="fa fa-cog" aria-hidden="true"></i>&nbsp;Atualizar Perfil</Link>
                                    <Link to="/cadastro" className="dropdown-item">
                                        <i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;Criar Hospedagem</Link>
                                    <Link to="/hospedagem" className="dropdown-item">
                                        <i className="fa fa-cog" aria-hidden="true"></i>&nbsp;Gerenciar Hospedagem</Link>
                                    <Link to="requisicoes" className="dropdown-item">
                                        <i className="fa fa-exclamation-circle" aria-hidden="true"></i>&nbsp;Minhas Requisições</Link>
                                    <Link to="/" className="dropdown-item">
                                        <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Sair</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section>
                    <div className="container">
                        <h3 className="aga3">
                            NOVIDADES
                            </h3>
                        <div className="row linha">
                            <div className="column coluna"><img src={vancouver} alt="imagem de vancouver" /><p>VANCOUVER<br/><br/>Jovem e moderna. Vancouver é a porta de entrada para a costa oeste do Canadá. Sua diversidade pode ser percebida nos restaurantes que servem pratos do mundo inteiro. Pegue uma praia, visite o maior mercado chinês do país, jogue golfe ou ainda desca uma montanha de snowboard!!</p>
                            </div>
                            <div className="column coluna"><img src={mexico} alt="imagem do méxico" /><p>CIDADE DO MÉXICO<br/><br/> Na segunda capital mais populosa do mundo você encontra de tudo, desde roteiros culturais e históricos, com museus, sítios arqueológicos e monumentos, até um circuito gastronômico, com deliciosos restaurantes que vendem a apimentada comida mexicana.</p></div>
                            <div className="column coluna"><img src={londres} alt="imagem de londres" /><p>LONDRES<br/><br/>Uma cidade vibrante, que representa o casamento perfeito entre a nova e a antiga Europa. A tradição da monarquia, o ritual de troca de guarda e os castelos espalhados pela cidade, convivem em perfeita harmonia com o s edificios modernos de fachadas futuristicas.</p></div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <h3 className="aga3">
                            ÚLTIMAS PESQUISAS
                            </h3>
                        <div className="row linha">
                            <div className="column coluna"><img src={vancouver} alt="imagem de vancouver" /><p>oi</p></div>
                            <div className=" coluna column"><img src={mexico} alt="imagem do méxico" /><p>oi</p></div>
                            <div className=" coluna column"><img src={londres} alt="imagem de londres" /><p>oi</p></div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <h3 className="aga3">
                            RESERVAS FEITAS
                            </h3>
                        <div className="row linha">
                            <div className=" coluna column"><img src={vancouver} alt="imagem de vancouver" /><p>oi</p></div>
                            <div className=" coluna column"><img src={mexico} alt="imagem do méxico" /><p>oi</p></div>
                            <div className=" coluna column"><img src={londres} alt="imagem de londres" /><p>oi</p></div>
                        </div>
                    </div>
                </section>

                <footer className="footer">
                    &copy; 2019 - BackPacking
                </footer>
            </>
        )
    }
}

export default Inicial;