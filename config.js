System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "es6-shim": "npm:es6-shim@0.25.3",
    "jquery": "github:components/jquery@2.1.3",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.0"
    },
    "npm:es6-shim@0.25.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

