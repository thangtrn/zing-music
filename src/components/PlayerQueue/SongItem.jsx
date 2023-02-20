import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ButtonTippy, Media } from '~/components';
import { musicSelector } from '~/redux/selector';
import { setPlay, setPlaySongWithId } from '~/redux/slices/musicSlice';
import { AiOutlineHeart, RxDotsHorizontal } from '~/ultis/icons';

const SongItem = ({ mediaData, className = '' }) => {
   const dispatch = useDispatch();
   const { loading, isPlaying, currentSong } = useSelector(musicSelector);
   const { encodeId, title, artistsNames, thumbnailM } = mediaData;
   const songItem = useRef(null);

   const isPlayingSong = useMemo(() => {
      return isPlaying && !loading && currentSong?.encodeId === encodeId;
   }, [currentSong?.encodeId, encodeId, isPlaying, loading]);

   const handlePlaySong = useCallback(
      (encodeId) => {
         if (loading) return;
         if (currentSong?.encodeId === encodeId) {
            dispatch(setPlay());
         } else {
            dispatch(setPlaySongWithId(encodeId));
         }
      },
      [currentSong?.encodeId, dispatch, loading],
   );

   useEffect(() => {
      if (currentSong.encodeId === encodeId) {
         songItem.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
         });
      }
   }, [currentSong.encodeId, encodeId]);

   return (
      <>
         <div ref={songItem}>
            <Media
               className={`p-2 ${
                  currentSong?.encodeId === encodeId &&
                  'bg-purple-primary hover:bg-purple-primary'
               } ${className}`}
            >
               <Media.Left className="flex-1">
                  <Media.Image
                     active={currentSong?.encodeId === encodeId}
                     isPlaying={isPlayingSong}
                     loading={loading}
                     size="40px"
                     src={thumbnailM}
                     onClick={() => handlePlaySong(encodeId)}
                  />
                  <Media.Card>
                     <Media.Title
                        className={`leading-[1.3] hover:text-primary`}
                     >
                        <span className="text-truncate-1">{title}</span>
                     </Media.Title>
                     <Media.SubTitle className="leading-[1.33]">
                        {artistsNames}
                     </Media.SubTitle>
                  </Media.Card>
               </Media.Left>
               <Media.Right>
                  <ButtonTippy
                     tippyContent="Khác"
                     size="26px"
                     className="hover:bg-[#ffffff1a] mx-[4px]"
                  >
                     <AiOutlineHeart size={16} />
                  </ButtonTippy>
                  <ButtonTippy
                     tippyContent="Khác"
                     size="26px"
                     className="hover:bg-[#ffffff1a] mx-[4px]"
                  >
                     <RxDotsHorizontal size={16} />
                  </ButtonTippy>
               </Media.Right>
            </Media>
         </div>
      </>
   );
};

export default SongItem;
