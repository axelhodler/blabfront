'use strict';

describe('LoginController', function() {
  var subject,
    loginSpy;

  beforeEach(module('blab'));

  beforeEach(inject(function (_$controller_, _Authentication_, _Login_) {
    loginSpy = _Login_;
    spyOn(loginSpy, 'login');

    subject = _$controller_('LoginController', {
      'Login': loginSpy
    });
    subject.username = 'username';
    subject.password = 'pw';
  }));

  it('defers to login', function () {
    subject.login();

    expect(loginSpy.login).toHaveBeenCalledWith('username', 'pw');
  });
});

