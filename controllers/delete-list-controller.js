
const db = require('../config/mongoose');
const ListItem = require("../models/listItems");

module.exports.deleteList = function(req, res){

    let id = req.query.id;

    ListItem.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in deleting an object from database');
            return;
        }

        return res.redirect('back');
    });
}