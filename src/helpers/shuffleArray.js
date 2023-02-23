function shuffleArray(array, songId) {
   let arr = [...array];
   for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
   }
   let song = arr.find((item) => item.encodeId === songId);

   return [song, ...arr.filter((item) => item.encodeId !== songId)];
}

export default shuffleArray;
