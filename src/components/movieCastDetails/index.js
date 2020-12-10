import React, { useEffect, useState } from "react";
import { getCredits } from "../../api/tmdb-api";

import ItemsCarousel from 'react-items-carousel';
import './movieCastDetails.css';

export default ({ movie }) => {
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        getCredits(movie.id).then(credits => {
            setCredits(credits);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <div className="cast">
            <h2 className="bg-info">Cast:</h2>
            <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel               
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={5}
                gutter={20}
                leftChevron={<button class="btn btn-outline-info">{'<'}</button>}
                rightChevron={<button class="btn btn-outline-info">{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
            {credits.map(c => {
                return (
                    <div className="card bg-white">
                        <img
                            src={
                                c.profile_path 
                                    ? `https://image.tmdb.org/t/p/w500/${c.profile_path}`
                                    : '/profile-placeholder.png'
                            }
                            className="card-img-tag center"
                            alt={c.name}
                        />
                        <div className="card-body">
                            <h4 className="card-title">{c.name}</h4>
                            <p className="card-text">{c.character}</p>
                        </div>
                    </div>
                );
            }
        )
            };
    </ItemsCarousel>
    </div>
    </div>
        
    )
};