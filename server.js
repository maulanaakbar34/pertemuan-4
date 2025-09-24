const express = require("express");
const app = express();
const PORT = 3300;

app.use(express.json());

let reviews = [
  {
    id: 1,
    film_id: "86e544fd-79de-4e04-be62-5be67d8dd92e",
    user: "Cimeng",
    rating: 5,
    comment: "Film terbaik sepanjang masa",
  },
  {
    id: 2,
    film_id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    user: "Pohan",
    rating: 5,
    comment: "Film terbaik sepanjang masa",
  },
  {
    id: 3,
    film_id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
    user: "Dipa",
    rating: 5,
    comment: "Film terbaik sepanjang masa",
  },
  {
    id: 4,
    film_id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    user: "Anggi",
    rating: 5,
    comment: "Film terbaik sepanjang masa",
  },
];

// endpoint GET STATUS
app.get("/status", (req, res) => {
  res.status(200).json("Movie API is running");
});

// GET reviews
app.get("/reviews", (req, res) => {
  res.json(reviews);
});

// GET reviews id
app.get("/reviews/:id", (req, res) => {
  const reviewID = parseInt(req.params.id);
  const review = reviews.find((review) => review.id === reviewID);

  if (review) {
    res.status(200).json(review);
  } else {
    res.status(404).json({ error: "Ulasan tidak ditemukan" });
  }
});

// POST /reviews
app.post("/reviews", (req, res) => {
  const { film_id, user, rating, comment } = req.body;

  // Validasi input
  if (!film_id || !user || !rating || !comment) {
    return res.status(400).json({
      error: "Semua bidang wajib diisi: film_id, user, rating, comment",
    });
  }

  // Membuat ID baru secara berurutan
  const newId = reviews.length > 0 ? reviews[reviews.length - 1].id + 1 : 1;
  const newReview = {
    id: newId,
    film_id,
    user,
    rating,
    comment,
  };

  reviews.push(newReview);
  res.status(201).json(newReview);
});

// PUT /reviews/:id
app.put("/reviews/:id", (req, res) => {
  const reviewId = parseInt(req.params.id);
  const { film_id, user, rating, comment } = req.body;

  const reviewIndex = reviews.findIndex((r) => r.id === reviewId);

  if (reviewIndex === -1) {
    return res.status(404).json({ error: "Ulasan tidak ditemukan" });
  }

  // Validasi input untuk PUT
  if (!film_id || !user || !rating || !comment) {
    return res
      .status(400)
      .json({
        error: "Semua bidang wajib diisi: film_id, user, rating, comment",
      });
  }

  reviews[reviewIndex] = {
    id: reviewId,
    film_id,
    user,
    rating,
    comment,
  };
  res.json(reviews[reviewIndex]);
});

// DELETE /reviews/:id
app.delete("/reviews/:id", (req, res) => {
  const reviewId = parseInt(req.params.id);
  const reviewIndex = reviews.findIndex((r) => r.id === reviewId);

  if (reviewIndex === -1) {
    return res.status(404).json({ error: "Ulasan tidak ditemukan" });
  }

  reviews.splice(reviewIndex, 1);
  res.status(200).json({ message: "Ulasan berhasil dihapus" });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
