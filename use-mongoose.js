'use strict';

//initialization and setup the app for dotenv+mongoose+express package
require('dotenv').config();

const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL;

const PORT = process.env.PORT || 5050;

const foodCollection = require('./modules/food-class.js');

//start the app run
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}).then((PORT) => {
    console.log(`im listen for the prot ${PORT}`);
}).catch((error) => {
    console.log(error);
});

const foodModule = require('./modules/food-module.js');

const Food = new foodCollection(foodModule);

const foodData = async() => {
    let food = {
        name: 'mshmsh',
        price: 10,
        type: 'vega'
    }

    let newFood = await Food.create(food);
    console.log('create new food', newFood);

    let allFood = await Food.get();
    console.log('get all the food', allFood);

    let oneFood = await Food.get(newFood.id);
    console.log('get one food', oneFood);

    let updateFood = await Food.update(newFood.id, {
        name: 'beg',
        price: 25,
        type: 'meat'
    });
    console.log('update one food', updateFood);

    let getUpdate = await Food.get(newFood.id);
    console.log('get the update food', getUpdate);

    mongoose.disconnect();
}

foodData();