const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const cardBlog = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function (req, res){
    const sobre = {
        image_url: "https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh.jpg",
        titulo: "Rocketseat",
        description: "Evolua rápido como a tecnologia.",
        links: [
            { name: "Instagram", url: "https://rocketseat.com.br/", logo: "https://i.pinimg.com/474x/5d/36/d5/5d36d57c4bfb5da2300ec333595166af.jpg"},
            { name: "Facebook", url: "https://pt-br.facebook.com/rocketseat/", logo: "https://w7.pngwing.com/pngs/106/850/png-transparent-facebook-icon-logo-blue-square-symbol-social-facebook-blue-rectangle-logo-thumbnail.png"},
            { name: "Youtube", url: "https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg", logo: "https://image.flaticon.com/icons/png/512/1384/1384060.png"},
        ]
    }


    return res.render("sobre", { sobre })
})

server.get("/home", function (req, res){
    return res.render("home", { items: cardBlog})
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, function() {
    console.log("server is running")
})

