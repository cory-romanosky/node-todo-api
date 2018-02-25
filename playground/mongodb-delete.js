// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable able to connect MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todo').deleteMany({text: "Eat Lunch"}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todo').deleteOne({ text: "Eat Lunch" }).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    db.collection('Todo')
    .findOneAndDelete({ completed: false })
    .then((result) => {
         console.log(result);
     });
    
  
    // client.close();
});