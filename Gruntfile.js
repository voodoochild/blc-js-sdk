module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        jshintrc: true
      },
      files: ['src/blc.js']
    },

    uglify: {
      dist: {
        options: {
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                  '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files: {
          'blc.js': ['src/blc.js']
        }
      },
      example: {
        options: {
          mangle: false
        },
        files: {
          'example/javascripts/blc.js':  ['src/blc.js']
        }
      }
    }
  });

  // Modules
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Tasks
  grunt.registerTask('default');
};
