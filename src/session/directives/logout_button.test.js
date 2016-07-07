'use strict';

describe('LogoutButton', function () {
  var $compile,
    scope,
    logoutServiceSpy;

  beforeEach(module('blab'));

  beforeEach(module(function($provide) {
    logoutServiceSpy = { logout: {}};
    spyOn(logoutServiceSpy, 'logout');
    $provide.value('LogoutService', logoutServiceSpy);
  }));

  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    scope = _$rootScope_.$new();
  }));

  it('exits', function () {
    var element = $compile('<div blab-logout-button></div>')(scope);

    scope.$digest();

    expect(element.html()).not.toBe('');
  });

  it('can log out', function () {
    var element = $compile('<div blab-logout-button></div>')(scope);

    scope.$digest();

    expect(logoutServiceSpy.logout).toHaveBeenCalled();
  });
});