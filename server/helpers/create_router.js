const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function (collection) {

    const router = express.Router();

    router.get('/', (req, res) => {
        collection
            .find()
            .toArray()
            .then((docs) => res.json(docs))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            })
    });

    router.post('/', (req, res) => {
        const newListItem = req.body
        collection
            .insertOne(newListItem)
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            })
    })

    router.delete('/', (req, res) => {
        const itemToDelete = req.body.id
        collection
            .deleteOne(itemToDelete)
            .then(result => {
                res.json(result);
            })
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    router.put('/', (req, res) => {
        const id = req.body._id
        const userComment = req.body.comment
        
        collection
            .updateOne({ _id : new ObjectId(id)}, { $set: { comment: userComment } })
            .then(result => {
                res.json(result)
            })
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    })


    return router
}

module.exports = createRouter