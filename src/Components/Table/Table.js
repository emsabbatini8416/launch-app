import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFlights, getFavorites, addFavorite, removeFavorite } from './../../Actions/Flights';

export function Table() {
    const dispatch = useDispatch();
    const flights = useSelector(state => state.flight.flights);
    const favorites = useSelector(state => state.flight.favorites);

    useEffect(() => {
        dispatch(getFlights());
        dispatch(getFavorites());
    }, [dispatch]);
    
    return (
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Is Favorite</th>
                </tr>
            </thead>
            <tbody>
            { flights.length > 0 && 
                flights.map((f, i) => {
                    const isFavorite = favorites.find(fa => fa.flightNumber === f.flight_number)
                    return (
                        <tr key={i}>
                            <td>{f.flight_number}</td>
                            <td>{f.mission_name}</td>
                            <td>
                                <input 
                                    type="checkbox" 
                                    className="form-check-input" 
                                    checked={isFavorite}   
                                    onChange={() => {
                                        if (isFavorite) dispatch(removeFavorite(f.flight_number))
                                        else dispatch(addFavorite(f.flight_number))
                                    }}
                                />
                            </td>
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
    );
}

export default Table;