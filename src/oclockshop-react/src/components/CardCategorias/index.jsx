import React, {Component} from "react";


class CardCategorias extends Component {

    constructor(){
        super();
        this.state = {

            isLoading: true,
            categorias: []
        }
    }

    componentDidMount(){
        const getData = async() => {
            let response = await fetch("http://localhost:3050/api/categorias");
            let data = await response.json();
            console.log
            return data;     
        }

        getData().then(data => {
            
            this.setState({ 
                categorias: data.data, 
                isLoading: false
            })
            
        });
    };

    componentDidUpdate(){

    };
    
    render() {
        const {isLoading, categorias} = this.state;
        return(
            <div>
                <h2 className="h2">Listado de categorias</h2>
                { isLoading && <h4>Cargando...</h4> }
                <div className="img">
                { categorias.map( unaCategoria=> {
                    return(
                        <div key={unaCategoria.dataValues.id} >
                            
                            <h3> {unaCategoria.dataValues.nombre} </h3>
                            
                        </div>
                    )
                })}
                </div>

            </div>
        )
    }
};


export default CardCategorias;