const db = require('../config/mongoose');
const ListItem = require("../models/listItems");

module.exports.home = function(req, res){

    ListItem.find({}, function(err, listItems){
        if(err){
            console.log('Error in fetching list items from db');
            return;
        } 

        return res.render('home.ejs', {
            title: 'To-Do List ',
            list_item: listItems
        });
    })

};