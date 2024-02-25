const express = require('express')
const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://siddhant:siddhant48m@food.tkv1g9r.mongodb.net/' 
// const mongoURI = 'mongodb://127.0.0.1:27017/Food'
// const mongoDB = async () => {
//     await mongoose.connect(mongoURI,{ useNewUrlParser : true}, async(err, result) => {
//         if(err) console.log("---", err)
//         else{
//     console.log("connected");
//     const fetched_data = await mongoose.connection.db.collection("fooditem");
//     fetched_data.find({}).toArray(function(err, data){
//                 if(err) console.log(err)
//                 // else console.log(data)
//         })
//     }
// }); 
// };

const mongoURI =  'mongodb+srv://mayank:mayank2002@food-order.zuokjbh.mongodb.net/foodordering?retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURI , { useNewUrlParser : true } , async(err,result) =>{
        if(err){
            console.log("---",err)
        }
        else{
            console.log("connected")
            const fetched_data = await mongoose.connection.db.collection("food_items")
            fetched_data.find({}).toArray(function(err , data){
                if(err) console.log(err);
                // else console.log(data)
                
            })
        }
    })
}



module.exports = mongoDB