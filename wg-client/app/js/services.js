define(['angular',
        'lodash'
], function (angular, _) {
  // todo put into constants module
  var APP_NAME = 'weigogo';

  var myAppServices = angular.module(APP_NAME+'.services', []);

  var USERS = [
    {
      name: 'alice',
      pass: 'password'
    },
    {
      name: 'bob',
      pass: 'password'
    }
  ];

  var TRIPS = [
    {
      depart: 'jackson',
      arrive: 'milan',
      date: new Date(),
      users: []
    },
    {
      depart: 'jackson',
      arrive: 'paris',
      date: new Date(),
      users: []
    }
  ];

  var CURR_USER_ID = null;

  var Trip = function () {};
  Trip.prototype.all = function () {
    return _.clone(TRIPS.map(function (trip, idx) {
      trip.id = idx;
      return trip;
    }), true);
  };
  Trip.prototype.get = function (id) {
    return _.clone(TRIPS[id], true);
  };
  Trip.prototype.addUser = function (trip, user) {
    TRIPS[trip.id].users.push(user.id);
  };
  var trip = new Trip();

  var User = function () {
    this.currId = null;
  };
  User.prototype.current = function () {
    console.log(CURR_USER_ID);
    if (CURR_USER_ID === null) {
      return null;
    }
    var user = _.clone(USERS[CURR_USER_ID], true);
    user.id = CURR_USER_ID;
    return user;
  };
  User.prototype.add = function (data) {
    var name = data.name;
    var pass = data.pass;
    var user = {};
    if (USERS.map(function (user) {return user.name;})
        .indexOf(name) !== -1) {
      return null;
    }
    user.name = name;
    user.pass = pass;
    USERS.push(user);
    return user;
  };
  User.prototype.signin = function (data) {
    var name = data.name;
    var pass = data.pass;
    var nameIdx = USERS.map(function (user) {return user.name;})
          .indexOf(name);
    if (nameIdx == -1) {
      return null;
    }
    var user = USERS[nameIdx];
    if (user.pass !== pass) {
      return null;
    }
    CURR_USER_ID = nameIdx;
    return user;
  };

  User.prototype._dumpState = function () {
    return {
      users: USERS,
      currId: CURR_USER_ID
    };
  };

  var user = new User();

  myAppServices.factory('Trip', function () {
    return trip;
  });

  myAppServices.factory('User', function () {
    return user;
  });

});
