const path = require('node:path')

const getPage = (page) => {
    return path.join(__dirname, `../app/${page}`)
}

module.exports = getPage;