import { XpcPwaDemoPage } from './app.po';

describe('xpc-pwa-demo App', () => {
  let page: XpcPwaDemoPage;

  beforeEach(() => {
    page = new XpcPwaDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
