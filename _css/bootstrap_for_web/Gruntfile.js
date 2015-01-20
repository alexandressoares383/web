module.exports = function(grunt){
	grunt.initConfig({
		copy: {
			public: {
				expand:true,
				cwd: 'public',
				src: '**',
				dest: 'dist'
			}
		},
		clean: {
			dist: {
				src: 'dist'
			}
		},
		sass: {
			dist: {
				files: {
					'style/style.css' : 'sass/style.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});

	grunt.registerTask('dist', ['clean', 'copy']);
	grunt.registerTask('default', ['dist']);

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
}