/*!
 * newrelic-timing v0.4.0 - Integrates Single Page Apps with NewRelic's Real User Monitoring
 * Copyright (c) 2014 Andres Bravo <andresbravog@gmail.com> - https://github.com/andresbravog/newrelic-timing
 * License: MIT
 */

(function(Backbone, NewrelicTiming, _) {
  var newrelicTiming = new NewrelicTiming();

  Backbone.Router.prototype.before = function () {
    newrelicTiming.mark('navStart');
  };
  Backbone.Router.prototype.after = function () {
    newrelicTiming.mark('domLoaded');
  };

  Backbone.Router.prototype.route = function (route, name, callback) {
    if (!_.isRegExp(route)) {
      route = this._routeToRegExp(route);
    }
    if (_.isFunction(name)) {
      callback = name;
      name = '';
    }
    if (!callback) {
      callback = this[name];
    }

    var router = this;

    Backbone.history.route(route, function(fragment) {
      var args = router._extractParameters(route, fragment);

      router.before.apply(router, arguments);
      callback && callback.apply(router, args);
      router.after.apply(router, arguments);

      router.trigger.apply(router, ['route:' + name].concat(args));
      router.trigger('route', name, args);
      Backbone.history.trigger('route', router, name, args);
    });
    return this;
  };
})(window.Backbone, window.NewrelicTiming, window._);
