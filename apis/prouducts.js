const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.status(200).json({
        "results": [
            {
                "id": "123",
                "name":"Laptop",
                "price": 345
            },
            {
                "id": "456",
                "name":"Mobile",
                "price": 321
            },
            {
                "id": "789",
                "name":"Charger",
                "price": 34
            }
        ]
    });
});
router.get('/:id',(req,res) => {
    res.status(200).json({
        "id": req.params.id,
        "name":"Charger",
        "price": 34
    });
});
router.post('/',(req,res) => {
    console.log(req.body);
    res.status(200).json({
        "message":"Product Posted Successfully"
    });
});
router.delete('/:id',(req,res) => {
    let id = req.params.id;
    res.status(200).json({
        "message":"Product Deleted Successfully " + id
    });
});

router.patch('/:id',(req,res) => {
    let id = req.params.id;
    console.log(req.body);
    res.status(200).json({
        "message":"Product Updated Successfully " + id
    });
});

module.exports = router;