import { CuiabanidadeWebPage } from './app.po';

describe('cuiabanidade-web App', function() {
  let page: CuiabanidadeWebPage;

  beforeEach(() => {
    page = new CuiabanidadeWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
