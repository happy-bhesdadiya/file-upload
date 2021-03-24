const { randomBytes, randomInt, randomFill } = require('crypto');
const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router()

// Image Upload
const imageStorage = multer.diskStorage({
    destination: 'images', // Destination to store image 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + randomInt(100000) + path.extname(file.originalname))
        // file.fieldname is name of the field (image), path.extname get the uploaded file extension
    }
});

const imageUpload = multer({
    storage: imageStorage,
    limits: {
        fileSize: 1000000   // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {     // upload only png and jpg format
            return cb(new Error('Please upload a Image'))
        }
        cb(undefined, true)
    }
}).single('image')  // image is fieldname

router.post('/uploadImage', imageUpload, (req, res) => {
    res.send('Image has been uploaded successfully!')
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

// ---------------------------------------------------------------------------- //

// Video Upload
const videoStorage = multer.diskStorage({
    destination: 'videos', // Destination to store video 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + randomInt(100000) + path.extname(file.originalname))
    }
});

const videoUpload = multer({
    storage: videoStorage,
    limits: {
        fileSize: 10000000   // 10000000 Bytes = 10 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(mp4|MPEG-4)$/)) {     // upload only mp4 and mkv format
            return cb(new Error('Please upload a Video'))
        }
        cb(undefined, true)
    }
}).single('video')  // video is fieldname

router.post('/uploadVideo', videoUpload, (req, res) => {
    res.send('Video has been uploaded successfully!')
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

module.exports = router
