const path = require('node:path')

const getPublic = (dir) => {
    return path.join(__dirname, `../app/${dir}/public`)
}

module.exports = getPublic;