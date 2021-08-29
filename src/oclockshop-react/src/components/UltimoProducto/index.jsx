import React, {Component} from "react";

class UltimoProducto extends Component {

    constructor(){
        super();
        this.state = {

            isLoading: true,
            ultimoProducto: []
        }
    }

    componentDidMount(){
        const getData = async() => {
            let response = await fetch("http://localhost:3050/api/ultimoProducto");
            let data = await response.json();
            return data;     
        }

        getData().then(data => {
            console.log(this.state)
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
				<div className="text-center">
					<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src="{ultimoProducto.imagen}" alt="imagen"/>
				</div>
				<p>{ultimoProducto.articulo} hola</p>
				<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
			</div>
        )
    }
};


export default UltimoProducto;