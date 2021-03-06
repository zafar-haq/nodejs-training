const db = require('../models')
const {ValidationError} = require('sequelize');
const Logger = require('../events/logger')


const logger =  new Logger();
logger.on('customer_updated', () => {
    console.log('update event triggered')
})


module.exports.create = function(req, res, next){
    db.Customer.create({
        name:'zafar'
    }).then( (result) => {
        res.status(201).json({message:'Customer created successfully.'})
    } ).catch( e => {
        if(e instanceof ValidationError){
            res.status(400).json({'validation error':e.errors[0].message})
        }else{
            res.status(400).json({error:e})
        }
    })
}

module.exports.update = function(req, res, next){
    db.Customer.update({
        name:'Zafar'
    }, { where: {name: 'zafar'}}).then(result => {
        logger.customerUpdateEmit();
        res.status(200).json({message:'Customer updated successfully.'})
    })
}

module.exports.read = function(req, res, next){
    db.Customer.findAll({
        where: {name: 'Zafar ul Haq'}
    }).then( (result) => {
        res.status(200).json({data:result})
    })
}

module.exports.delete = function(req, res, next){
    db.Customer.destroy({
        where: {id:2}
    }).then( () => {
        res.status(200).json({message: 'row deleted'})
    })
}