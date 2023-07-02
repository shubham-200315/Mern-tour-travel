import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Manali",
    city: "India",
    distance: 300,
    address: 'SomeWhere',
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "Shubham",
        rating: 4.6,
      },
      {
         name: "Shubham",
         rating: 5,
       },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Nanital, India",
    city: "Nanital",
    distance: 400,
    address: 'SomeWhere',
    price: 96,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Shubham",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Rishikesh, India",
    city: "Rishikesh",
    distance: 500,
    address: 'SomeWhere',
    price: 76,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Shubham",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Nanital, India",
    city: "Nanital",
    distance: 500,
    address: 'SomeWhere',
    price: 85,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Shubham",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nanital, India",
    city: "Nanital",
    distance: 500,
    address: 'SomeWhere',
    price: 75,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Shubham",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Nanital, India",
    city: "Nanital",
    distance: 500,
    address: 'SomeWhere',
    price: 88,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Shubham",
        rating: 4.4,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Nanital, India",
    city: "Nanital",
    distance: 500,
    address: 'SomeWhere',
    price: 79,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Shubham",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Nanital, India",
    city: "Nanital",
    distance: 500,
    address: 'SomeWhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
