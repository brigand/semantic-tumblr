module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        // Remove built directory
        clean: {
            build: ['build/']
        },

        // Build the site using grunt-includes
        includes: {
            build: {
                cwd: 'html',
                src: [ 'theme.html' ],
                dest: 'build/',
                options: {
                    flatten: true,
                    banner: '<!-- Semantic-UI Tumblr Theme ! -->\n'
                }
            }
        }
    });

    // Load plugins used by this task gruntfile
    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Task definitions
    grunt.registerTask('build', ['clean', 'includes']);
    grunt.registerTask('default', ['build']);
    grunt.task.registerTask("paths", "update font URLs", function () {
        var paths = grunt.file.readJSON("./asset_urls.json").fonts;
        var css = grunt.file.read("./css/semantic.min.css")

            // this matches url(../fonts/file.foo.bar#maybesomethinghere
            // name is file.foo.bar
            // extra is #maybesomethinghere
            .replace(/url\((\.\.\/fonts\/([\w.]+)([^)]*))\)/g, function (m, path, name, extra) {
                return "url(" + (paths[name] || "/404") + extra + ")";
            });

        grunt.file.write("build/semantic.css", css);
    });
};