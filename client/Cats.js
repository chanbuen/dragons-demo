import React, {Component} from 'react';
import ReactDom from 'react-dom';

const Cats= props => {
    console.log('cats props', props.cats)
    console.log(Array.isArray(props.cats))
    return(
        <div id="cats">
        {props.cats.map((cat, idx) => {
            return (<div key={idx}>
                        <h2>{cat.name}</h2>
                        <img src={cat.image}/>
                    </div>)
            })}
        </div>
    )
}

export default Cats