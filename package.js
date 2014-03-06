Package.describe({
    summary: "ps-ui library packaged for meteor"
});

Package.on_use(function (api, where) {
    api.use("ngMeteor", "client");

    // ps-ui files.
    api.add_files("lib/ps-ui-tpls.min.js", "client");
    api.add_files("lib/ps-ui.min.css", "client");

    // Client files.
    api.add_files("init.js", "client");
});
