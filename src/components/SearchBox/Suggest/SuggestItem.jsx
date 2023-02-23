import React, { memo, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { musicSelector, currentSongSelector } from '~/redux/selector';
import { AiOutlineHeart, RxDotsHorizontal } from '~/ultis/icons';

import { Link, useNavigate } from 'react-router-dom';
import { ButtonTippy, Media } from '~/components/Commonts';
import { formatNumber, convertListArtists } from '~/helpers';
import { fetchSong, setPlay } from '~/redux/slices/musicSlice';

const SuggestArtist = memo(({ data }) => {
   const { avatar, name, aliasName, followers } = data;
   return (
      <Link to="/">
         <Media className="py-2">
            <Media.Left>
               <Media.OnlyImage
                  size="52px"
                  src={avatar}
                  className="rounded-full"
               />
            </Media.Left>
            <Media.Content className="flex-1">
               <Media.Title className="leading-normal">{name}</Media.Title>
               <Media.SubTitle className="leading-normal">
                  Nghệ sĩ • {formatNumber(followers)} quan tâm
               </Media.SubTitle>
            </Media.Content>
         </Media>
      </Link>
   );
});

const SuggestPlaylist = memo(({ data }) => {
   const { link, thumb, title, artists } = data;

   const formatLink = (str) => {
      return str.replace('https://zingmp3.vn', '').replace('.html', '');
   };

   return (
      <Link to={formatLink(link)}>
         <Media className="py-2">
            <Media.Left>
               <Media.OnlyImage size="52px" src={thumb} />
            </Media.Left>
            <Media.Content className="flex-1">
               <Media.Title className="leading-normal">{title}</Media.Title>
               <Media.SubTitle className="leading-normal">
                  Playlist • {convertListArtists(artists)}
               </Media.SubTitle>
            </Media.Content>
            <Media.Right>
               <ButtonTippy
                  tippyContent="Thêm vào thư viện"
                  size="38px"
                  className="hover:bg-[#ffffff1a] mx-[4px]"
               >
                  <AiOutlineHeart size={16} />
               </ButtonTippy>
               <ButtonTippy
                  tippyContent="Khác"
                  size="38px"
                  className="hover:bg-[#ffffff1a] mx-[4px]"
               >
                  <RxDotsHorizontal size={16} />
               </ButtonTippy>
            </Media.Right>
         </Media>
      </Link>
   );
});

const SuggestSong = memo(({ data }) => {
   const { loading, isPlaying } = useSelector(musicSelector);
   const currentSong = useSelector(currentSongSelector);
   const { id, thumb, title, artists, link } = data;
   const dispatch = useDispatch();
   const navigate = useNavigate();

   // console.log('data song: ', data);

   const formatLink = (str) => {
      return str.replace('https://zingmp3.vn', '').replace('.html', '');
   };

   const isPlayingSong = useMemo(() => {
      return isPlaying && !loading && currentSong?.encodeId === id;
   }, [currentSong?.encodeId, id, isPlaying, loading]);

   const handlePlaySong = () => {
      if (loading) return;
      if (currentSong?.encodeId === id) {
         dispatch(setPlay());
      } else {
         dispatch(fetchSong({ songId: id, navigate }));
      }
   };

   return (
      <Media
         className={`py-2 ${currentSong?.encodeId === id && 'bg-alpha'}`}
         onClick={(e) => e.stopPropagation()}
      >
         <Media.Left>
            <Media.Image
               active={currentSong?.encodeId === id}
               isPlaying={isPlayingSong}
               loading={loading}
               size="52px"
               src={thumb}
               onClick={handlePlaySong}
            />
         </Media.Left>
         <Media.Content className="flex-1">
            <Media.Title className="leading-normal">
               <Link to={formatLink(link)}>{title}</Link>
            </Media.Title>
            <Media.SubTitle className="leading-normal">
               {convertListArtists(artists)}
            </Media.SubTitle>
         </Media.Content>
         <Media.Right>
            <ButtonTippy
               tippyContent="Thêm vào thư viện"
               size="38px"
               className="hover:bg-[#ffffff1a] mx-[4px]"
            >
               <AiOutlineHeart size={16} />
            </ButtonTippy>
            <ButtonTippy
               tippyContent="Khác"
               size="38px"
               className="hover:bg-[#ffffff1a] mx-[4px]"
            >
               <RxDotsHorizontal size={16} />
            </ButtonTippy>
         </Media.Right>
      </Media>
   );
});

export { SuggestArtist, SuggestPlaylist, SuggestSong };
