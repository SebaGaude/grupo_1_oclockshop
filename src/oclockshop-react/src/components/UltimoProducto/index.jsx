import React, {Component} from "react";

class CardUsuarios extends Component {

    constructor(){
        super();
        this.state = {

            isLoading: true,
            totalUsuarios: []
        }
    }

    componentDidMount(){
        const getData = async() => {
            let response = await fetch("http://localhost:3050/api/usuarios");
            let data = await response.json();
            return data;     
        }

        getData().then(data => {
            this.setState({ 
                totalUsuarios: data.totalUsuarios, 
                isLoading: false
            })
        });
    };

    componentDidUpdate(){

    };
    
    render() {
        const {isLoading, totalUsuarios} = this.state;
        return(
            <div className="totalProds">
                <h2>Total usuarios</h2>
                { isLoading && <h4>Cargando...</h4> }
                
                <div className="h5 mb-0 font-weight-bold text-gray-800">{totalUsuarios}</div>
                
            </div>
        )
    }
};


export default CardUsuarios;