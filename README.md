# express-foundation-template

Starter template for a [Foundation](http://foundation.zurb.com/) based site running on [Express](http://expressjs.com/) (Node / io.js).

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/lyphtec/express-foundation-template?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Overview

This is a starter / skeleton / boilerplate template for a Foundation site running on top of Express as the backend server technology.  The initial demo layout is based on the [portfolio theme](http://foundation.zurb.com/templates/portfolio-theme.html) as demonstrated on Foundation's [HTML Templates](http://foundation.zurb.com/templates.html) page.

It allows you to quickly setup a starting Foundation based site with reasonable defaults as well as typical server-side configurations when building Express-based sites.

Sample site running on [Azure Websites](http://azure.microsoft.com/en-us/services/websites/) - [http://express-foundation-template.azurewebsites.net](http://express-foundation-template.azurewebsites.net)

You can also
[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/) yourself.


## Requirements

This uses [jspm](http://jspm.io/) as the browser package manager and [gulp](http://gulpjs.com/) for build automation during development so you should have these installed globally

```bash
npm install -g jspm
npm install -g gulp
```

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
  server/views/layout.vash    - (main site structure)
  server/views/markdown.vash  - (partial template that serves Markdown files via markdown-serve)
  client/scss/app.scss        - (main Sass file used by site)
  client/js/*.js              - (site Javascript files - ES6 supported & recommended!)
  content/*.md                - (put your site content Markdown files here - it will be served up my markdown-serve. hint: symbolically link this to a folder on DropBox!)
  package.json                - (name, author, homepage, version..)
  common/common.js            - (header details that gets injected into compiled css & js on gulp build)
  README.md                   - (what you are currently reading!)
  ```

- `gulp` (default command) - builds, runs nodemon ([gulp-nodemon](https://github.com/JacksonGariety/gulp-nodemon)), then [BrowserSync](http://www.browsersync.io/), and should automatically serve up site at [http://localhost:3000](http://localhost:3000).

## Notable Features

### Client-side

- [jspm](http://jspm.io/) for browser package management
- [ES6 support](https://github.com/lukehoban/es6features) (since we are using jspm) - recommended way of writing client-side Javascript.
- [Sass](http://www.sass-lang.com/) (SCSS to be exact) via [gulp-sass](https://github.com/dlmanning/gulp-sass) based on Foundation's [libsass workflow](http://foundation.zurb.com/docs/sass.html)

### Server-side

- [Vash](https://github.com/kirbysayshi/vash) as default view-engine in Express
- [markdown-serve](http://lyphtec.github.io/markdown-serve/) for serving of website content stored as Markdown
- [winston](https://github.com/winstonjs/winston) as logging framework. Includes a custom [logger](https://github.com/lyphtec/express-foundation-template/blob/master/server/logger.js) that logs each log type in a separate file per day in the `logs` folder.

### Development

- [Gulp](http://gulpjs.com/) tasks:
  - *default* (i.e. `gulp` without any arguments) - builds, runs nodemon, BrowserSync, starts up browser pointing to [https://localhost:3000](https://localhost:3000), and watches for changes
  - *watch* - same as `default` but without the `build` step
  - *build* - removes `/client/css/*` & `/client/app*` files, then runs `css` task to compile `/client/scss/app.scss` & minify resulting CSS file to `/client/css/app.min.css`, also runs the `js` task to transpile as single bundled ES5 `/client/app.js` file & minifies to `/client/app.min.js`
- [BrowserSync](http://www.browsersync.io/) - automatic browser reloads when changes are detected during development


## Folder Structure

```
+---client      - ("public" site root)
|   +---css     - (compiled SCSS destination - shouldn't require changes directly to files in this folder)
|   +---images  - (client-side images used in website)
|   +---js      - (client-side Javascript - ES6 modules FTW!)
|   +---lib     - (jspm_modules folder - only used during development)
|   +---scss    - (source SCSS files - gets compiled into /client/css folder)
+---common      - (shared server & client Javascript files)
+---content     - (Markdown site content files - used by markdown-serve)
+---logs        - (server log files goes here)
+---server      - (Express related server files)
    +---routes
    +---views   - (Vash views)

```

### Other Notable Files

- `web.config` - For production hosting with [iisnode](https://github.com/tjanczuk/iisnode) on Windows or Azure Websites (not used on Linux). Refer to this [cheat sheet](http://microsoftazurewebsitescheatsheet.info/) for some useful options when hosting on Azure.
- `common/common.js` - Used by the gulp task in bundling & minifying CSS/JS files to inject header information. Change this to your details.


## Production Deployment

For production environment, a [self-executing bundle](https://github.com/jspm/jspm-cli/wiki/Production-Workflows#creating-a-self-executing-bundle) is created by transpiling into a single ES5 JS file (`/client/app.min.js`).  This file is referenced in the `/server/views/layout.vash` layout view and will be used when `NODE_ENV=production`.

It is assumed that the contents of the repo will be deployed on a server that doesn't have `jspm` or `gulp` available so no gulp tasks will be run after deployment on the target server - thus no bundling or minifying.  All jspm packages & npm dev dependencies will not be installed (equivalent to `npm install --production`). Therefore, it is best to run `gulp build` to update all CSS & JS resources before pushing to production.


## License

(The MIT License)

Copyright &copy; 2015 Nguyen Ly

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
