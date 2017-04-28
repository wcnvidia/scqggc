import { OappPage } from './app.po';

describe('oapp App', () => {
  let page: OappPage;

  beforeEach(() => {
    page = new OappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
