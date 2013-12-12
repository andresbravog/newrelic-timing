NewRelic Timing
===============

Integrates Single Page Apps with NewRelic's Real User Monitoring

### Installing

Make sure you have bower. Also see http://bower.io/

  npm install -g bower

then run:

  bower install newrelic-timing

### Usage

- `newrelic-timing.js` exposes `window.newrelicTiming` that does all the work.
- `newrelic-timing-angular.js` hooks `newrelicTiming` into angular router state changes.

Please take a look at `newrelic-timing-angular.js` as an example of how to integrate this into your framework.

### Changelog

#### 0.1.0 (November 27, 2013)

Initial Release