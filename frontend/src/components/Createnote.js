import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class Createnote extends Component {


    state = {
        title: '',
        content: '',
        userselected: '',
        date: new Date(),
        users: [],
        _id:'',
        editing: false
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({ 
            users: res.data.map(user => user.username),
            userselected: res.data[0].username
         })
        //console.log();
        if (this.props.match.params.id){
           const res = await axios.get('http://localhost:4000/api/notes/' + this.props.match.params.id);
           //console.log(res.data);
            this.setState({
                userselected: res.data.author,
                title: res.data.title,
                content: res.data.content,
                date: new Date(res.data.date),
                _id: this.props.match.params.id,
                editing: true,
            })
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newNote = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.userselected,
            date: this.state.date
        }
        if(this.state.editing){
            await axios.put('http://localhost:4000/api/notes/'+ this.state._id, newNote);
           

        }else{
            await axios.post('http://localhost:4000/api/notes', newNote);

        }
        window.location.href = '/';
     
        //console.log(res)
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onChangeDate = (d) => {
        this.setState({
            date: d,
        })
    }


    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create Note</h4>
                    <form onSubmit={this.onSubmit}>
                        {/**Select user*/}
                        <div className="form-group">
                            <select
                                className="form-control"
                                name="userselected"
                                onChange={this.onInputChange}
                                value={this.state.userselected}>

                                {
                                    this.state.users.map((user) =>
                                        <option key={user} value={user}>
                                            {user}
                                        </option>)


                                }

                            </select>
                        </div>
                        {/**title*/}
                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                placeholder="Title"
                                name="title"
                                onChange={this.onInputChange}
                                value={this.state.title}
                                required
                            />
                        </div>
                        {/**content*/}
                        <div className="form-group">
                            <textarea
                                type="text"
                                name="content"
                                className="form-control"
                                placeholder="content"
                                value={this.state.content}
                                onChange={this.onInputChange}
                                required>
                            </textarea>

                        </div>
                        {/**agrego calendario*/}
                        <div className="form-group">
                            <DatePicker
                                className="form-control"
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>

                        <button type="submit" className="btn btn-info">
                            Save a Note

                         </button>
                    </form>



                </div>
            </div >


        )
    }
};



