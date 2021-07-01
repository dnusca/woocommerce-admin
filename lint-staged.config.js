module.exports = {
	'*.scss': [ 'yarn run lint:css-fix' ],
	'client/**/*.js': [
		'wp-scripts format-js',
		'wp-scripts lint-js',
		'yarn run test-staged',
	],
	'packages/**/*.js': ( packageFiles ) => {
		const globalScripts = [
			`wp-scripts format-js ${ packageFiles.join( ' ' ) }`,
			`wp-scripts lint-js ${ packageFiles.join( ' ' ) }`,
		];

		const filesByPackage = packageFiles.reduce(
			( packages, packageFile ) => {
				const packageName = packageFile.match(
					/\/packages\/([a-z\-]+)\//
				)[ 1 ];

				if ( Array.isArray( packages[ packageName ] ) ) {
					packages[ packageName ].push( packageFile );
				} else {
					packages[ packageName ] = [ packageFile ];
				}

				return packages;
			},
			{}
		);

		const workspaceScripts = Object.keys( filesByPackage ).map(
			( packageName ) =>
				`yarn workspace @woocommerce/${ packageName } run test-staged ${ filesByPackage[
					packageName
				].join( ' ' ) }`
		);

		return globalScripts.concat( workspaceScripts );
	},
	'*.php': [ 'php -d display_errors=1 -l', 'composer run-script phpcs' ],
};
