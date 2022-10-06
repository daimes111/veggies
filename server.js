require('dotenv').config()

const fs = require('fs')
const express = require('express')
const app = express()
const Veggie = require('./models/veggie')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
// const { runInNewContext } = require('vm')  --not sure where this line came from


/*Start Config*/
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'jsx')
// app.set('views', __dirname + '/views')
app.engine('jsx', require('jsx-view-engine').createEngine())
mongoose.connect(process.env.MONGO_URI, { useNewURLParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
})
app.use(methodOverride('_method'))

//index
app.get('/veggies', (req, res) => { 
   Veggie.find({}, (err, foundVeggies) => {
    if(err){
        console.error(err)
        res.status(400).send(err)
    } else {
        res.render('veggies/Index', {
            veggies: foundVeggies
        })
    }
   })
})

//new
app.get('/veggies/new', (req, res) => {
    res.render('veggies/New')
})

//delete
app.delete('/veggies/:id', (req,res) => {
    Veggie.findByIdAndDelete(req.params.id, (err, deletedVeggie) => {
        if(err){
            console.error(err)
            res.status(400).send(err)
        } else {
            res.redirect('/veggies')
        }
    
    })
})

//update
app.put('/veggies/:id', (req, res) => {
    req.body.fav === 'on' || req.body.fav === true ? req.body.fav = true : req.body.fav = false
    Veggie.findByIdAndUpdate(req.params.id, req.body, {new: true},  (err, updatedVeggie) => {
        if(err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.redirect(`/veggie/${updatedVeggie._id}`)
        }
    })
})

//create
app.post('/veggies', (req, res) => {
    req.body.fav === 'on' || req.body.fav === true ? req.body.fav = true : req.body.fav = false
    Veggie.create(req.body, (err, createdVeggie) => {
        if(err){
            console.error(err)
            res.status(400).send(err)
        } else {
            res.redirect('/veggies')
        }
    })
})

//edit
app.get('/veggies/:id/edit', (req,res) => {
    Veggie.findById(req.params.id, (err, editVeggie) => {
        if (err){
            console.error(err)
            req.status(400).send(err)
        } else {
        res.render('veggies/Edit', {
            veggie: editVeggie
        })}
    }) 
})

//show
app.get('/veggies/:id', (req, res) => { 
    Veggie.findById(req.params.id, (err, foundVeggie) => {
        if (err){
            console.error(err)
            req.status(400).send(err)
        } else {
        res.render('veggies/Show', {
            veggie: foundVeggie
        })}
    })
})

app.listen(3001, () => {
    console.log('Listening to port 3001')
})