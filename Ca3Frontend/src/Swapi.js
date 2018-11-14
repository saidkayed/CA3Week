import React,{Component} from 'react';
import facade from "./apiFacade";

export default class Swapipeople extends Component{
    constructor(props){
        super(props);
        this.state = { dataFromServer: [] };

    }
    async componentDidMount (){
    const peps = await fetch("http://localhost:8080/jwtbackend/api/swapi/people").then(res =>res.json());
   //    console.log(this.state.dataFromServer);
   this.state.dataFromServer.push(peps);
   this.setState({dataFromServer:this.state.dataFromServer})
   console.log(this.state.dataFromServer);
    }
    
    render(){    
    return(
        <div>
        {this.state.dataFromServer.map((data) => 
       <h1> {data.results[0].name}</h1>
        )
    }
        </div>
    )
    }
}
