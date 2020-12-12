import React, { useEffect, useState } from "react";
import { getRecommendations } from "../../api/tmdb-api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ movie }) => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    useEffect(() => {
        getRecommendations(movie.id).then(recommendedMovies => {
            setRecommendedMovies(recommendedMovies.slice(0,5));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="card">
            <div className="card-header bg-white">
                <h4>You might also like:</h4>
            </div>
            <div className="card-body">
                
                {recommendedMovies.length >0 ? 
                    recommendedMovies.map(r => {
                        return (
                            <div className="row py-4">
                                <div className="col-4">
                                    <img
                                    src={
                                        r.poster_path 
                                            ? `https://image.tmdb.org/t/p/w500/${r.poster_path}`
                                            : '/film-poster-placeholder.png'
                                    }
                                    className="center"
                                    alt={r.title}
                                    />
                                </div>
                                <div className="col-8">
                                    <h4>{r.title}</h4>
                                    <p>
                                        <FontAwesomeIcon icon={["fas", "star"]} />
                                        <span>
                                            {r.vote_average}
                                        </span>
                                    </p>
                                </div>
                            </div>
                                
                            );
                        }
                    )
                    : <p className="py-4">No recommendations found.</p>
                }

        </div>
    </div>
        
    )
};