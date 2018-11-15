import React, {Component} from 'react';
import facade from "./apiFacade";

export default class pagination extends Component{
    constructor(props){
        super(props);

        this.state = {pagination_data: []}
    }
    componentDidMount(){
        const peps = facade.fetch_dummie_data();

        this.setState = {pagination_data: peps}
    }
    render(){
        return(
            <div>
                 <h3 align="center">People</h3>
                <table id="table">
                    <thead>
                        <tr></tr>
                    </thead>
                    <tbody>
                        {this.state.pagination_data.map((data) =>
                            <tr key={data.id}>
                            <th> {data.name}</th>
                            
                            </tr>
                        )}
                    </tbody>
                </table> 



            </div>
        )
    }
}