import React, {Component} from "react";

class CardMarcas extends Component {

    constructor(){
        super();
        this.state = {

            isLoading: true,
            totalMarcas: []
        }
    }

    componentDidMount(){
        const getData = async() => {
            let response = await fetch("http://localhost:3050/api/marcas");
            let data = await response.json();
            return data;     
        }

        getData().then(data => {
            this.setState({ 
                totalMarcas: data.totalMarcas, 
                isLoading: false
            })
        });
    };

    componentDidUpdate(){

    };
    
    render() {
        const {isLoading, totalMarcas} = this.state;
        return(
            <div className="totalProds">
                <h2>Total marcas</h2>
                { isLoading && <h4>Cargando...</h4> }
                        <div className="col mr-2">
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                {totalMarcas}
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-award fa-2x text-gray-300"></i>
                            </div>
                        </div>
            </div>
        )
    }
};


export default CardMarcas;