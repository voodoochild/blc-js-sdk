module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          sourcemap: false
        },
        files: {
          'stylesheets/main.css': 'stylesheets/main.scss'
        }
      }
    },

    watch: {
      files: ['stylesheets/**/*.scss'],
      tasks: ['sass']
    },

    connect: {
      server: {
        options: {
          port: 8080,
          base: '.'
        }
      }
    }

  });

  // Modules
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Tasks
  grunt.registerTask('default', ['connect', 'watch']);
};
