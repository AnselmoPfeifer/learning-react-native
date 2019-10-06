const multer = require('multer')
const path = require('path')

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            let ext = path.extname(file.originalname)
            let name = `${req.body.company.toLowerCase()}-${Date.now()}`
            console.log()
            cb(null, `${name}${ext}`);
        },
    })
}

