import React, { memo, useCallback, useEffect, useMemo, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { musicSelector, currentSongSelector } from '~/redux/selector';

import { durationTime } from '~/helpers';
import { vipLabel } from '~/assets';
import { ButtonTippy, Media } from '~/components/Commonts';
import {
   AiOutlineHeart,
   RxDotsHorizontal,
   SlMusicToneAlt,
   TbMicrophone2,
} from '~/ultis/icons';
import {
   fetchPlaylistAndPlayWithId,
   setPlay,
   setPlaySongWithId,
} from '~/redux/slices/musicSlice';
import { useParams } from 'react-router-dom';

const SongItem = ({ mediaData }) => {
   const { loading, isPlaying, playlistId } = useSelector(musicSelector);
   const currentSong = useSelector(currentSongSelector);
   const dispatch = useDispatch();
   const params = useParams();
   const songRef = useRef(null);

   const {
      encodeId,
      title,
      album,
      duration,
      thumbnailM,
      artistsNames,
      streamingStatus,
   } = mediaData;

   const isPlayingSong = useMemo(() => {
      return isPlaying && !loading && currentSong?.encodeId === encodeId;
   }, [currentSong?.encodeId, encodeId, isPlaying, loading]);

   const handleTogglePlaySong = useCallback(
      (songId) => {
         if (loading || streamingStatus === 2) return;
         if (params?.id === playlistId) {
            if (currentSong?.encodeId === songId) {
               dispatch(setPlay());
            } else {
               dispatch(setPlaySongWithId(songId));
            }
         } else {
            dispatch(
               fetchPlaylistAndPlayWithId({ songId, playlistId: params?.id }),
            );
         }
      },
      [
         currentSong?.encodeId,
         dispatch,
         loading,
         params?.id,
         playlistId,
         streamingStatus,
      ],
   );

   useEffect(() => {
      if (currentSong?.encodeId === encodeId) {
         songRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
         });
      }
   }, [currentSong?.encodeId, encodeId]);

   return (
      <div
         ref={songRef}
         className="w-full border-b border-b-secondary relative group/media"
      >
         <div className="absolute w-[34px] top-1/2 -translate-y-1/2 hidden group-hover/media:block">
            <label className="f-center h-[34px] leading-[1.25] cursor-pointer">
               <input
                  type="checkbox"
                  className="appearance-none rounded-[3px] border p-[6px] border-checkbox bg-transparent"
               />
            </label>
         </div>
         <Media className={currentSong?.encodeId === encodeId && 'bg-alpha'}>
            <Media.Left className="w-1/2 mr-10">
               <span className="group-hover/media:invisible w-[14px] f-center mr-10 text-secondary">
                  <SlMusicToneAlt size={13} />
               </span>

               <Media.Image
                  active={currentSong?.encodeId === encodeId}
                  isPlaying={isPlayingSong}
                  loading={loading}
                  size="40px"
                  src={thumbnailM}
                  onClick={() => handleTogglePlaySong(encodeId)}
               />

               <Media.Card className={streamingStatus === 2 && 'opacity-50'}>
                  <Media.Title className="leading-normal flex items-center">
                     <span className="leading-[1.3] text-truncate-1">
                        {title}
                     </span>

                     {streamingStatus === 2 && (
                        <span className="ml-2">
                           <img
                              src={vipLabel}
                              alt="vip"
                              className="w-[26px] h-[12px]"
                           />
                        </span>
                     )}
                  </Media.Title>
                  <Media.SubTitle className="leading-[1.33]">
                     {artistsNames}
                  </Media.SubTitle>
               </Media.Card>
            </Media.Left>

            <Media.Content
               className={`${streamingStatus === 2 && 'opacity-50'} flex-1`}
            >
               <Media.SubTitle className="mt-0">{album?.title}</Media.SubTitle>
            </Media.Content>

            <Media.Right
               subChildren={
                  <Media.SubTitle className="text-xs mt-0 text-center">
                     {durationTime(duration)}
                  </Media.SubTitle>
               }
            >
               <ButtonTippy
                  size="38px"
                  className="hover:bg-[#ffffff1a] mx-[4px]"
                  tippyContent="Xem lời bài hát"
               >
                  <TbMicrophone2 size={14} />
               </ButtonTippy>

               <ButtonTippy
                  tippyContent="Khác"
                  size="38px"
                  className="hover:bg-[#ffffff1a] mx-[4px]"
               >
                  <AiOutlineHeart size={18} />
               </ButtonTippy>
               <ButtonTippy
                  tippyContent="Khác"
                  size="38px"
                  className="hover:bg-[#ffffff1a] mx-[4px]"
               >
                  <RxDotsHorizontal size={18} />
               </ButtonTippy>
            </Media.Right>
         </Media>
      </div>
   );
};

export default memo(SongItem);
