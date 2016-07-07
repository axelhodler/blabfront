'use strict';

describe('LogoutButton', function () {
  var $compile,
    scope,
    logoutServiceSpy;

  beforeEach(function() {
    module('blab');
    module('templates');
  });

  beforeEach(module(function($provide) {
    logoutServiceSpy = { logout: {}};
    spyOn(logoutServiceSpy, 'logout');
    $provide.value('LogoutService', logoutServiceSpy);
  }));

  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    scope = _$rootScope_.$new();
  }));

  it('can log out', function () {
    var element = $compile('<div blab-logout-button></div>')(scope);

    scope.$digest();

    expect(logoutServiceSpy.logout).toHaveBeenCalled();
  });
});