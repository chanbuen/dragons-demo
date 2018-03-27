import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Dragons from './Dragons';
import Dogs from './Dogs';
import Cats from './Cats';
import Nav from './Nav';


export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            dragons : [],
            dogs : [],
            cats : [],
            selectedAnimal : ''
        }
    this.selectAnimal = this.selectAnimal.bind(this)
    }

    componentDidMount() {

        const dragons = axios.get('/dragons')
        const dogs = axios.get('/dogs')
        const cats = axios.get('/cats')
        Promise.all([dragons, dogs, cats])
        .then((animalArray) => {
            this.setState({dragons : animalArray[0].data})
            this.setState({dogs : animalArray[1].data})
            this.setState({cats : animalArray[2].data})
        })
        .then(() => console.log('dogs', this.state.dogs))
        .catch(err => console.error(err))
    }

    selectAnimal (animal) {
        return this.setState({selectedAnimal : animal})
    }

    render() {
        return(
            <div>
                <Nav categories={["Dogs", "Cats", "Dragons"]} select={this.selectAnimal}/>
                <div id="content">
                {console.log(this.state.selectedAnimal)}
                {
                    this.state.selectedAnimal === "Dragons" ? <Dragons dragons={this.state.dragons}/>
                    : this.state.selectedAnimal === "Dogs" ? <Dogs dogs={this.state.dogs}/> 
                    : this.state.selectedAnimal === "Cats" ? <Cats cats={this.state.cats}/>
                    : null
                }
                </div>
            </div>
        )
    }
}
