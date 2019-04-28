import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';

class IndexPage extends Component {
    state = {
        random: ''
    }
    componentDidMount() {
        axios.get('https://api.tronalddump.io/random/quote')
        .then(doc => {
            console.log(doc.data);
            this.setState({random:doc.data.value});
        });
    }
    search = e => {
        e.preventDefault();
        const searchBar = document.querySelector('input');
        axios.get('https://api.tronalddump.io/search/quote?query=' + searchBar.value, {
            params: {
                query: searchBar.value,
                page: 1,
                size: 10
            },
            headers: {
                Accept: 'application/hal+json',
            }
        })
        .then(doc => {
            localStorage.setItem('searchKey', searchBar.value);
            localStorage.setItem('results', JSON.stringify(doc.data));
            window.location = '/search';
        });
        
    }
    render() {
        return (
            <div className="IndexPage">
                <Head>
                    <title>Tronald Dump</title>
                    <link href="/static/style.css" rel="stylesheet" />
                    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                </Head>
                <img src="https://docs.tronalddump.io/images/logo.png" />
                <h1>Tronald Dump</h1>
                <strong>Dumb things said my Donald Trump</strong>
                <br/>
                <br/>
                <p>Random qoute of the day:</p>
                <h4>"{this.state.random}"</h4>
                <form onSubmit={this.search}>
                    <input type="text" placeholder="Search the dump"/>
                </form>
                <br/>
                <br/>
            </div>
        )
    }
}

export default IndexPage;