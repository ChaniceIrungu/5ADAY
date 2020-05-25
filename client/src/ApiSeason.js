import React, { Component }from 'react'
import Season from './Season';

export default class ApiSeason extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        this.getSeason();
    }

    getSeason = () => {
        fetch(`/users`)
        .then(response => response.json())
        .then(response => {
            this.setState({ users: response})
        })
    }
    render() {
        const {users} = this.state;
        return (
            <div className="season">
                
                <div>
                   {users.map(season => (
                       <Season
                     image={season.image} 
                     title= {season.title} 
                      description= {season.description} 
                       list={season.list} 
                    />
                   ))}
                </div>
            </div>
        )
    }
}
