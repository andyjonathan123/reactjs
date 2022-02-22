import React, { Component } from 'react';

class React_tutor extends Component {
    constructor() {
        super()

        this.state= {
            firstname : 'andy jonathan',
            Lastname : 'pakpahan'
        }
    }

    clickhandler= (e)=> {
        this.setState({
            firstname : "ardy Johannes",
            Lastname : 'Rajasonang'
        })
    }

    render(){
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">belajar class react</div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                    <th>
                                        <td>firstname</td>
                                        <td>lastname</td>
                                    </th>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{this.state.firstname}</td>
                                        <td>{this.state.Lastname}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <button className='btn btn-primary' onDoubleClick={this.clickhandler}>Ubah</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default React_tutor;