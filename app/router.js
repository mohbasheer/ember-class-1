import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', {path:"/pageone"}, function() {
    this.route('details');
  });

  ///
});

export default Router;
