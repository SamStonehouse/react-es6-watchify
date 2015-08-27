module.exports = function (grunt) {

	var buildDir = "./build/";
	var sourceDir = "./source/";

	var scriptSubfolder = "scripts/";
	var styleSubfolder = "styles/";
	var assetSubfolder = "assets/";

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
						cwd: 'source',
						src: ['assets/**/*'],
						dest: 'build/',
					},
				], 
			},
		},
		browserify: {
			dev: {
				files: {
					'build/app.js': ['source/scripts/main.js']
				},
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
				files: {
					'build/app.js': ['source/scripts/main.js']
				},
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
			}
		},
		targethtml: {
			dev: {
				files: {
					'build/index.html': 'source/index.html'
				}
			},
			prod: {
				files: {
					'build/index.html': 'source/index.html'
				}
			}
		},
		sass: {
			dev: {
				options: {
					sourceMap: true
				},
				files: {
					'build/style.css': 'source/styles/main.scss'
				}
			}
		},
		concurrent: {
			options: {
				logConcurrentOutput: true,
			},
			dev: ['browserify:devWatch', 'watch:html', 'watch:sass', 'watch:livereload'],
		},
		watch: {
			html: {
				files: ['source/index.html'],
				tasks: ['targethtml:dev'],
				options: {
					spawn: false,
				},
			},
			sass: {
				files: ['source/styles/**'],
				tasks: ['sass:dev'],
				options: {
					spawn: false,
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
				files: ['source/scripts/**'],
				tasks: ['eslint']
			}
		},
		eslint: {
			target: ['source/scripts/**']
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

	grunt.registerTask('watch-all', ['concurrent:dev'])

	grunt.registerTask('default', ['eslint', 'clean:build', 'copy:assets', 'scripts_dev', 'targethtml:dev', 'sass:dev']);
};
