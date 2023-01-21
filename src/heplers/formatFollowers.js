export default function formatFollowers(labelValue) {
   // Nine Zeroes for Billions
   return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(1) + 'B'
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(1) + 'M'
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? Math.floor(Math.abs(Number(labelValue)) / 1.0e3) + 'K'
      : Math.abs(Number(labelValue));
}
