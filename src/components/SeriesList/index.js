import React from 'react';
import './SeriesList.css';

function SeriesListItem({series}) {
    const show = series.show;
    let imageMarkup;
    if(show.image) { // conditional rendering
        imageMarkup = <img src={show.image.medium} alt="" />
    } else {
        imageMarkup = <img src="https:placehold.it/210x295" alt="" />
    }
    return (
        <li key={show.id}>
            <div className="show-image-placeholder">
                {imageMarkup}
            </div>
            <div className="show-info">
                <h1>{show.name}</h1>
                <div dangerouslySetInnerHTML={{__html: show.summary}} />
                <div>Language: {show.language}</div>
                <div>Premiered: {show.premiered}</div>
            </div>
        </li>
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