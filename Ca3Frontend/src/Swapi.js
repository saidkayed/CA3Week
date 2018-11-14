import React,{Component} from 'react';
import facade from "./apiFacade";

export default class Swapipeople extends Component{
    constructor(props){
        super(props);
        this.state = { peopledata: [], planetdata: [],starshipdata: [],vehicledata: [],speciesedata: []   };

    }
    async componentDidMount (){  
    const peps = await facade.fetchSwapiPeople();
    const planets = await facade.fetchSwapiPlanets();
    const starships = await facade.fetchSwapiStartships();
    const vehicles = await facade.fetchSwapiVehicles();
    const species = await facade.fetchSwapispecies();
    
    
    
    
    this.setState({peopledata:peps.results,
        planetdata:planets.results,
        starshipdata:starships.results,
        vehicledata:vehicles.results,
        speciesedata:species.results})
  
    }
    
    render(){    
    return(
        <div>
            <table>
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
             <table>
                <thead>
                    <tr><th>Name</th><th>Rotation Period</th><th>Orbital Period</th><th>Diameter</th>
                    <th>Climate</th><th>Gravity</th><th>Terrain</th><th>Surface Water</th><th>Population</th></tr>
                </thead>
                <tbody>   
                {this.state.planetdata.map((data) => 
                    <tr key={data.name}><td>{data.rotation_period}</td><td>{data.orbital_period}</td><td>{data.diameter}</td>
                    <td>{data.climate}</td><td>{data.gravity}</td><td>{data.terrain}</td><td>{data.surface_water}</td><td>{data.population}</td>
                    <td>{data.birth_year}</td><td>{data.gender}</td></tr>
                )}
                </tbody>
            </table>
             <table>
                <thead>
                    <tr><th>Name</th><th>Model</th><th>Manufacturer</th><th>Cost In Credits</th>
                    <th>Length</th><th>Max Atmosphering Speed</th><th>Crew</th><th>Passengers</th>
                    <th>Cargo Capacity</th><th>Consumables</th><th>Hyperdrive Rating</th>
                    <th>MGLT</th><th>Starship Class</th></tr>
                </thead>
                <tbody>   
                {this.state.starshipdata.map((data) => 
                    <tr key={data.name}><td>{data.model}</td><td>{data.manufacturer}</td><td>{data.cost_in_credits}</td>
                    <td>{data.length}</td><td>{data.max_atmosphering_speed}</td><td>{data.crew}</td>
                    <td>{data.passengers}</td><td>{data.cargo_capacity}</td>
                    <td>{data.consumables}</td><td>{data.hyperdrive_rating}</td><td>{data.MGLT}</td>
                    <td>{data.starship_class}</td></tr>
                )}
                </tbody>
            </table>
            <table>
                <thead>
                    <tr><th>Name</th><th>Model</th><th>Manufacturer</th><th>Cost</th>
                    <th>Length</th><th>Max Atmosphering Speed</th><th>Crew</th><th>Passengers</th>
		    <th>Cargo Capacity</th><th>Consumables</th><th>Vehicle Class</th></tr>
                </thead>
                <tbody>   
                {this.state.vehicledata.map((data) => 
                    <tr key={data.name}><td>{data.name}</td><td>{data.model}</td><td>{data.manufacturer}</td>
                    <td>{data.cost_in_credits}</td><td>{data.length}</td><td>{data.max_atmosphering_speed}</td>
                    <td>{data.crew}</td><td>{data.passengers}</td><td>{data.cargo_capacity}</td>
                    <td>{data.consumables}</td><td>{data.vehicle_class}</td></tr>
                )}
                </tbody>
            </table>
            <table>
                <thead>
                    <tr><th>Name</th><th>Classification</th><th>Designation</th><th>Average Height</th>
                    <th>Skin Colors</th><th>Hair Colors</th><th>Eye Colors</th><th>Average Lifespan</th>
		            <th>Language</th></tr>
                </thead>
                <tbody>   
                {this.state.speciesedata.map((data) => 
                    <tr key={data.name}><td>{data.name}</td><td>{data.classification}</td><td>{data.designation}</td><td>{data.average_height}</td>
                    <td>{data.skin_colors}</td><td>{data.hair_colors}</td><td>{data.eye_colors}</td><td>{data.average_lifespan}</td>
                    <td>{data.language}</td></tr>
                )}
                </tbody>
            </table>
        </div>
    )
    }
}
