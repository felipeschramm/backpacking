import React from 'react';
import {Switch, Route } from 'react-router-dom';


import Atualizar from "./components/Atualizar/atualizar"
import Cadastro from "./components/Cadastro/cadastro"
import Hospedagem from "./components/Hospedagem/hospedagem"
import Index from "./components/Index/index"
import Inicial from "./components/Inicial/inicial"
import Perfil from "./components/Perfil/perfil"
import Requisicoes from "./components/Requisicoes/requisicoes"


function Routes(){
    return(
        <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/atualizar" component={Atualizar} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/hospedagem" component={Hospedagem} />
        <Route path="/inicial" component={Inicial} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/requisicoes" component={Requisicoes} />
        </Switch>
    );
}

export default Routes;