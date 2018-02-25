// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable able to connect MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    const db = client.db('TodoApp');

    // db.collection('Todo').find({ 
    //     _id: new ObjectID("5a8e4df50752e46303d16a5f")
    // }).toArray().then((docs) => {
    //     console.log('Todo');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch to do.', err)
    // });

    // db.collection('Todo').find().count().then((count) => {
    //     console.log(`Todo count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch to do.', err)
    // });

    db.collection('Users')
    .find({ name: "Cory Romanosky" })
    .toArray()
    .then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch to do.', err)
    });

    // client.close();
});