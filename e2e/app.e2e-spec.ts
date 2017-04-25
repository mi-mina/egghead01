import { Egghead01Page } from './app.po';

describe('egghead01 App', () => {
  let page: Egghead01Page;

  beforeEach(() => {
    page = new Egghead01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
