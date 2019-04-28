import React, { Component } from 'react';
import Results from '../../components/Search';
import Head from 'next/head';
import axios from 'axios';

class SearchResults extends Component {
    state = {
        searchKey: '',
        searchResults: ['Qoute1', 'qoute2', 'qoute3']
    }
    componentDidMount() {
        const searchKey = localStorage.getItem('searchKey');
        var searchResults = JSON.parse(localStorage.getItem('results'));
        
        searchResults = searchResults._embedded.quotes;
        if (searchResults) {
            document.querySelector('.Search').style.display = 'block';
            document.querySelector('.err').style.display = 'none';

            this.setState({searchKey, searchResults});  
        }else {
            document.querySelector('.Search').style.display = 'none';
            document.querySelector('.err').style.display = 'block';
        }
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
    render () {
        return (
            <div className="SearchResults">
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
                <form onSubmit={this.search}>
                    <input type="text" placeholder="Search the dump"/>
                </form>
                <br/>
                <span className="err">No results found :(</span>
                <Results results={this.state.searchResults} searchKey={this.state.searchKey}/>
            </div>
        )
    }
}

export default SearchResults;