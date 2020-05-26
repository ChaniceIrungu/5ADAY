import React, { Component }from 'react'
import Season from './Season';

export default class ApiSeason extends Component {
    constructor(props) {
        super(props)
        this.state = {
            season: {},
        }
    }

    componentDidMount() {
        this.getSeason();
    }

    getSeason = () => {
        fetch(`/users/${this.props.id}`)
        .then(response => response.json())
        .then(response => {
            this.setState({ season: response})
        })
    }
    render() {
        const {season} = this.state;
       
        return (
            <div className="season">
                
                <div>
                 
                       <Season
                     image={season.image} 
                     title= {season.title} 
                      description= {season.description} 
                       list={season.list} 
                    />
                
                </div>
               
            </div>
        )
    }
}