Npm.depends({
    'kue': '0.8.3'
});

Package.on_use(function (api) {
    api.export('Kue');
    api.add_files('kue.js', 'server'); // Or 'client', or ['server', 'client']
});
