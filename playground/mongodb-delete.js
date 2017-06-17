//const MongoClient = require('mongodb').MongoClient;
//const {MongoClient} = require('mongodb'); //above code using ES 6

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    console.log('Todos');

    //deleteMany
    // db.collection('Todos').deleteMany({ text: 'eat lunch' }).then((result) => {
    //     console.log(result);
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({ name: 'bhargav' }).then((result) => {
    //         console.log(result);
    //     });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('594466fad0d1e72acc2dc6bd')
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    })

    //db.close();
});