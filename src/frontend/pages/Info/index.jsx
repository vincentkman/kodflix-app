import React from 'react';
import { Redirect } from 'react-router-dom';
import InfoContent from '../../../frontend/components/info-components/InfoContent'
import Loading from '../../../frontend/components/Loading';

import './info.scss';

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = { film: {} };
    }

    componentDidMount() {
        const filmId = this.props.match.params.filmId;
        fetch(`/api/films/${filmId}`)
            .then(res => res.json())
            .then(films => {
                this.setState({ films })

                const film = films.find(film => film.id === filmId);
                this.setState({ film });
            }).catch(err => console.log(err));
    }

    render() {
        const { film } = this.state;
        if (film) {
            return film.id ?
                <InfoContent film={film} /> :
                <Loading />
        } else {
            return <Redirect to='/not-found' />
        }
    }
}

export default Info;
