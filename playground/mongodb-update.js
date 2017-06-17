//const MongoClient = require('mongodb').MongoClient;
//const {MongoClient} = require('mongodb'); //above code using ES 6

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //findOneAndUpdate   
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59446ed90d2fa496d620c95d')
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59444f715b07aa199c61c500')
    }, {
            $set: {
                name: 'bhargava somineni'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });
    //db.close();
});