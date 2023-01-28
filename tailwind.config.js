/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         maxHeight: {
            search: 'calc(100vh - 180px)',
         },
         colors: {
            primary: 'var(--text-primary)',
            search: 'var(--text-search)',
            placeholder: 'var(--text-placeholder)',
            hover: 'var(--text-hover)',
            secondary: 'var(--text-secondary)',
            black: 'var(--black)',
            'purple-primary': 'var(--purple-primary)',
         },
         backgroundColor: {
            header: 'rgba(55, 7, 93, 0.8)',
            primary: 'var(--bg-primary)',
            layout: 'var(--bg-layout)',
            thumb: 'var(--thumb-color)',
            secondary: 'var(--bg-secondary)',
            alpha: 'var(--bg-alpha)',
            line: 'var(--line)',
            sidebar: 'var(--bg-sidebar)',
            loading: 'var(--bg-loading)',
            tooltip: 'var(--bg-tooltip)',
            'dark-10': 'var(--dark-10)',
            'dark-50': 'var(--dark-50)',
            'dark-70': 'var(--dark-70)',
            'dark-80': 'var(--dark-80)',
            'purple-primary': 'var(--purple-primary)',
         },
         backgroundImage: {
            primary: 'var(--bg-primary)',
            logo: 'var(--logo)',
            linear: 'var(--linear-gradient)',
         },
         backgroundSize: {
            full: '100%',
         },
         borderColor: {
            primary: 'var(--line)',
            'purple-primary': 'var(--purple-primary)',
         },
         height: {
            header: 'var(--header-height)',
            main: 'calc(100% - var(--player-height))',
            player: 'var(--player-height)',
            sidebar: 'calc(100% - var(--player-height))',
         },
         width: {
            sidebar: 'var(--sidebar-width)',
            header: 'calc(100% - var(--sidebar-width))',
            main: 'calc(100% - var(--sidebar-width))',
         },
         padding: {
            section: '0 var(--section-padding)',
         },
         margin: {
            section: 'var(--header-height)',
         },
         boxShadow: {
            suggest: '0 4px 6px 0 rgb(32 33 36 / 28%)',
            menu: '0 0 5px 0 rgb(0 0 0 / 20%)',
            header: '0 3px 5px var(--header-shadow)',
            skeleton: ' 0 0 50px 50px rgba(255, 255, 255, 0.3)',
            'btn-arrow': '0 2px 4px 0 #e2666626',
         },
         zIndex: {
            1: '1',
            100: '100',
         },
         lineHeight: {
            normal: 'normal',
         },
      },
   },
   plugins: [],
};
