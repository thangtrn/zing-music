import React, { memo, useCallback, useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { musicSelector, currentSongSelector } from '~/redux/selector';
import { setPlay, setPlaylistSongs } from '~/redux/slices/musicSlice';

import { timeSince } from '~/helpers';
import { ButtonTippy, Media } from '~/components/Commonts';
import { RxDotsHorizontal } from '~/ultis/icons';
import { vipLabel } from '~/assets/images';

// streamingStatus = 1 = Free
// streamingStatus = 2 = Vip

const MediaItem = ({ mediaData, releaseData }) => {
   const { loading, isPlaying } = useSelector(musicSelector);
   const currentSong = useSelector(currentSongSelector);
   const dispatch = useDispatch();

   const {
      encodeId,
      title,
      artistsNames,
      thumbnailM,
      releaseDate,
      streamingStatus,
   } = mediaData;

   const isPlayingSong = useMemo(() => {
      return isPlaying && !loading && currentSong?.encodeId === encodeId;
   }, [currentSong?.encodeId, encodeId, isPlaying, loading]);

   const handleTogglePlaySong = useCallback(
      (encodeId) => {
         if (loading || streamingStatus === 2) return;
         if (currentSong?.encodeId === encodeId) dispatch(setPlay());
         else
            dispatch(
               setPlaylistSongs({
                  encodeId,
                  title: 'Mới phát hành',
                  playlist: releaseData,
               }),
            );
      },
      [currentSong?.encodeId, dispatch, loading, releaseData, streamingStatus],
   );

   return (
      <Media className={currentSong?.encodeId === encodeId && 'bg-alpha'}>
         <Media.Left className="flex-1">
            <Media.Image
               active={currentSong?.encodeId === encodeId}
               isPlaying={isPlayingSong}
               loading={loading}
               src={thumbnailM}
               onClick={() => handleTogglePlaySong(encodeId)}
            />
            <Media.Card className={streamingStatus === 2 && 'opacity-50'}>
               <Media.Title
                  className={`leading-[1.3] ${
                     streamingStatus === 2 && 'flex items-center'
                  }`}
               >
                  <span className="text-truncate-1">{title}</span>

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
               <Media.SubTitle className="leading-[18px]">
                  {timeSince(releaseDate)}
               </Media.SubTitle>
            </Media.Card>
         </Media.Left>
         <Media.Right>
            <ButtonTippy
               tippyContent="Khác"
               size="38px"
               className="hover:bg-alpha mx-[4px]"
            >
               <RxDotsHorizontal />
            </ButtonTippy>
         </Media.Right>
      </Media>
   );
};

export default memo(MediaItem);
