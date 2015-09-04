module.exports = function (grunt) {

	var buildDir = "build/";
	var sourceDir = "source/";

	var scriptsSubfolder = "scripts/";
	var stylesSubfolder = "styles/";
	var assetsSubfolder = "assets/";

	var scriptsSource = sourceDir + scriptsSubfolder;
	var stylesSource = sourceDir + stylesSubfolder;
	var assetsSource = sourceDir + assetsSubfolder;

	var entryScript = "main.js";
	var bundledScript = "bundle.js";

	var entryStyle = "main.scss";
	var bundledStyle = "style.css";

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			build: 	["build/"],
		},
		copy: {
			assets: {
				files:[
					{
						expand: true,
						cwd: sourceDir,
						src: [assetsSubfolder + '**/*'],
						dest: buildDir,
					},
				], 
			},
		},
		browserify: {
			dev: {
				files: [{
					dest: buildDir + bundledScript,
					src: [scriptsSource + entryScript],
				}],
				options: {
					transform: [
						'babelify', 'reactify'
					],
					browserifyOptions: {
						extensions: ['.jsx'],
						debug: true,
					},
				},
			},
			devWatch: {
				files: [{
					dest: buildDir + bundledScript,
					src: [scriptsSource + entryScript],
				}],
				options: {
					transform: [
						'babelify', 'reactify'
					],
					browserifyOptions: {
						extensions: ['.jsx'],
						debug: true,
					},
					keepAlive: true,
					watch: true
				},
			},
			prod: {
				files: [{
					dest: buildDir + bundledScript,
					src: [scriptsSource + entryScript]
				}],
				options: {
					transform: [
						'babelify', 'reactify'
					],
					plugin: [
						['minifyify', { map: false } ],
					],
					browserifyOptions: {
						extensions: ['.jsx'],
					},
				},
			}
		},
		targethtml: {
			dev: {
				files: [{
					dest: buildDir + 'index.html',
					src: sourceDir + 'index.html'
				}]
			},
			devWatch: {
				files: [{
					dest: buildDir + 'index.html',
					src: sourceDir + 'index.html',
				}]
			},
			prod: {
				files: [{
					dest: buildDir + 'index.html',
					src: sourceDir + 'index.html'
				}]
			}
		},
		sass: {
			dev: {
				options: {
					sourceMap: true
				},
				files: [{
					dest: buildDir + bundledStyle,
					src: stylesSource + entryStyle
				}]
			},
			prod: {
				options: {
					sourceMap: false,
					outputStyle: 'compressed',
				},
				files: [{
					dest: buildDir + bundledStyle,
					src: stylesSource + entryStyle
				}]
			}
		},
		concurrent: {
			options: {
				logConcurrentOutput: true,
			},
			dev: ['targethtml:devWatch', 'browserify:devWatch', 'watch:html', 'watch:sass', 'watch:livereload'],
		},
		watch: {
			html: {
				files: [ sourceDir + 'index.html'],
				tasks: ['targethtml:devWatch'],
				options: {
					spawn: true,
				},
			},
			sass: {
				files: [ stylesSource + '**'],
				tasks: ['sass:dev'],
				options: {
					spawn: true,
				},
			},
			livereload: {
				files: ['build/**'],
				tasks: [],
				options: {
					livereload: true,
				},
			},
			lint: {
				files: [scriptsSource + '**'],
				tasks: ['eslint']
			}
		},
		eslint: {
			target: [scriptsSource + '**/*']
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-targethtml');
	
	grunt.registerTask('scripts_dev', ['browserify:dev']);
	grunt.registerTask('scripts_prod', ['browserify:prod']);

	grunt.registerTask('styles_dev', ['sass:dev']);
	grunt.registerTask('styles_prod', ['sass:prod']);

	grunt.registerTask('views_dev', ['targethtml:dev'])
	grunt.registerTask('views_prod', ['targethtml:prod'])

	grunt.registerTask('watch-all', ['concurrent:dev'])

	grunt.registerTask('default', ['eslint', 'clean:build', 'copy:assets', 'scripts_dev', 'views_dev', 'styles_dev']);
	grunt.registerTask('prod', ['eslint', 'clean:build', 'copy:assets', 'scripts_prod', 'views_prod', 'styles_prod']);
};
