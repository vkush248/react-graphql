import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs';

class SongCreate extends Component {
    constructor(props) {
        super(props);

        this.state = { title: '' }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        // console.log(this.state.title);
        this.props.mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries: [{ query }]
        }).then(() => hashHistory.push('/'))
    }
 
    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Crate a new song</h3>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="name">
                        Song name:
                        <input 
                            id="name" 
                            type="text" 
                            onChange={event => this.setState({ title: event.target.value })}
                            value={this.state.value}
                        />
                    </label>
                </form>
            </div>
        )
    }
}

const mutation = gql`
    mutation AddSong($title: String){
        addSong(title: $title) {
            title
        }
    }
`;

export default graphql(mutation)(SongCreate);
