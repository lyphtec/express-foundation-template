System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "app/*": "js/*.js",
    "github:*": "lib/github/*.js",
    "npm:*": "lib/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel@4.7.16",
    "babel-runtime": "npm:babel-runtime@4.7.16",
    "fastclick": "npm:fastclick@1.0.6",
    "foundation": "github:zurb/bower-foundation@5.5.1",
    "jquery": "github:components/jquery@2.1.3",
    "modernizr": "github:Modernizr/Modernizr@2.8.3",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@4.7.16": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

