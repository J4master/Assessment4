let gameArr = ["Sekiro","Apex","Bloons TD6","Uno","Dark Souls"]
let price = 0

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["A faithful friend is a strong defense.", "A smile is your personal welcome mat.", "Dont just think, act!"]
      
        let randomIndex = Math.floor(Math.random() * fortune.length)
        let randomFortune = fortune[randomIndex]
      
        res.status(200).send(randomFortune)
    },
// //////////////////////////////////////////////////////////////////////////

getGame: (req,res) => {
    res.status(200).send(gameArr)
},

getPrice: (req,res) => {
    res.status(200).send({price})
},

addGame: (req,res) => {
    let { game } = req.body
    gameArr.push(game)
        res.status(200).send(gameArr)
    },

deleteGame: (req,res) => {
    let { index } = req.params
    console.log(index)
    gameArr.splice(+index,1)
    res.status(200).send(gameArr)
}


}

