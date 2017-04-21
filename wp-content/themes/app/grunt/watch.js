module.exports = {
        sass: {
            files: ['sass/**/*.scss'],
            tasks: ['sass']
        },
        php: {
        files: ['**/*.php']
    },configFiles: {
        files: [ 'Gruntfile.js' ],
        options: {
            reload: true
        }
    }
};