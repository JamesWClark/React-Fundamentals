import React from 'react';
import './SeriesList.css';

function SeriesListItem({series}) {
    return (
        <li key={series.show.id}>{series.show.name}</li>
    )
}

export default function SeriesList(props) {
    console.log(props.list);
    return (
        <div>
            <ul className="series-list">
                {props.list.map(series => (
                    <SeriesListItem series={series} />
                ))}
            </ul>
        </div>
    )
}