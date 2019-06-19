import React, { Component } from 'react';
import "./styles.css";
import axios from 'axios';
import {Link} from 'react-router-dom';

import mountain3 from "../../assets/img/mountain3.png"

class Inicial extends Component {
    /*AXIOS COMECA AQUI*/ 
    state = {
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
    }
    /*AXIOS ACABA AQUI*/ 
    
    render() {
        return (
            <>
                <header>
                    <div id="barra-fixa">
                        <div id="container">
                            <Link to="/"><img id="logo" src={mountain3} alt="imagem logo"/></Link>
                            <div>
                                <h1>
                                    <Link id="backtitle" to="/">Backpacking</Link>
                                </h1>
                            </div>

                            <div id="busca">
                                <select className="custom-select">
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
                                <input className="inputBusca" placeholder="Digite aqui" />
                            </div>
                            <button type="button" className="btn btn-primary" id="tamanho">Ir</button>

                            <div id="menu-hamb" className="dropdown">
                                <button styles="font-size:24px; background: #ff5757;" className="btn btn-primary" id="dropdownMenuButton"
                                    data-toggle="dropdown">
                                    <i className="fa fa-align-justify"></i>
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
                        <h3>
                            Novidades
                            </h3>
                        <div id="novidades">
                            <div className="divs"></div>
                            <div className="divs"></div>
                            <div className="divs"></div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div id="historico-futuras">
                            <div className="divs"></div>
                            <div className="divs"></div>
                            <div className="divs"></div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <h3>
                            Veja também
                            </h3>
                        <div id="viajantes-procurando">
                            <div className="divs"></div>
                            <div className="divs"></div>
                            <div className="divs"></div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img styles="height: 100px;" className="d-block w-100" src="./assets/img/amigos1.jpg"
                                        alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img styles="height: 100px;" className="d-block w-100" src="./assets/img/amigos2.jpg"
                                        alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img styles="height: 100px;" className="d-block w-100" src="./assets/img/cidades1.jpg"
                                        alt="First slide" />
                                </div>
                            </div>
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