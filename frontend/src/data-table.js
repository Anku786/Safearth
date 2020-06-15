import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.project}
                </td>
                <td>
                    {this.props.obj._id}
                </td>
            </tr>
        );
    }
}

export default DataTable;