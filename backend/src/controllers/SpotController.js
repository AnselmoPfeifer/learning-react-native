const Spot = require('../models/Spot')
const User = require('../models/User')

// index, show, store, update, destroy 
module.exports = {
    async index (req, res) {
        const { tech } = req.query
        const spots = await Spot.find({ techs : tech })
        
        return res.json(spots)
    },

    async store(req, res) {    
        const { fileName } = req.file 
        const { company, techs, price } = req.body
        const { user_id } = req.headers

        const user = await User.findById(user_id)
        if (!user) {
            return res.status(400).json({ error: "The user does not exist!!!"})
        }

        const spot = await Spot.create({
            techs: techs.split(',').map(tech => tech.trim()),
            thumbnail: fileName,
            user: user_id,
            company,
            price
        })

        return res.json(spot)
    }
}
