describe('Controller', function () {
  before(function() {
    this.controller = new Analytics.Controller();
  });

  after(function() {
    delete this.controller;
  });

  describe('constructor', function () {
    it('should contain a data property', function () {
      expect(this.controller).to.include.keys('data');
    });
  });

  describe('initialize', function() {
    before(function() {
      this.controller.initialize();
      this.searchBtn = document.querySelector('#search-btn');
      this.searchBtn.click();

      this.stubAddEventListener = sinon.stub(this.searchBtn, 'click');
    });

    after(function() {
      this.stubAddEventListener.restore();
    });

    it('should setup global paceOptions', function() {
      expect(window.paceOptions).to.be.exist;
      expect(window.paceOptions).to.have.property('target', '.progress-wrapper');
      expect(window.paceOptions).to.have.property('restartOnRequestAfter', 10);
    });

    it('should set hash url when default search button click', function() {
      expect(this.stubAddEventListener.called).to.be.true;
    });

    it('should attach "hashchange" event to window', function() {
      expect(window.location.hash).to.equal('#push_notification');
    });
  });

});