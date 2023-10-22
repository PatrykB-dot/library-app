const { Router } = require("express");
const Book = require('../models/bookModel');

const router = Router();

//Post Method -- Create book
router.post('/book/create', async (req, res) => {
    const data = new Book({
        bookname: req.body.bookname,
        author: req.body.author,
        releasedate : req.body.releasedate,
        amount: req.body.amount,
    })

    try {
        const dataToSave = await data.save();
        res.redirect("/")
        
    }
    catch(error) {
        res.status(400).json({message: error.message});
    }
});

//Get all Books Method
router.get('/book/getall', async (req, res) => {
    try {
        const data = await Book.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// //Get Book by ID Method
router.get('/book/getbyid', async (req, res) => {
    try {
        const data = await Book.findById(req.body.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get Book by bookname
router.get('/book/getbyname', async (req, res) => {
    try {
        const data = await Book.findOne(req.body.bookname);
        res.json(data);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Update User by ID Method
router.patch('/book/update', async (req, res) => {
    try {
        const id = req.body.id;
        const updatedData = req.body;
        const options = { new: true};
        const result = await Book.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
});

//Delete Book by ID Method
router.delete('/book/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Book.findByIdAndRemove(id);
        data.then(() => {
            res.redirect("/");
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ errorMessage: err.message });
          });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;