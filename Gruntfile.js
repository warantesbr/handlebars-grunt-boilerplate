module.exports = function(grunt) {

  // Configuração do projeto
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    assemble: {
      options: {
        flatten: true,
        assets: 'assets',
        partials: ['src/templates/partials/*.hbs', 'src/templates/partials/**/*.hbs', 'src/templates/layouts/*.hbs'],
        layout: false,
        data: ['src/data/*.{json,yml}']
      },
      files: {
        src: 'src/templates/*.hbs',
        dest: 'dist/'
      }
    },
    watch: {
      files: ['src/templates/**/*.hbs', 'src/data/**/*.json'],
      tasks: ['assemble']
    }
  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['assemble']);
};
