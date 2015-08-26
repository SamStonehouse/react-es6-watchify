module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			build: 	["build/"],
		},
		browserify: {
			dev: {
				files: {
					'build/app.js': ['source/scripts/app/main.jsx']
				},
				options: {
					alias: {
						'react': './source/scripts/libs/react'
					},
					transform: [
						'babelify', 'reactify'
					],
					browserifyOptions: {
						extensions: ['.jsx'],
					}
				},
			},
			devWatch: {
				files: {
					'build/app.js': ['source/scripts/app/main.jsx']
				},
				options: {
					alias: {
						'react': './source/scripts/libs/react'
					},
					transform: [
						'babelify', 'reactify'
					],
					browserifyOptions: {
						extensions: ['.jsx'],
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
				files: ['source/scripts/app/**'],
				tasks: ['eslint']
			}
		},
		eslint: {
			target: ['source/scripts/app/**']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-targethtml');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-eslint');
	
	grunt.registerTask('scripts_dev', ['browserify:dev']);

	grunt.registerTask('watcher', ['concurrent:dev'])

	grunt.registerTask('default', ['eslint', 'clean:build', 'scripts_dev', 'targethtml:dev', 'sass:dev']);
};
