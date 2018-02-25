// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable able to connect MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    const db = client.db('TodoApp');

    // db.collection('Todo')
    //     .findOneAndUpdate({ 
    //         _id: new ObjectID('5a9312830c50cba080aef343')}
    //         ,{
    //             $set: {
    //                 completed: false,
    //                 text: 'Walk the dog'
    //             }
    //         }, {
    //             returnOriginal: false
    //         })
    // .then((err, result) => {
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.collection('Users').findOneAndUpdate({
            _id: new ObjectID('5a8d0316f4de0cb1a68899a0')
        }, {
            $inc: {
                age: -10
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        })
    client.close();
});

