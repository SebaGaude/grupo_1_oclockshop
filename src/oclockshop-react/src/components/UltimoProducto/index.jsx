import React, {Component} from "react";

class UltimoProducto extends Component {

    constructor(){
        super();
        this.state = {

            isLoading: true,
            ultimoProducto: ""
        }
    }

    componentDidMount(){
        const getData = async() => {
            let response = await fetch("http://localhost:3050/api/ultimoProducto");
            let data = await response.json();
            return data;     
        }

        getData().then(data => {
           this.setState({ 
                ultimoProducto: data.data,
                isLoading: false
                
            })
        });
    };

    componentDidUpdate(){
        
    };
    
    render() {
        const {isLoading, ultimoProducto} = this.state;
        return(
            <div className="card-body">
                 { isLoading && <h4>Cargando...</h4> }
				<div className="text-center">
					<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={"http://localhost:3050/img/"+ultimoProducto.imagen} alt=" Star Wars - Mandalorian "/>
				</div>
				<p>{ultimoProducto.articulo}</p>
			</div>
        )
    }
};


export default UltimoProducto;