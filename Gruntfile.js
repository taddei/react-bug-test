var path = require('path');

module.exports = function (grunt) {
  // Let *load-grunt-tasks* require everything
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    webpack: {
      dev: require('./grunt-config/webpack.dev.conf.js')
    },
    watch: { // watchers are done only on dev environments
      scripts: {
        files: [path.join('./lib', '**/*.js*')],
        tasks: ['webpack:dev']
      }
    },
    concurrent: {
      dev: {
        tasks: ['webpack:dev', 'watch:scripts'],
        options: {
          limit: 5,
          logConcurrentOutput: true
        }
      }
    }
  });

  grunt.registerTask('default', ['concurrent:dev']);
  grunt.registerTask('dev', ['concurrent:dev']);
};
