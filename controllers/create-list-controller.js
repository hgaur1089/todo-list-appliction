
const db = require('../config/mongoose');
const ListItem = require("../models/listItems");

module.exports.createList = function(req, res){
    console.log(req.body);
    ListItem.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, function(err, newListItem){
        if(err){
            console.log('error in creating contact');
            return;
        }

        console.log(newListItem);
        res.redirect('back');
    })

};