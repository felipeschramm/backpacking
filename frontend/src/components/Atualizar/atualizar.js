import React,{Component} from 'react';
import "./styles.css";
import mountain3 from "../../assets/img/mountain3.png";
import axios from 'axios';
import {Link} from 'react-router-dom';

class Atualizar extends Component {
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

                <section id="atualizar">
                    <h4 id="titleAt">Atualizar perfil</h4>
                    <div className="container">
                        <div className="row">

                            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto column fundo">


                                <div className="form-group input-group">
                                    <input name="" className="form-control" placeholder="Nome Completo" type="text" />
                                </div>
                                <div className="form-group input-group">
                                    <input name="" className="form-control" placeholder="Email" type="email" />
                                </div>
                                <div className="form-group input-group">
                                    <input name="" className="form-control" placeholder="Telefone com DDD" type="tel" minlength="11" />
                                </div>

                                <div className="form-group input-group">
                                    <input className="form-control" type="date" id="example-date-input" />
                                </div>

                                <div className="form-group input-group">
                                    <input className="form-control" placeholder="Login" type="text" />
                                </div>

                                <div className="form-group input-group">
                                    <input className="form-control" placeholder="Senha" type="password" minlength="8" />
                                </div>

                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="customFile" />
                                    <label className="custom-file-label" for="customFile">Imagem de Perfil</label>
                                </div>

                                <button className="btn1 btn-lg btn-primary btn-block " type="submit">
                                    Atualizar
                                </button>

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

export default Atualizar;