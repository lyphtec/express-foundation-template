# express-foundation-template

Starter template for a [Foundation](http://foundation.zurb.com/) based site running on [Express](http://expressjs.com/) (Node / io.js).


## Overview

This is a starter / skeleton / boilerplate template for a Foundation site running on top of Express as the backend server technology.  The template is based on the [portfolio theme](http://foundation.zurb.com/templates/portfolio-theme.html) as demonstrated on Foundation's [HTML Templates](http://foundation.zurb.com/templates.html) page.

It allows you to quickly setup a starting Foundation based site with reasonable defaults as well as typical server-side configurations when building Express-based sites.

It uses [jspm](http://jspm.io/) as the browser package manager and assumes you have it installed globally, i.e. `npm install -g jspm`


## How to use

- Clone this repo:

  ```
  git clone https://github.com/lyphtec/express-foundation-template <your-site-name>
  ```

- Install packages:

  ```bash
  cd <your-site-name>
  npm install
  jspm install
  ```

- (Optional) Remove git bindings as you typically would want to push to your own repo.  Alternatively, you can have this upstream repo on a separate branch if you are interested in tracking changes.

  ```bash
  rm -rf .git
  ```

- Make changes! Typically, the following files:

  ```
  * server/views/layout.vash    - (main site structure)
  * server/views/markdown.vash  - (partial template that serves Markdown files via markdown-serve)
  * client/scss/app.scss        - (main Sass file used by site)
  * client/js/*.js              - (site Javascript files - ES6 supported & recommended!)
  * content/*.md                - (put your site content Markdown files here - it will be served up my markdown-serve. hint: symbolically link this to a folder on DropBox!)
  ```

## Notable Features

### Client-side

- [jspm](http://jspm.io/) for browser package management
- [ES6 support](https://github.com/lukehoban/es6features) (since we are using jspm) - recommended way of writing client-side Javascript.
- Sass (SCSS to be exact)

### Server-side

- [Vash](https://github.com/kirbysayshi/vash) as default view-engine in Express
- [markdown-serve](http://lyphtec.github.io/markdown-serve/) for website content stored as Markdown
- [winston](https://github.com/winstonjs/winston) as logging framework. Includes a custom [logger](https://github.com/lyphtec/express-foundation-template/blob/master/server/logger.js) that logs each log type in a separate file in the `logs` folder.

### Development

- [Gulp](http://gulpjs.com/)
- [BrowserSync](http://www.browsersync.io/) - automatic browser reloads when changes are detected during development


## Folder Structure

```
+---client      - ("public" site root)
|   +---css     - (compiled SCSS destination - shouldn't require changes directly to files in this folder)
|   +---images  - (client-side images used in website)
|   +---js      - (client-side Javascript)
|   +---lib     - (jspm_modules folder)
|   +---scss    - (source SCSS files - gets compiled into /client/css folder)
+---common      - (shared server & client Javascript files)
+---content     - (Markdown site content files - used by markdown-serve)
+---logs        - (server log files goes here)
+---server      - (Express related server files)
    +---routes
    +---views   - (Vash views)

```

### Other Notable Files

- `web.config` - For production hosting with [iisnode](https://github.com/tjanczuk/iisnode) on Windows (not used on Linux)
- `common/common.js` - Used by the gulp task in bundling & minifying CSS/JS files to inject header information. Change this to your details.


## Miscellaneous Notes

The Foundation package on the [jspm registry](https://github.com/jspm/registry/blob/master/package-overrides/github/zurb/bower-foundation%405.0.2.json) is a bit outdated and does not include the Sass source files. While [this pull request](https://github.com/jspm/registry/pull/177) is awaiting approval, you will need to do the following to install Foundation:

```bash
jspm install github:zurb/bower-foundation -o "{ main: 'js/foundation/foundation', shim: { 'js/foundation/foundation.*': './foundation', 'js/foundation/foundation': ['jquery', '../vendor/modernizr', '../vendor/fastclick'] }, ignore: [], buildConfig: { uglify: true } }" --force
```

## License

(The MIT License)

Copyright &copy; 2015 Nguyen Ly `<lyphtec [at] gmail [dot] com>`

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
