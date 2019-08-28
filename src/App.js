import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import NoticesList from './components/Notice-list';
import Form from './components/Form';

require('dotenv').config();
class App extends Component {
    state = {
        notices: []
    };

    async componentDidMount() {
        this.consultNotices();
    }

    consultNotices = async (category = 'general') => {
        const url =
            'https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            `category=${category}` +
            '&' +
            `apiKey=${process.env.REACT_APP_NEWS_APIKEY}`;

        const response = await fetch(url);
        const notices = await response.json();

        this.setState({
            notices: notices.articles
        });
    };

    render() {
        return (
            <Fragment>
                <Header titulo='Buscador de noticias web' />

                <div className='container white contenedor-noticias'>
                    <Form consultNotices={this.consultNotices} />
                    <NoticesList notices={this.state.notices} />
                </div>
            </Fragment>
        );
    }
}

export default App;
