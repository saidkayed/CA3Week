import React, { Component } from 'react';
import facade from "./apiFacade";
import "./table.css"

export default class Swapipeople extends Component {
    constructor(props) {
        super(props);
        this.state = { peopledata: [], planetdata: [], starshipdata: [], vehicledata: [], speciesdata: [] };

    }
    async componentDidMount() {
        const peps = await facade.fetchSwapiPeople();
        console.log(peps);
        



        this.setState({
            peopledata: peps,
        })

    }

    render() {
        return (
            <div>
                <h3 align="center">People</h3>
                <table id="table">
                    <thead>
                        <tr><th>Name</th><th>Height</th><th>Mass</th><th>Hair Color</th>
                            <th>Skin Color</th><th>Eye Color</th><th>Birthyear</th><th>Gender</th></tr>
                    </thead>
                    <tbody>
                        {this.state.peopledata.map((data) =>
                            <tr key={data.name}><td>{data.name}</td><td>{data.height}</td><td>{data.mass}</td>
                                <td>{data.hair_color}</td><td>{data.skin_color}</td><td>{data.eye_color}</td>
                                <td>{data.birth_year}</td><td>{data.gender}</td></tr>
                        )}
                    </tbody>
                </table>
                
            </div>
        )
    }
}
