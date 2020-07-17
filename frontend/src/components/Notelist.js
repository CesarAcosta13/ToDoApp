import React, { Component } from 'react'
import axios from 'axios';
import { format } from 'timeago.js'
import {Link} from 'react-router-dom'



export default class Notelist extends Component {

    state = {
        notes: []
    }

    async componentDidMount() {
        this.getNotes();
       //console.log(res.data)
    }

     delete =async (id) => {
       await axios.delete('http://localhost:4000/api/notes/'+ id);
       this.getNotes();

    }

    getNotes=async () => {
        const res = await axios.get('http://localhost:4000/api/notes');
        this.setState({ notes: res.data })
    }




    render() {
        return (
            <div className="row">
                {this.state.notes.map(note => (
                    <div className="col-md-4 p-2" key={note._id}>
                        <div className="card">
                            <div className="card-header d-flex justify-content-between">
                                <h4>{note.title}</h4>
                                <Link className="btn btn-secondary" to={"/edit/"+ note._id}>
                                    Edit
                                </Link>
                                
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{note.content}</h5>
                                <p className="card-text">{note.author}</p>
                                <p className="card-text">{format(note.date)}</p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-danger" onClick={() => this.delete(note._id)} > Delete </button>

                            </div>


                        </div>
                    </div>
                ))
                }
            </div>

        )
    }
};


