import React, { useEffect, useState } from "react";
import { getCasts } from "../../api/tmdb-api";

import ItemsCarousel from 'react-items-carousel';
import './movieCastDetails.css';

export default ({ movie }) => {
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        getCasts(movie.id).then(casts => {
            setCasts(casts);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <div className="cast bg-dark">
            <h2 className="border_bottom text-light pl-2">Cast:</h2>
            <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel               
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={5}
                gutter={20}
                leftChevron={<button class="btn btn-outline-light">{'<'}</button>}
                rightChevron={<button class="btn btn-outline-light">{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
            {casts.map(c => {
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
            }
    </ItemsCarousel>
    </div>
    </div>
        
    )
};