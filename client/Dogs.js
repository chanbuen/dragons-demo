import React, {Component} from 'react';
import ReactDom from 'react-dom';

const Dogs = props => {
    console.log('dogs props', props.dogs)
    console.log(Array.isArray(props.dogs))
    return(
        <div id="dogs">
        {props.dogs.map((dog, idx) => {
            return (<div key={idx}>
                        <h2>{dog.name}</h2>
                        <img src={dog.image}/>
                    </div>)
            })}
        </div>
    )
}

export default Dogs