import { SisproTerminalPage } from './app.po';

describe('sispro-terminal App', function() {
  let page: SisproTerminalPage;

  beforeEach(() => {
    page = new SisproTerminalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
