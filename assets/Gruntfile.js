module.exports = function(grunt){

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	// Concatenate Configuration
	concat: {
		options: {
			separator: ';'
		},
		script: {
			src: [
				'dist/js/script.js'
			],
			dest: '../markup/js/script.min.js'
		}
	},

	// Uglify Configuration
	uglify: {
		dist: {
			files: {
				'../markup/js/jquery.min.js': ['dist/js/plugin/jquery.js'],
				'../markup/js/jquery-ui.min.js': ['dist/js/plugin/jquery-ui.js'],
				'../markup/js/jquery.mask.min.js': ['dist/js/plugin/jquery.mask.js'],
				'../markup/js/jquery.responsiveTabs.min.js': ['dist/js/plugin/jquery.responsiveTabs.js'],
				'../markup/js/jcf.min.js': ['dist/js/plugin/jcf.js'],
				'../markup/js/jcf.file.min.js': ['dist/js/plugin/jcf.file.js'],
				'../markup/js/jcf.radio.min.js': ['dist/js/plugin/jcf.radio.js'],
				'../markup/js/jcf.select.min.js': ['dist/js/plugin/jcf.select.js'],
				'../markup/js/jcf.checkbox.min.js': ['dist/js/plugin/jcf.checkbox.js'],
				'../markup/js/jquery.matchHeight.min.js': ['dist/js/plugin/jquery.matchHeight.js'],
				'../markup/js/slick.min.js': ['dist/js/plugin/slick.js'],
				'../markup/js/jquery.contenttoggle.min.js': ['dist/js/plugin/jquery.contenttoggle.js'],
				'../markup/js/rangeslider.min.js': ['dist/js/plugin/rangeslider.js'],
				'../markup/js/script.min.js': ['dist/js/script.js'],
				'../markup/js/employer-home.min.js': ['dist/js/employer-home.js'],
				'../markup/js/employer-about.min.js': ['dist/js/employer-about.js'],
				'../markup/js/employer-faq.min.js': ['dist/js/employer-faq.js'],
				'../markup/js/employer-additional-services.min.js': ['dist/js/employer-additional-services.js'],
				'../markup/js/employer-services.min.js': ['dist/js/employer-services.js'],
				'../markup/js/employer-outsourcing-service.min.js': ['dist/js/employer-outsourcing-service.js'],
				'../markup/js/employer-contract-service.min.js': ['dist/js/employer-contract-service.js'],
				'../markup/js/employer-leasing-service.min.js': ['dist/js/employer-leasing-service.js'],
				'../markup/js/employer-delegation-services.min.js': ['dist/js/employer-delegation-services.js'],
				'../markup/js/employer-recruitment-service.min.js': ['dist/js/employer-recruitment-service.js'],
				'../markup/js/employer-news.min.js': ['dist/js/employer-news.js'],
				'../markup/js/employer-contacts.min.js': ['dist/js/employer-contacts.js'],
				'../markup/js/employer-blog.min.js': ['dist/js/employer-blog.js'],
				'../markup/js/employer-calculator.min.js': ['dist/js/employer-calculator.js'],
				'../markup/js/seekers-home.min.js': ['dist/js/seekers-home.js'],
				'../markup/js/seekers-adaptation.min.js': ['dist/js/seekers-adaptation.js'],
				'../markup/js/seekers-about.min.js': ['dist/js/seekers-about.js'],
				'../markup/js/seekers-partners.min.js': ['dist/js/seekers-partners.js'],
				'../markup/js/seekers-visas.min.js': ['dist/js/seekers-visas.js'],
				'../markup/js/seekers-free-employment.min.js': ['dist/js/seekers-free-employment.js'],
				'../markup/js/seekers-reviews.min.js': ['dist/js/seekers-reviews.js'],
				'../markup/js/seekers-сontacts.min.js': ['dist/js/seekers-сontacts.js'],
				'../markup/js/seekers-scammers.min.js': ['dist/js/seekers-scammers.js'],
				'../markup/js/seekers-search.min.js': ['dist/js/seekers-search.js'],
				'../markup/js/seekers-cooperation.min.js': ['dist/js/seekers-cooperation.js'],
				'../markup/js/seekers-sos.min.js': ['dist/js/seekers-sos.js'],
				'../markup/js/seekers-vacancies.min.js': ['dist/js/seekers-vacancies.js'],
			}
		}
	},

	// Sass Configuration
	sass: {
		options: {
			loadPath: ['bower_components/foundation/foundation.scss']
		},
		dist: {
			options: {
				sourcemap: 'none',
				style: 'compressed'
			},
			files: [{
				expand: true,
				cwd: 'dist/scss/',
				src: ['*.scss'],
				dest: '../markup/css/',
				ext: '.css'
			}]
		}
	},

	// Watch Configuration
	watch: {
		grunt: { files: ['Gruntfile.js'], tasks: ['default'] },

		sass: {
			files: 'dist/scss/**/*.scss',
			tasks: ['buildCss']
		},

		script: {
			files: 'dist/js/*.js',
			tasks: ['buildJs']
		},

		markup: {
			files: '**/*.html',
			tasks: ['htmlbuild']
		}
	},

	fixturesPath: './',
	sourcesPath: '../markup',

    htmlbuild: {
        dist: {
            src: '*.html',
            dest: '<%= sourcesPath %>/templates/',
            options: {
                beautify: true,
                prefix: '../',
                relative: false,
                sections: {
                    views: '<%= fixturesPath %>/*.html',
                    templates: '<%= fixturesPath %>/*.html',
                    layout: {
						seekers_header: '<%= fixturesPath %>/templates/seekers-header.html',
						header: '<%= fixturesPath %>/templates/header.html',
                    	footer: '<%= fixturesPath %>/templates/footer.html',
                    	seekers_footer: '<%= fixturesPath %>/templates/seekers-footer.html',
						video_popup: '<%= fixturesPath %>/templates/video-popup.html',
						politic_popup: '<%= fixturesPath %>/templates/popup-politic.html',
					}
                },
            }
        }
    }


});

// Load Grunt tasks
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-html-build');

// Register Grunt tasks
grunt.registerTask('buildCss', ['sass']);
grunt.registerTask('buildJs',  ['concat', 'uglify']);
grunt.registerTask('default',  ['buildCss', 'buildJs', 'watch', 'sass']);

}
