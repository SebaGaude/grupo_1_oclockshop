import React, {Component} from "react";

class CardArticulos extends Component {

    constructor(){
        super();
        this.state = {

            isLoading: true,
            totalProducts: []
        }
    }

    componentDidMount(){
        const getData = async() => {
            let response = await fetch("http://localhost:3050/api/productos");
            let data = await response.json();
            return data;     
        }

        getData().then(data => {
            this.setState({ 
                totalProducts: data.totalProducts, 
                isLoading: false
            })
        });
    };

    componentDidUpdate(){

    };
    
    render() {
        const {isLoading, totalProducts} = this.state;
        return(
            <div className="totalProds">
                <h2>Total productos</h2>
                { isLoading && <h4>Cargando...</h4> }
                
                <div className="h5 mb-0 font-weight-bold text-gray-800">{totalProducts}</div>
                
            </div>
        )
    }
};


export default CardArticulos;