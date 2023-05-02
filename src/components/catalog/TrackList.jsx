import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './TrackList.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TrackCard from '../TrackCard/TrackCard.jsx';
import Pagination from '../pagination/Pagination.jsx';
import { fetchSongs } from '../../redux/actions/songs.js';
import { setInput } from '../../redux/actions/search.js';
import { filterSongs, displayedItems } from '../../utils';

const TrackList = ({ cartItems }) => {

    const dispatch = useDispatch();

    const songs = useSelector(state => state.songs.songs);
    const input = useSelector(state => state.search.input);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const totalPages = Math.ceil(songs.length / itemsPerPage);

    useEffect(() => {
        dispatch(fetchSongs());
    }, [dispatch]);


    const handleInputChange = (event) => {
        dispatch(setInput(event.target.value));
        setCurrentPage(1)
    }

    const songsToDisplay = displayedItems(filterSongs(songs, input), currentPage, itemsPerPage)

    return (
        <div className="container">
            <div className="tracks">
                {songsToDisplay.map((track, index) => (<TrackCard key={index} track={track} input={input}
                    cartItems={cartItems} />
                ))}
            </div>
            <div className='pagination'>
                <Pagination itemsPerPage={itemsPerPage} totalPages={totalPages} currentPage={currentPage}
                    setCurrentPage={setCurrentPage} filteredSongs={songsToDisplay} />
            </div>
            <div className="search">
                <div className="glassIcon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <input type="text" placeholder="Search" value={input}
                    onChange={handleInputChange} />
            </div>
        </div>
    )

};

export default TrackList;


