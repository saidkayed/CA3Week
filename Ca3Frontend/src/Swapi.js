import React,{Component} from 'react';
import facade from "./apiFacade";

export default class Swapipeople extends Component{
    constructor(props){
        super(props);
        this.state = { dataFromServer: [] };

    }
    async componentDidMount (){
    const peps = await facade.fetchSwapiPeople();
    this.setState({dataFromServer:peps.results})
    }
    
    render(){    
    return(
        <div>
            <table>
                <thead>
                    <tr><th>Name</th><th>Height</th><th>Mass</th><th>Hair-Color</th>
                    <th>Skin-Color</th><th>Eye-Color</th><th>Birthyear</th><th>Gender</th></tr>
                </thead>
                <tbody>   
                {this.state.dataFromServer.map((data) => 
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
