import React, {Component} from "react";

class Dashboard extends Component {

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
            console.log(data);
            return data;     
        }

        getData().then(data => {
            this.setState({ 
                totalProducts: data.totalProducts, 
                isLoading: false
            })
            console.log(data);
        });
    };

    componentDidUpdate(){

    };
    
    render() {
        const {isLoading, totalProducts} = this.state;
        return(
            <div className="img">
                <h2 className="h2">Listado de productos</h2>
                { isLoading && <h4>Cargando...</h4> }
                { 
                    <div>
                    <h3> { totalProducts } </h3>
                    </div>
                }

            </div>
        )
    }
};


export default Dashboard;