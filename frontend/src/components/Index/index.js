import React, { Component } from 'react';
import "./styles.css";
import axios from 'axios';
import {Link} from 'react-router-dom';

import mountain3 from "../../assets/img/mountain3.png";
import depo1 from "../../assets/img/depo1.jpg";
import depo2 from "../../assets/img/depo2.png";

class Index extends Component {
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

	verificar = function (l, s) {

		if (l == "1" && s == "1") {

			return true;

		} else {

			return false;

		}

	}

	login(){

		const t = document.getElementsById("lo").value
		const senha = document.getElementsById("senha").value

		if (this.verificar(t, senha)) {

			window.open('./Inicial/inicial.js', '_blank').focus();

		} else {

			alert("Login ou senha errados")

		}
		return false;
	}

	casd = function () {

		const senhaCasd = document.getElementById("senhaCasd").value
		const senhaCasdD = document.getElementById("senhaCasdD").value

		if (senhaCasd !== senhaCasdD) {

			alert("As senhas devem ser iguais")

		} else {

			const user = {
				nome: document.getElementById("nome").value,
				sobrenome: document.getElementById("sobrenome").value,
				email: document.getElementById("email").value,
				telefone: document.getElementById("telefone").value,
				dataNasc: document.getElementById("dataNasc").value,
				login: document.getElementById("loginCasd").value,
				senha: senhaCasd
			}

			const json = JSON.stringify(user)
			console.log(json)

		}

	}

	checkEmail = function () {

		const input = document.getElementById("email")
		input.style.backgroundColor = "red"

		if (input.value === "")
			input.style.backgroundColor = "white"

	}

	checkLogin = function () {

		alert('teste login');

	}
	render() {
		return <>
			<header>
				<div id="barra-fixa">
					<div id="container">
							<Link to="/"><img id="logo" src={mountain3} alt="imagem logo"></img></Link>
						<div>
							<h1><Link id="backtitle" to="/">Backpacking</Link></h1>
						</div>

						<nav>
							<div id="menu">
								<ul>
									<li className="item-menu"><Link href="#login">ENTRE</Link></li>
									<li className="item-menu"><Link href="#depoimentos">DEPOIMENTOS</Link></li>
									<li className="item-menu"><Link href="#como">COMO FUNCIONA</Link></li>
									<li className="item-menu"><Link href="#home">SOBRE NÓS</Link></li>
								</ul>
							</div>
						</nav>
					</div>

					<div>
						<input type="checkbox" id="menu-hamburguer" />
						<label for="menu-hamburguer">
							<div className="menu">
								<span className="hamburguer"></span>
							</div>
						</label>

						<ul className="lista-hamburguer">
							<li><Link href="#home">SOBRE NÓS</Link></li>
							<li><Link href="#como">COMO FUNCIONA</Link></li>
							<li><Link href="#depoimentos">DEPOIMENTOS</Link></li>
							<li><Link href="#login">ENTRE</Link></li>
						</ul>
					</div>

				</div>
			</header>

			<section id="home">
				<div id="texto-home">

					<h4>
						Você pode ter muitos amigos ao redor do mundo, apenas não conheceu-os ainda!
			</h4>
					<p>
						O BackPacking surgiu para minimizar os gastos com hospedagens de viajantes ao redor do mundo.
						Trazemos uma opção diferente, onde você poderá se hospedar na casas de moradores da sua cidade de
						destino!
			</p>
				</div>

			</section>

			<section id="login">
				<h4 id="titleLogin">PRIMEIRA VEZ AQUI? SE CADASTRE AGORA!</h4>
				<div className="container">
					<div className="row">

						<div className="col-sm-9 col-md-7 col-lg-5 mx-auto column fundo">

							<div className="form-group input-group">
								<input id="nome" name="" className="form-control" placeholder="Nome" type="text" />
							</div>
							<div className="form-group input-group">
								<input id="sobrenome" name="" className="form-control" placeholder="Sobreome" type="text" />
							</div>
							<div className="form-group input-group">
								<input onfocusout="checkEmail()" id="email" name="" className="form-control" placeholder="Email" type="email" />
							</div>
							<div className="form-group input-group">
								<input id="telefone" name="" className="form-control" placeholder="Telefone com DDD" type="tel" minlength="11" />
							</div>

							<div className="form-group input-group">
								<input id="dataNasc example-date-input" className="form-control" type="date" />
							</div>

							<div className="form-group input-group">
								<input onfocusout={this.checkLogin} id="loginCasd" className="form-control" placeholder="Criar Login" type="text" />
							</div>

							<div className="form-group input-group">
								<input id="senhaCasd" className="form-control" placeholder="Criar Senha" type="password" minlength="8" />
							</div>

							<div className="form-group input-group">
								<input id="senhaCasdD" className="form-control" placeholder="Repetir Senha" type="password" />
							</div>

							<button id="btnCasd" onclick="window.open('./Inicial/inicial.js', '_blank').focus();" className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
								Cadastrar-se
					</button>
						</div>

						<div id="ou">
							OU
				</div>

						<div className="col-sm-9 col-md-7 col-lg-5 mx-auto column fundo">

							<h4 className="entre">ENTRE JÁ<br></br></h4>
							<div className="form-group input-group">
								<div className="input-group-prepend">
									<span className="input-group-text"> <i className="fa fa-user"></i> </span>
								</div>
								<input id="lo" name="" className="form-control" placeholder="Digite seu login" type="text" />
							</div>

							<div className="form-group input-group">
								<div className="input-group-prepend">
									<span className="input-group-text"> <i className="fa fa-lock" aria-hidden="true"></i> </span>
								</div>
								<input id="senha" name="" className="form-control" placeholder="Digite sua senha" type="password" />
							</div>
							{/* <!--Arrumar pra backend--> */}

							<button id="b" onclick="login()" className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
								Fazer Login
					</button>

						</div>
					</div>
				</div>
			</section>

			<section id="como">
				<div id="titulo-como">
					<h3>
						E COMO FUNCIONA?
			</h3>
				</div>
				<div id="container-como">
					<h4 id="titulo-div">
						Use o BackPacking para se hospedar ou receber viajantes:
				</h4>

					<p>
						Caso seja viajante
			</p>

					<ul>
						<li>Escolha o destino final</li>
						<li>Escolha a data da hospedagem</li>
						<li>Escolha o seu host<br></br></li>
					</ul>

					<p>
						Caso seja locador
			</p>

					<ul>
						<li>Cadastre o seu local</li>
						<li>Aceite as requisições de hospedagens de viajantes<br></br></li>
					</ul>
				</div>

			</section>

			<section id="depoimentos">
				<div>
					<div id="depo-texto">
						DEPOIMENTOS
			</div>

					<div className="duas-colunas">
						<div className="coluna">
							<div className="texto-coluna-2">
								"Até ontem eramos apenas estranhos e hoje ganhei um amigo, foi uma experiência única, nós
								conversavamos sobre diversos assuntos até altas horas e conheci Londres melhor nas saídas do fim
								de semana que estive lá. Vou me lembrar para sempre disso, todos deviam passar pelo menos uma
								vez por isso, quero voltar o mais rápido possivel"
					</div>
							<div className="barra"></div>
							<div className="foto-depo">
								<img src={depo1} alt="imagem depo1" />
							</div>
							<div className="nomes">
								MATHEUS
					</div>
							<div className="datas">
								16/12/2018
					</div>
						</div>

						<div className="coluna">
							<div className="texto-coluna-2">
								"No começo estava com medo de chegar na casa de um estranho sem nunca ter ao menos visto, então
								levei um presentinho para 'quebrar o gelo' e nem precisou, a minha host Sara me ensinou um pouco
								de espanhol e eu ensinei o Português para ela, hoje ainda nos falamos pelas redes sociais"
					</div>
							<div className="barra"></div>
							<div className="foto-depo">
								<img src={depo2} alt="imagem depo2" />
							</div>
							<div className="nomes">
								ISABELA
					</div>
							<div className="datas">
								21/04/2019
					</div>
						</div>
					</div>
				</div>
			</section>
			<footer className="footer">
				&copy; 2019 - BackPacking
			</footer>
		</>
	}
}

export default Index;