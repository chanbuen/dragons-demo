import React, {Component} from 'react';
import ReactDom from 'react-dom';

const Dragons = props => {
    // console.log('dragons props', props.dragons)
    // console.log(Array.isArray(props.dragons))
    return(
        <div id="dragons">
        {props.dragons.map((dragon, idx) => {
            return (<div key={idx}>
                        <h2>{dragon.name}</h2>
                        <img src={dragon.image}/>
                    </div>)
            })}
        </div>
    )
}

export default Dragons