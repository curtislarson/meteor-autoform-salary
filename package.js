Package.describe({
  name: "quackware:meteor-autoform-salary",
  version: "0.0.1",
  // Brief, one-line summary of the package.
  summary: "Autoform input for salary and currency",
  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/quackware/meteor-autoform-salary",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("1.2.1");
  api.use("ecmascript");

  api.use(["templating@1.0.0", "blaze@2.0.0"], "client");
  api.use("aldeed:autoform@4.0.0 || 5.0.0");

  api.addFiles(["meteor-autoform-salary.css",
                "meteor-autoform-salary.html",
                "meteor-autoform-salary.js"], "client");
});

Package.onTest(function(api) {
  api.use("ecmascript");
  api.use("tinytest");
  api.use("meteor-autoform-salary");
});
