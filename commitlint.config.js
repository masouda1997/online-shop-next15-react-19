// commitlint.config.js
module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		// 1. Types allowed in your project
		'type-enum': [
			2,
			'always',
			[
				'feat', // new feature
				'fix', // bug fix
				'docs', // documentation only changes
				'style', // formatting, missing semi-colons, etc
				'refactor', // code change that neither fixes a bug nor adds a feature
				'perf', // a code change that improves performance
				'test', // adding missing tests or correcting existing tests
				'chore', // changes to the build process or auxiliary tools
				'ci', // CI related changes
			],
		],
		// 2. (Optional) You can enforce scopes if you like:
		// 'scope-enum': [2, 'always', ['api', 'ui', 'build', 'deps']],
		// 3. Subject must be lowercase, no trailing period
		'subject-case': [2, 'never', ['start-case', 'pascal-case']],
		'subject-full-stop': [2, 'never', '.'],
		// 4. Header (type + scope + subject) max length
		'header-max-length': [2, 'always', 200],
	},
};
