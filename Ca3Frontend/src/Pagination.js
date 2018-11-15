import React, { Component } from 'react';
import facade from "./apiFacade";

export default class pagination extends Component {
    constructor(props) {
        super(props);

        this.state = { pagination_data: [] }
    }
    async componentDidMount() {
        const peps = await facade.fetch_dummie_data();


        this.setState = { pagination_data: peps }
        console.log(peps);
        console.log(peps.gender);
    }
    render() {
        return (
            <div>
                <h3 align="center">People</h3>
                <table id="table">
                    <thead>
                        <tr>
                            <th>gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.pagination_data.map((data) =>
                            <tr key={data.id}>
                                <td> {this.state.gender}</td>

                            </tr>
                        )}
                    </tbody>
                </table>



            </div>
        )
    }
}