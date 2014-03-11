Package.describe({
    summary: "ps-ui library packaged for meteor"
});

Package.on_use(function (api, where) {
	// dependencies
    api.use("ngMeteor", "client");
	api.use("angular-bootstrap", "client");
	api.use("angular-ui-utils", "client");

    // ps-ui files.
    api.add_files("lib/ps-ui-tpls.js", "client");
    api.add_files("lib/ps-ui.css", "client");

    // Client files.
    api.add_files("init.js", "client");
});
