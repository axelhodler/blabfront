'use strict';

describe('LogoutButton', function () {
  var $compile,
    scope;

  beforeEach(module('blab'));


  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    scope = _$rootScope_.$new();
  }));

  it('exits', function () {
    var element = $compile('<div blab-logout-button></div>')(scope);

    scope.$digest();

    expect(element.html()).not.toBe('');
  });
});