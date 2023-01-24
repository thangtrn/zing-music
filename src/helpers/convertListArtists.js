export default function convertListArtists(items) {
   let array = [];
   items.forEach((element) => {
      array.push(element.name);
   });

   return array.join(', ');
}
