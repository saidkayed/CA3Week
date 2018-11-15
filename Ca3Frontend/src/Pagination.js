import React, { Component } from 'react';
import facade from "./apiFacade";

export default class pagination extends Component {
    constructor(props) {
        super(props);

        this.state = { pagination_data: [] }
    }
    async componentDidMount() {
        const peps = await facade.fetch_dummie_data();


        this.setState({ pagination_data: peps })
    }
    render() {
        return (
            <div>
                <h3 align="center">People</h3>
                <table id="table">
                    <thead>
                        <tr>
                            <th>Id</th><th>Gender</th><th>First Name</th><th>Last Name</th><th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.pagination_data.map((data) =>
                            <tr key={data.id}>
                                <td>{data.id}</td><td>{data.gender}</td><td>{data.firstName}</td>
                                <td>{data.lastName}</td><td>{data.email}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
               
            </div>
        )
    }
}