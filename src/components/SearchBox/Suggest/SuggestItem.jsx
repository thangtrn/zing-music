import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ButtonTippy, Media } from '~/components/Commonts';
import { formatFollowers, convertListArtists } from '~/helpers';
import { AiOutlineHeart, RxDotsHorizontal } from '~/ultis/icons';

const SuggestArtist = memo(({ data }) => {
   const { avatar, name, aliasName, followers } = data;
   return (
      <Link to={`/nghe-si/${aliasName}`}>
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
                  Nghệ sĩ • {formatFollowers(followers)} quan tâm
               </Media.SubTitle>
            </Media.Content>
         </Media>
      </Link>
   );
});

const SuggestPlaylist = memo(({ data }) => {
   const { id, thumb, title, artists } = data;
   return (
      <Link to={`/playlist/${id}`}>
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
   const { thumb, title, artists } = data;
   return (
      <Media className="py-2" onClick={(e) => e.stopPropagation()}>
         <Media.Left>
            <Media.Image size="52px" src={thumb} />
         </Media.Left>
         <Media.Content className="flex-1">
            <Media.Title className="leading-normal">{title}</Media.Title>
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
