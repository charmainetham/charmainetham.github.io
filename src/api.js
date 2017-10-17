const ProjectAPI = {
  projects: [
    { number: 5, 
      name: "My Portfolio", 
      description: "This website, the website that you are looking at is built with Node.JS and React. I used Webpack2 and ReactRouter v4 for this project. It is a fun project that I decided to do to learn more about react.",
      photo: "charmainesphotom.jpg",
      link: ""
    },
    { number: 4, 
      name: "A Simple Blog", 
      description: "A Simple blog that allows you to create, edit and delete posts. It's built on node, expressJS and Angular.",
      photo: "angularblog.jpg",
      link: "https://github.com/charmainetham/thecodingbull-blog"   
    },
    { number: 3, 
      name: "Vroomio", 
      description: "Vroomio is a 2-D multiplayer game with chat web application.It is being built using Node.js, Socket.io, Phaser.io.",
      photo: "vroom.jpg",
      link: "https://github.com/Harrykim/Vroomio"
    },
    { number: 2, 
      name: "Beer Personality Test", 
      description: "Beer Personality Test is deployed on Heroku and was built using Ruby on Sinatra, Twitter Bootstrap, and SQLite3.", 
      photo: "beer.png",
      link: "https://github.com/CodeJusto/beer-personality-test"
    },
    { number: 1, 
      name: "Rotten Mangoes", 
      description: "Rotten Mangoes was built using Ruby on Rails and Bulma (flexbox) for most of the styling.", 
      photo: "rotten.png",
      link: "https://github.com/charmainetham/rottenmangoes"
    }
  ],
  all: function() { return this.projects},
  get: function(id) {
    const isProject = p => p.number === id
    return this.projects.find(isProject)
  }
}

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
export default ProjectAPI