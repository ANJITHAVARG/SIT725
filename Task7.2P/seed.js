const mongoose = require('mongoose');
const Project = require('./models/dataModel');

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const cardList = [
  {
    title: "Kitten 2",
    image: "images/kitten-2.jpg",
    link: "About Kitten 2",
    description: "Demo description about kitten 2"
  },
  {
    title: "Kitten 3",
    image: "images/kitten-3.jpg",
    link: "About Kitten 3",
    description: "Demo description about kitten 3"
  }
];

const seedDB = async () => {
  await Project.deleteMany(); // optional: clears old data
  await Project.insertMany(cardList);
  console.log("Database seeded!");
  mongoose.connection.close();
};

seedDB();
