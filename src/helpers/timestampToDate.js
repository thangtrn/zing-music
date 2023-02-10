function timestampToDate(timestamp) {
   let dateFormat = new Date(timestamp * 1000);

   const pad2 = (number) => {
      return (number < 10 ? '0' : '') + number.toString();
   };

   return (
      pad2(dateFormat.getDate()) +
      '/' +
      pad2(dateFormat.getMonth() + 1) +
      '/' +
      dateFormat.getFullYear()
   );
}

export default timestampToDate;
