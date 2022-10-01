import React from 'react'
import SongBar from "./SongBar"
function RelatedSongs({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }) {
  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-3xl text-white'>Related Songs: </h1>
      <div className='mt-6 w-full flex flex-col'>
        {data.map((song, i) => (
          <SongBar key={i} song={song} i={i} artistId={artistId} activeSong={activeSong} isPlaying={isPlaying} handlePauseClick={handlePauseClick} handlePlayClick={handlePlayClick} />
        ))}

      </div>

    </div>
  )
}

export default RelatedSongs