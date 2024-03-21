const Goal = require('../models/goal');
const Gain = require('../models/gain')


module. exports = {
    show: showGains
}

async function showGains(req, res){
    // const gain = await Gain.find({}).populate('goal') 
    // const goal = await Goal.findById(req.params.id)
    // await gain.save();
    // await goal.save();

    // res.render('gains/show', {title: 'Celebrate Your Wins'})
}
