import postsData from './postsData';

const categories = [
  {
    id: 1,
    name: "Technology",
    postCardColor: "bg-blue-100",
    tagColor: "#85B2F4",
    description: "Latest trends and advancements in technology.",
    posts: postsData.filter(post => post.categoryId === 1),
  },
  {
    id: 2,
    name: "Health",
    postCardColor: "bg-green-100",
    tagColor: "#83EA6C",
    description: "Health tips, wellness advice, and medical news.",
    posts: postsData.filter(post => post.categoryId === 2),
  },
  {
    id: 3,
    name: "Finance",
    postCardColor: "bg-yellow-100",
    tagColor: "#FB0699",
    description: "Financial news, investment strategies, and market analysis.",
    posts: postsData.filter(post => post.categoryId === 3),
  },
  {
    id: 4,
    name: "Travel",
    postCardColor: "bg-red-100",
    tagColor: "#C5C5FE",
    description: "Travel guides, tips, and destination reviews.",
    posts: postsData.filter(post => post.categoryId === 4),
  },
  {
    id: 5,
    name: "Lifestyle",
    postCardColor: "bg-purple-100",
    tagColor: "#49DFD4",
    description: "Lifestyle trends, tips, and inspiration to elevate your daily routine. Explore the latest in fashion, wellness, and home décor, along with practical advice to enhance your lifestyle. Discover expert insights on staying motivated, achieving personal goals, and creating a balanced, fulfilling life.",
    posts: postsData.filter(post => post.categoryId === 5),
  },
  {
    id: 6,
    name: "Education",
    postCardColor: "bg-teal-100",
    tagColor: "#FFCF00",
    description: "Educational resources, tips, and news.",
    posts: postsData.filter(post => post.categoryId === 6),
  },
];

export default categories;