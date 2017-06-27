import { SparksNg2FrontendPage } from './app.po';

describe('sparks-ng2-frontend App', () => {
  let page: SparksNg2FrontendPage;

  beforeEach(() => {
    page = new SparksNg2FrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
