import pad2 from './pad2';

export default function durationTime(seconds) {
   let minutes = Math.floor(seconds / 60);
   let remainingSeconds = Math.floor(seconds % 60);

   let formattedMinutes = pad2(minutes);
   let formattedSeconds = pad2(remainingSeconds);

   return `${formattedMinutes}:${formattedSeconds}`;
}

export function durationLongTime(seconds) {
   var hours = Math.floor(seconds / 3600);
   var minutes = Math.floor((seconds % 3600) / 60);
   return `${hours > 0 ? hours + ' giờ ' : ''}${minutes} phút`;
}
