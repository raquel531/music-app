function filterSongs(songs, input) {
    if (songs.length > 0 && input !== ''){
    let newSongList = songs.filter((song) =>
        song.trackName.toLowerCase().includes(input) ||
        song.collectionName.toLowerCase().includes(input) ||
        song.artistName.toLowerCase().includes(input));
        return newSongList
    } else {
        return songs
    }
}

function displayedItems(filteredSongs, currentPage, itemsPerPage){
    let items = filteredSongs.slice((currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage);
    return items
}

export {filterSongs, displayedItems}