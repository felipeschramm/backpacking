import React,{Component} from 'react';
import axios from 'axios';

class Resultados extends Component{
    state={
        backpack: []
    }
    pegarApi = () => {
        axios
            .get("http://localhost:9000/api/listar", {
                crossDomain: true
            })
            .then(result => {
                this.setState({ backpack: result.data });
            });
    };

    render(){
        return(
            <>
            
            </>
        )
    }

}

export default Resultados;