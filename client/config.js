System.config({
  "paths": {
    "*": "*.js",
    "app/*": "js/*.js",
    "github:*": "lib/github/*.js",
    "npm:*": "lib/npm/*.js",
    "express-foundation-template/*": "js/*.js"
  },
  "transpiler": "6to5"
});

System.config({
  "map": {
    "foundation": "github:zurb/bower-foundation@5.5.1",
    "jquery": "github:components/jquery@2.1.3"
  }
});

