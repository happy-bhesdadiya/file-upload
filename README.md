# Getting Started with File upload with multer in Node js
This Demo was uploading image and video file using multer middleware.

## Project Setup
In the project directory, you can run:

### `npm init`
### `npm install`
### `npm start`

Runs the app in the development mode.

## Calling the single image upload API
- Open Postman and create POST request for image upload
- URL will be [localhost:3000/uploadImage](http://localhost:3000/uploadImage)
- select Body in menus then select form-data
- In table write the key name `image` and select type as a `file`
- then after select any image (size less then 1MB).
- And Send the request.
