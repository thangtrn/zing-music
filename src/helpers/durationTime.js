export default function durationTime(seconds) {
   const pad2 = (number) => {
      return (number < 10 ? '0' : '') + number.toString();
   };

   let m = pad2(Math.floor(seconds / 60));

   let s = pad2(Math.floor(seconds % 60));
   return m + ':' + s;
}

export function durationLongTime(seconds) {
   var h = Math.floor(seconds / 3600);
   var m = Math.floor((seconds % 3600) / 60);
   return h + ' giờ ' + m + ' phút';
}
