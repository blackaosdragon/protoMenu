import React, {Component} from "react";

class CalcIva extends Component{
    
    interes = props => {
        const cantidad = this.props.iva
        return cantidad;
    }
    adeudo = props => {

    }
    render(){

        const state = {
            visible: true,
            estado: "vivo"
        }       
        return(
            <div>
                <form onSubmit ="asd" className="cantidad">
                <input type="numbre" placeholder="ingresa la cantidad a calcular el iva"/>
                {/* <input type="submit"></input> */}
                </form>
                {this.interes(this.props)}

            </div>
        )
    }
}
export default CalcIva;