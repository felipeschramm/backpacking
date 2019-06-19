import React, { Component } from 'react';
import "./styles.css";
import mountain3 from "../../assets/img/mountain3.png";
import axios from 'axios';
import {Link} from 'react-router-dom';

class Perfil extends Component {
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
                            <Link to="/"><img id="logo" src={mountain3} alt="imagem logo" /></Link>
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

                <div>
                    <h2 id="userName">
                        Nome do Usuário
                    </h2>

                </div>

                <footer className="footer">
                    &copy; 2019 - BackPacking
                </footer>
            </>
        )
    }
}

export default Perfil;