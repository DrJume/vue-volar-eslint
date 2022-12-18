module.exports = (program) =>
    require('vue-tsc-eslint-hook')(
        program,
        require('./resolve-config.js')
    )
