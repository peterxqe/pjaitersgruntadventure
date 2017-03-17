
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
        }
    });
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.registerTask('default',['sass','connect']);
};