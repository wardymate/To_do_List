module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'test/*.js']
    },
    protractor: {
      options: {
        configFile: "conf.js", // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {
          // Arguments passed to the command
        }
      },
      your_target: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
        options: {
          configFile: "conf.js", // Target-specific config file
          args: {} // Target-specific arguments
        }
      },
    },
    protractor_webdriver: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      command: 'webdriver-manager start',// Target-specific file lists and/or options go here.
    },
  },


  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-protractor-runner');


  grunt.registerTask('default', ['jshint','protractor_webdriver','protractor']);

};