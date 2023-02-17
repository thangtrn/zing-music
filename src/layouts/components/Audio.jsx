import React, { memo, useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { audioSelector, musicSelector } from '~/redux/selector';
import { setLoading, nextSong } from '~/redux/slices/musicSlice';

import {
   setDuration,
   setCurrentTime,
   resetAudio,
} from '~/redux/slices/audioSlice';

const Audio = () => {
   const audioRef = useRef(null);
   const { isPlaying, currentSong } = useSelector(musicSelector);
   const { isSeek, volume } = useSelector(audioSelector);
   const dispatch = useDispatch();

   useEffect(() => {
      if (!audioRef || !audioRef.current) return;
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
   }, [isPlaying, currentSong.encodeId]);

   useEffect(() => {
      if (!audioRef || !audioRef.current) return;
      audioRef.current.volume = volume / 100;
   }, [volume]);

   const handleLoadStart = () => {
      dispatch(setLoading(true));
      dispatch(resetAudio());
   };

   const handleLoadedMetadata = (e) => {
      dispatch(setDuration(e.target.duration));
      dispatch(setLoading(false));
   };

   const handleEnded = () => {
      dispatch(nextSong());
   };

   const handleTimeUpdate = (e) => {
      if (isSeek) return;
      dispatch(setCurrentTime(e.target.currentTime));
   };

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
