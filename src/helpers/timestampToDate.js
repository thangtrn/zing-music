import pad2 from './pad2';

function timestampToDate(timestamp) {
   let date = new Date(timestamp * 1000);
   let day = pad2(date.getDate());
   let month = pad2(date.getMonth() + 1);
   let year = date.getFullYear();

   return `${day}/${month}/${year}`;
}

export default timestampToDate;
