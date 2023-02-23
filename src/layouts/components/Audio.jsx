import React, { memo, useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
   audioSelector,
   musicSelector,
   currentSongSelector,
} from '~/redux/selector';
import { setLoading, nextSong, setPlay } from '~/redux/slices/musicSlice';

import {
   setDuration,
   setCurrentTime,
   resetAudio,
} from '~/redux/slices/audioSlice';

const Audio = () => {
   const audioRef = useRef(null);

   const dispatch = useDispatch();
   const { isSeek, volume } = useSelector(audioSelector);
   const { isPlaying, playlistSongs, isLoop } = useSelector(musicSelector);
   const currentSong = useSelector(currentSongSelector);
   //#region Main
   // for play binding
   useEffect(() => {
      if (!audioRef || !audioRef.current) return;
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
   }, [isPlaying, currentSong?.encodeId]);

   // for volume binding
   useEffect(() => {
      if (!audioRef || !audioRef.current) return;
      audioRef.current.volume = volume / 100;
   }, [volume]);

   // for loop binding
   useEffect(() => {
      audioRef.current.loop = isLoop;
   }, [isLoop]);

   const handleLoadStart = () => {
      dispatch(setLoading(true));
      dispatch(resetAudio());
   };

   const handleLoadedMetadata = (e) => {
      dispatch(setDuration(e.target.duration));
      dispatch(setLoading(false));
   };

   const handleEnded = () => {
      if (isLoop) return;

      // replay song when playlist only 1 song
      if (playlistSongs.length <= 1) {
         // audioRef.current.currentTime = 0;
         // audioRef.current.play();
         dispatch(setPlay(false));
      } else {
         dispatch(nextSong());
      }
   };

   const handleTimeUpdate = (e) => {
      if (isSeek) return;
      dispatch(setCurrentTime(e.target.currentTime.toFixed(3)));
   };
   //#endregion

   return (
      <div className="hidden">
         {currentSong && (
            <audio
               id="audioPlayer"
               ref={audioRef}
               onTimeUpdate={handleTimeUpdate}
               onLoadStart={handleLoadStart}
               onLoadedMetadata={handleLoadedMetadata}
               onEnded={handleEnded}
               src={`http://api.mp3.zing.vn/api/streaming/audio/${currentSong.encodeId}/320`}
            ></audio>
         )}
      </div>
   );
};

export default memo(Audio);
