import React, {Component} from "react";

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
            let response = await fetch("http://localhost:3050/products");
            let data = await response.json();
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
            <>
                <h2>Listado de productos</h2>
                { isLoading && <h4>Cargando...</h4> }
                { products.map(oneProduct => {
                    return(
                        <div key= {oneProduct.id} >
                            <h3> { oneProduct.articulo } </h3>
                            <img src={oneProduct.imagen} alt="oneProduct" />
                        </div>
                    )
                })}
            </>
        )
    }
};


export default Products;