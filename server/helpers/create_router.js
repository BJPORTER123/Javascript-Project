const express = require('express')

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
                // res.json(result.insertId)
                res.json(result)
            })
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            })
    })

    router.delete('/', (req, res) => {
        const itemToDelete = req.body
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

    router.put('/:id', (req, res) => {
        const id = req.params.id
        const itemToUpdate = req.body
        collection
            .updateOne({_id:new ObjectId(id)}, {$set:itemToUpdate})
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