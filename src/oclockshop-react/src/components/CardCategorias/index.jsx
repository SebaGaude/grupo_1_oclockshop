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
                { isLoading && <h4>Cargando...</h4> }
                <div className="img">
                { categorias.map( unaCategoria=> {
                    return(
                        <div key={unaCategoria.dataValues.id} >
                            <div className="col-lg-6 mb-4">
								<div className="card bg-dark text-white shadow">
									<div className="card-body">
                                        <h3> {unaCategoria.dataValues.nombre} </h3>
                                    </div>
								</div>
							</div>
                        </div>
                    )
                })}
                </div>

            </div>
        )
    }
};


export default CardCategorias;