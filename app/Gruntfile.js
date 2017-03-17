
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'local/main.css' : 'sass/main.scss'
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: 'local',
                    keepalive: true,
                    open: {
                        target: 'http://localhost:8080'
                    }
                }
            }
        },watch: {
            sass: {
                // We watch and compile sass files as normal but don't live reload here
                files: ['sass/*.scss'],
                tasks: ['sass']
            },
            configFiles: {
                files: [ 'Gruntfile.js' ],
                options: {
                    reload: true
                }
            }
        }
    });
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default',['sass','connect','watch']);
};