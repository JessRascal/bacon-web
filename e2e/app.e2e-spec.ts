import { BaconWebPage } from './app.po';

describe('bacon-web App', () => {
  let page: BaconWebPage;

  beforeEach(() => {
    page = new BaconWebPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
