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
        console.log('me estoy renderizando')
        const getData = async() => {
            let response = await fetch("http://localhost:3050/api/ultimoProducto");
            let data = await response.json();
            console.log(data)
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
        console.log(this.state)
        return(
            <div className="card-body">
                 { isLoading && <h4>Cargando...</h4> }
				<div className="text-center">
					<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={ultimoProducto.imagen} alt=" Star Wars - Mandalorian "/>
				</div>
<<<<<<< HEAD
				<p>{ultimoProducto.ultimoProd.articulo}</p>
=======
				<p>{ultimoProducto.articulo}</p>
>>>>>>> 437e16caac45b984634aec34bc50502d46bdbedc
				<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
			</div>
        )
    }
};


export default UltimoProducto;