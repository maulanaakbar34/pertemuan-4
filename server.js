const express = require('express');
const app = express();
const PORT = 3300;

app.use(express.json());

let movies = [
  { id: 1, film_id:'86e544fd-79de-4e04-be62-5be67d8dd92e', user: 'Cimeng', rating: 5, comment:'Film terbaik sepanjang masa'},
  { id: 2, film_id:'2baf70d1-42bb-4437-b551-e5fed5a87abe', user: 'Pohan', rating: 5, comment:'Film terbaik sepanjang masa'},
  { id: 3, film_id:'12cfb892-aac0-4c5b-94af-521852e46d6a', user: 'Dipa', rating: 5, comment:'Film terbaik sepanjang masa'},
  { id: 4, film_id:'58611129-2dbc-4a81-a72f-77ddfc1b1b49', user: 'Anggi',rating: 5, comment:'Film terbaik sepanjang masa'}
];

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});