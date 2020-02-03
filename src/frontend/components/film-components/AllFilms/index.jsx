import React from 'react';
import Film from '../Film';
import Loading from '../../Loading';

class AllFilms extends React.Component {
    constructor() {
        super();
        this.state = { filmsData: [] };
    }

    componentDidMount() {
        fetch(`/api/films`)
            .then(res => res.json())
            .then(filmsData => this.setState({ filmsData }));
    }

    render() {
        const films = this.state.filmsData;
        if (!films) {
            return <Loading />;
        }
        return (
            <div className='container'>
                {
                    films.map(item => (
                        <Film
                            key={item.id}
                            {...item}
                        />
                    ))
                }
            </div>
        );
    }
}

export default AllFilms;
