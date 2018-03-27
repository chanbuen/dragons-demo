import React, {Component} from 'react';
import ReactDom from 'react-dom';

const Nav = props => {
    return (
        <div id="nav">
        {props.categories.map((category, idx) => {
            console.log('category: ', category)
            return (
                <button id={`${category}-button`} key={idx} onClick={() => props.select(category)}>{category}</button>
            )
        })}
        </div>
    )
}

export default Nav