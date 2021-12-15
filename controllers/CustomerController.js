const db = require('../models')


module.exports.create = function(req, res, next){
    db.Customer.create({
        name:'zafar'
    }).then( (result) => {
        res.status(201).json({message:'Customer created successfully.'})
    } )
}

module.exports.update = function(req, res, next){
    db.Customer.update({
        name:'Zafar ul Haq'
    }, { where: {name: 'zafar'}}).then(result => {
        res.status(200).json({message:'Customer updated successfully.'})
    })
}