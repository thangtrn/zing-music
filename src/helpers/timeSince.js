export default function timeSince(releaseDate) {
   const seconds = Math.floor((new Date() - releaseDate * 1000) / 1000);
   const intervals = [
      { interval: 31536000, text: ' năm trước' },
      { interval: 2592000, text: ' tháng trước' },
      { interval: 604800, text: ' tuần trước' },
      { interval: 86400, text: ' ngày trước' },
      { interval: 3600, text: ' giờ trước' },
      { interval: 60, text: ' phút trước' },
      { interval: 1, text: ' giây trước' },
   ];

   for (const { interval, text } of intervals) {
      if (seconds >= interval) {
         return Math.floor(seconds / interval) + text;
      }
   }

   return 'Vừa xong';
}
