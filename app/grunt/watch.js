module.exports = {
        sass: {
            files: ['sass/**/*.scss'],
            tasks: ['sass']
        },
        html: {
        files: ['local/**/*.html']
    },configFiles: {
        files: [ 'Gruntfile.js' ],
        options: {
            reload: true
        }
    }
};