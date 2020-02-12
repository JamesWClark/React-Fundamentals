import React from 'react';
import './SeriesList.css';

export default function SeriesList(props) {
    console.log(props.list);
    return (
        <div>
            <ul className="series-list">
                {props.list.map(series => (
                    <li key={series.show.id}>{series.show.name}</li>
                ))}
            </ul>
        </div>
    )
}