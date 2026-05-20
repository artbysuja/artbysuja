// ── PAINTINGS DATA ──────────────────────────────────────────────────
// To add a painting: copy one object, fill in the fields, add the
// image file to the images/ folder.
//
// category options: landscape | floral | still-life | bird | abstract
// For sold paintings, set sold: true

const paintings = [
  {
    id: 1,
    title: "Stairway through Forest",
    category: "landscape",
    size: "30 × 45 cm",
    medium: "Acrylic on canvas",
    price: "₹3,500",
    image: "images/painting-1.jpg",
    sold: true
  },
  {
    id: 2,
    title: "Cherry Blossoms",
    category: "floral",
    size: "30 × 45 cm",
    medium: "Acrylic on canvas",
    price: "₹2,800",
    image: "images/painting-2.jpg",
    sold: false
  },
  {
    id: 3,
    title: "Bridge in Fall",
    category: "floral",
    size: "20 × 25 cm",
    medium: "Acrylic on canvas",
    price: "₹1,500",
    image: "images/painting-3.jpg",
    sold: false
  },
  {
    id: 4,
    title: "Yellow Bird",
    category: "bird",
    size: "20 × 25 cm",
    medium: "Acrylic on canvas",
    price: "₹2,000",
    image: "images/painting-4.jpg",
    sold: false
  },
  {
    id: 5,
    title: "Violet Flowers",
    category: "floral",
    size: "20 × 25 cm",
    medium: "Acrylic on canvas",
    price: "₹1,500",
    image: "images/painting-5.jpg",
    sold: false
  },
  {
    id: 6,
    title: "Flowers in a vase",
    category: "still-life",
    size: "30 × 45 cm",
    medium: "Acrylic on canvas",
    price: "₹4,000",
    image: "images/painting-6.jpg",
    sold: true
  },
  {
    id: 7,
    title: "Sunset Lake View",
    category: "landscape",
    size: "30 × 45 cm",
    medium: "Acrylic on canvas",
    price: "₹2,000",
    image: "images/painting-7.jpg",
    sold: true
  },
  {
    id: 8,
    title: "Beachside",
    category: "landscape",
    size: "45 × 30 cm",
    medium: "Acrylic on canvas",
    price: "₹2,800",
    image: "images/painting-8.jpg",
    sold: false
  },
  {
    id: 11,
    title: "Orange bird",
    category: "bird",
    size: "45 x 30 cm",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-11.jpg",
    sold: false
  },
  {
    id: 13,
    title: "Red Moon",
    category: "landscape",
    size: "20 x 25 cm",
    medium: "Acrylic on canvas",
    price: "₹1,500",
    image: "images/painting-13.jpg",
    sold: false
  },
  {
    id: 14,
    title: "Alpine Mountain Lake",
    category: "landscape",
    size: "45 x 30 cm",
    medium: "Acrylic on canvas",
    price: "₹2,800",
    image: "images/painting-14.jpg",
    sold: false
  },
  {
    id: 15,
    title: "Painting 15",
    category: "landscape",
    size: "45 x 30 cm",
    medium: "Acrylic on canvas",
    price: "₹2,800",
    image: "images/painting-15.jpg",
    sold: false
  },
  {
    id: 17,
    title: "Painting 17",
    category: "landscape",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-17.jpg",
    sold: false
  },
  {
    id: 18,
    title: "Painting 18",
    category: "floral",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-18.jpg",
    sold: false
  },
  {
    id: 19,
    title: "Painting 19",
    category: "bird",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-19.jpg",
    sold: false
  },
  {
    id: 20,
    title: "Painting 20",
    category: "landscape",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-20.jpg",
    sold: false
  },
  {
    id: 21,
    title: "Painting 21",
    category: "floral",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-21.jpg",
    sold: false
  },
  {
    id: 22,
    title: "Painting 22",
    category: "floral",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-22.jpg",
    sold: false
  },
  {
    id: 23,
    title: "Painting 23",
    category: "floral",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-23.jpg",
    sold: false
  },
  {
    id: 24,
    title: "Painting 24",
    category: "floral",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-24.jpg",
    sold: false
  },
  {
    id: 25,
    title: "Painting 25",
    category: "landscape",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-25.jpg",
    sold: false
  },
  {
    id: 26,
    title: "Painting 26",
    category: "landscape",
    size: "30 x 45 cm",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-26.jpg",
    sold: false
  },
  {
    id: 27,
    title: "Painting 27",
    category: "bird",
    size: "30 x 45 cm",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-27.jpg",
    sold: false
  },
  {
    id: 28,
    title: "Painting 28",
    category: "abstract",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-28.jpg",
    sold: false
  },
  {
    id: 29,
    title: "Painting 29",
    category: "floral",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-29.jpg",
    sold: false
  },
  {
    id: 30,
    title: "Painting 30",
    category: "floral",
    size: "30 x 45 cm",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-30.jpg",
    sold: false
  },
  {
    id: 31,
    title: "Painting 31",
    category: "floral",
    size: "30 x 45 cm",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-31.jpg",
    sold: false
  },
  {
    id: 32,
    title: "Painting 32",
    category: "floral",
    size: "30 x 45 cm",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-32.jpg",
    sold: false
  },
  {
    id: 33,
    title: "Painting 33",
    category: "abstract",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-33.jpg",
    sold: false
  },
  {
    id: 34,
    title: "Painting 34",
    category: "floral",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-34.jpg",
    sold: false
  },
  {
    id: 35,
    title: "Painting 35",
    category: "floral",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-35.jpg",
    sold: false
  },
  {
    id: 36,
    title: "Painting 36",
    category: "floral",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-36.jpg",
    sold: false
  },
  {
    id: 37,
    title: "Painting 37",
    category: "landscape",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-37.jpg",
    sold: false
  },
  {
    id: 38,
    title: "Painting 38",
    category: "floral",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-38.jpg",
    sold: false
  },
  {
    id: 39,
    title: "Painting 39",
    category: "bird",
    size: "20 × 25 cm",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-39.jpg",
    sold: false
  },
  {
    id: 40,
    title: "Painting 40",
    category: "landscape",
    size: "30 x 45 cm",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-40.jpg",
    sold: false
  },
  {
    id: 41,
    title: "Painting 41",
    category: "floral",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-41.jpg",
    sold: false
  },
  {
    id: 42,
    title: "Painting 42",
    category: "still-life",
    size: "30 x 45 cm",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-42.jpg",
    sold: false
  },
  {
    id: 43,
    title: "Painting 43",
    category: "floral",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-43.jpg",
    sold: false
  },
  {
    id: 44,
    title: "Painting 44",
    category: "landscape",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-44.jpg",
    sold: false
  },
  {
    id: 45,
    title: "Painting 45",
    category: "floral",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-45.jpg",
    sold: false
  },
  {
    id: 46,
    title: "Painting 46",
    category: "floral",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-46.jpg",
    sold: false
  },
  {
    id: 47,
    title: "Painting 47",
    category: "landscape",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-47.jpg",
    sold: false
  },
  {
    id: 48,
    title: "Painting 48",
    category: "landscape",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-48.jpg",
    sold: false
  },
  {
    id: 49,
    title: "Painting 49",
    category: "floral",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-49.jpg",
    sold: false
  },
  {
    id: 50,
    title: "Painting 50",
    category: "floral",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-50.jpg",
    sold: false
  },
  {
    id: 51,
    title: "Painting 51",
    category: "landscape",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-51.jpg",
    sold: false
  },
  {
    id: 52,
    title: "Painting 52",
    category: "floral",
    size: "30 x 45 cm",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-52.jpg",
    sold: false
  },
  {
    id: 53,
    title: "Painting 53",
    category: "floral",
    size: "unspecified",
    medium: "Acrylic on canvas",
    price: "Unspecified",
    image: "images/painting-53.jpg",
    sold: false
  }
];
