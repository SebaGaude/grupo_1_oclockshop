import React, {Component} from "react";


class CardCategorias extends Component {

    constructor(){
        super();
        this.state = {

            isLoading: true,
            products: []
        }
    }

    componentDidMount(){
        const getData = async() => {
            let response = await fetch("http://localhost:3050/api/categorias");
            let data = await response.json();
            return data;     
        }

        getData().then(data => {
            this.setState({ 
                products: data.data, 
                isLoading: false
            })
            
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
                        <div key={oneProduct.dataValues.id} >
                            <img className="images" src={oneProduct.imagen} alt="imagen" />
                            
                            <h3> {oneProduct.dataValues.articulo} </h3>
                            
                        </div>
                    )
                })}
                </div>

            </div>
        )
    }
};


export default CardCategorias;