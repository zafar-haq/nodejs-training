
var Order = require('../models').Order
var Customer = require('../models').Customer
var Tag = require('../models').Tag
var Product = require('../models').Product
var db = require('../models')
var { ValidationError } = require('sequelize')

module.exports.create = async function (req, res, next) {

    // try {
    //     let customer = await Customer.findByPk(1)
    //     // res.status(200).json({data:customer})

    //     let order = await customer.createOrder({quantity:'1', createdAt: new Date(), updatedAt: new Date(), PaymentId: 1 })
    //     res.status(200).json({ data: order })
    // }
    // catch (e) {
    //     res.status(500).json({ error: e })
    // }




    // let order = Order.create({
    //     quantity:10
    // }).then( (result) => {

    //     customer.setOrder(order).catch( e => {
    //         res.status(400).json({error:e})
    //     })
    //     res.status(201).json({message:'Customer created successfully.'})
    // } ).catch( e => {
    //     if(e instanceof ValidationError){
    //         res.status(400).json({'validation error':e.errors[0].message})
    //     }else{
    //         res.status(400).json({error:e})
    //     }
    // })


    // try {
    //     let product = await Product.findOne({
    //         where: { id: 1 },
    //         include: [Tag]
    //     })
    //     res.status(200).json({ data: product })
    // }
    // catch (e) {
    //     console.log(e)
    //     res.json({error:e})
    // }


    let product = await Product.findByPk(1);

    try{
        let tag = await Tag.create({id:5, name:'tag5'})
        // await product.createTag({id:2, name:'tag2'})
        await product.addTag(tag)
        res.status(200).json({message:'done'})
    }
    catch(e){
        console.log(e)
        res.status(500).json({error:e})
    }finally{
        res.status(200)
    }




}