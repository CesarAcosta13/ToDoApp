import React, { Component } from 'react'
//import { connect } from 'react-redux'
import axios from 'axios'


export default class Createuser extends Component {

    state = {
        users: [],
        username: '',
    }

    async componentDidMount() {
        this.getUser();
        //console.log(this.state)
    }

    onChangeUsername = (e) => {
        this.setState(
            { username: e.target.value })

    }

    getUser = async () => {
        const res = await axios.get('http://localhost:4000/api/users')
        this.setState({ users: res.data });
    }

    //al usar axios para el ennvio de datos al servidor hay q dejar un espacio entre la ruta y el objeto a enviar
    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        });
        this.setState({username: ''})
        this.getUser();
    }

    deleteUser=async (id) => {
      alert('estas seguro de querer eliminar este usuario');
      await axios.delete('http://localhost:4000/api/users/' + id);
      this.getUser();
      //console.log(id)
     }



    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={this.state.username}
                                    type="text"
                                    onChange={this.onChangeUsername}
                                />
                            </div>
                            <button type="submit" className="btn btn-info">
                                Save
                            </button>
                        </form>
                    </div>
                </div>

                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map((user) => <li 
                                key={user._id} className="list-group-item list-group-item-action"
                                onDoubleClick={() => this.deleteUser(user._id)}
                                >
                                {user.username}
                            </li>

                            )

                        }
                    </ul>
                </div>
            </div>
        )
    }
};


