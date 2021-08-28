import React, {Component} from "react";
import "./products.css";

class Products extends Component {

    constructor(){
        super();
        this.state = {

            isLoading: true,
            products: []
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
                products: data.data, 
                isLoading: false
            })
            console.log(data);
        });
    };

    componentDidUpdate(){

    };
    
    render() {
        const {isLoading, products} = this.state;
        return(
            <div>
                <h2 className="h2">Listado de productos</h2>
                { isLoading && <h4>Cargando...</h4> }
                <div className="img">
                { products.map(oneProduct => {
                    return(
                        <div key={oneProduct.id} >
                            <h3> { oneProduct.articulo } </h3>
                            <img className="images" src={oneProduct.imagen} alt="imagen" />
                        </div>
                    )
                })}
                </div>

            </div>
        )
    }
};


export default Products;