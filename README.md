# Neighborhood-drawing-tool

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

At MAPC the Knowplace API lives on Heroku and the Knowplace client lives on live.mapc.org. In order to deploy the client you should clone this repo, and then edit `config/environment.js` to point to the DNS address of the KnowPlace API. Typically this is `ENV.host = "http://api.knowplace.us"` and that address can be changed to point to whatever server the KnowPlace API can be deployed to via GoDaddy by contacting `ithelp@mapc.org`. After building the app someone with appropriate server access can deploy it by using rsync: `rsync -r dist/ knowplace-client@live.mapc.org:/var/www/knowplace-client`. 

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

