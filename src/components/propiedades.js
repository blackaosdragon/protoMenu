import React from 'react';

class Propiedades extends React.Component{

    render(){
        const state = {
            texto: "hey",
            autor: {
                name: "Isaac",
                avatarUrl: 'http://placekitten.com/g/64/64'
            }
        }
        return(
            <div className="propiedades">
            <p>{state.texto}</p>

            </div>
        )
    }
}
export default Propiedades;