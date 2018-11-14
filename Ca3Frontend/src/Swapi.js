import React,{Component} from 'react';
import facade from "./apiFacade";

export default class Swapipeople extends Component{
    constructor(props){
        super(props);
        this.state = { dataFromServer: "Fetching!!" };

    }
    componentDidMount(){
    facade.fetchSwapiPeople().then(res => this.setState({ dataFromServer: res }))
   //    console.log(this.state.dataFromServer);
    }
    
    render(){    
    return(
        <div>
        {this.state.dataFromServer.results.map((data) => 
            data.results.name
        )
    }
        </div>
    )
    }
}
