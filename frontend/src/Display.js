import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';

export default class Display extends Component {

    constructor(props) {
        super(props);
        this.state = { project: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/todos/todo')
            .then(res => {
                this.setState({ this.state.project: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.project.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                            <td>ID</td>
                                <td>Project</td>
                            </tr>
                        </thead>
                        <tbody>
                            <td>
                    {this.obj.project}
                        </td>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}