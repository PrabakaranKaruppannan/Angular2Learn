import { Angular2StartPage } from './app.po';

describe('angular2-start App', () => {
  let page: Angular2StartPage;

  beforeEach(() => {
    page = new Angular2StartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
