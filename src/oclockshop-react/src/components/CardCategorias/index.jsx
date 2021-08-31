import React, {Component} from "react";

<<<<<<< HEAD


=======
>>>>>>> d8ff4286b6d5298a7c91af65a91c4c3498428e45
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
                        { categorias.map( unaCategoria=> {
                        return(
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6 mb-4">
                                        <div className="card bg-dark text-white shadow">
                                            <div className="card-body">
                                                <div className="img">
                                                    <div >
                                                        <p> {unaCategoria.dataValues.nombre} </p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
								</div>
                        )})}
            </div>
        )
    }
};


export default CardCategorias;