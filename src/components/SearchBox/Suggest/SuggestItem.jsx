import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { formatFollowers, convertListArtists } from '~/helpers';

const styleClass = {
   wrapper:
      'w-full rounded cursor-pointer transition-all ease-[ease] duration-200 hover:bg-alpha group',
   link: 'flex items-center px-[10px] py-2',
   imgWrapper:
      'w-[52px] h-[52px] overflow-hidden mr-[10px] flex-grow-0 flex-shrink-0',
   img: 'w-full h-full object-cover',
   media: 'flex flex-col justify-center flex-1 text-sm text-primary',
   title: 'group-hover:text-hover font-medium text-truncate-1',
   subtitle: 'text-xs text-secondary text-truncate-1',
};

const SuggestItem = ({ data, type }) => {
   if (type === 4) return <SuggestArtist data={data} />;
   if (type === 3) return <SuggestPlaylist data={data} />;
   if (type === 1) return <SuggestSong data={data} />;
   return null;
};

const SuggestArtist = ({ data }) => {
   const { avatar, name, aliasName, followers } = data;
   return (
      <div className={styleClass.wrapper}>
         <Link to={`/nghe-si/${aliasName}`} className={styleClass.link}>
            <div className={`${styleClass.imgWrapper} rounded-full`}>
               <img src={avatar} alt={name} className={styleClass.img} />
            </div>
            <div className={styleClass.media}>
               <h3 className={styleClass.title}>{name}</h3>
               <h3 className={styleClass.subtitle}>
                  Nghệ sĩ • {formatFollowers(followers)} quan tâm
               </h3>
            </div>
         </Link>
      </div>
   );
};

const SuggestPlaylist = ({ data }) => {
   const { id, thumb, title, artists } = data;
   return (
      <div className={styleClass.wrapper}>
         <Link to={`/playlist/${id}`} className={styleClass.link}>
            <div className={`${styleClass.imgWrapper} rounded`}>
               <img src={thumb} alt={title} className={styleClass.img} />
            </div>
            <div className={styleClass.media}>
               <h3 className={styleClass.title}>{title}</h3>
               <h3 className={styleClass.subtitle}>
                  Playlist • {convertListArtists(artists)}
               </h3>
            </div>
         </Link>
      </div>
   );
};

const SuggestSong = ({ data }) => {
   const { thumb, title, artists } = data;
   return (
      <div className={styleClass.wrapper}>
         <div className={styleClass.link}>
            <div className={`${styleClass.imgWrapper} rounded`}>
               <img src={thumb} alt={title} className={styleClass.img} />
            </div>
            <div className={styleClass.media}>
               <h3 className={styleClass.title}>{title}</h3>
               <h3 className={styleClass.subtitle}>
                  Playlist • {convertListArtists(artists)}
               </h3>
            </div>
         </div>
      </div>
   );
};

export default memo(SuggestItem);
