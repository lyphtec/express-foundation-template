System.config({
  "transpiler": "6to5",
  "paths": {
    "*": "*.js",
    "app/*": "js/*.js",
    "github:*": "lib/github/*.js",
    "npm:*": "lib/npm/*.js",
    "express-foundation-template/*": "js/*.js"
  }
});

System.config({
  "map": {
    "fastclick": "npm:fastclick@1.0.6",
    "foundation": "github:zurb/bower-foundation@5.5.1",
    "modernizr": "github:Modernizr/Modernizr@2.8.3"
  }
});

