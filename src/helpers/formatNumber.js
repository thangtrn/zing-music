export default function formatNumber(labelValue) {
   const absValue = Math.abs(Number(labelValue));

   if (absValue >= 1.0e9) {
      return (absValue / 1.0e9).toFixed(1) + 'B';
   } else if (absValue >= 1.0e6) {
      return (absValue / 1.0e6).toFixed(1) + 'M';
   } else if (absValue >= 1.0e3) {
      return Math.floor(absValue / 1.0e3) + 'K';
   }

   return absValue;
}
