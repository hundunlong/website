const path = require('path');

module.exports = {
    entry:'./src',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}