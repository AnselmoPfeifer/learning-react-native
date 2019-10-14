// const multer = require('multer')
// const path = require('path')

// module.exports = {
//     storage: multer.diskStorage({
//         destination: path.resolve(__dirname, '..', '..', 'images'),
//         filename: (req, file, cb) => {
//             let ext = path.extname(file.originalname)
//             let name = `${req.body.company.toLowerCase()}-${Date.now()}`
//             cb(null, `${name}${ext}`);
//         },
//     })
// }

const multer = require('multer');
const path = require('path');

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);

      cb(null, `${name}-${Date.now()}${ext}`);
    },
  }),
}