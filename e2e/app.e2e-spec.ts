import { FinanceTrackUiPage } from './app.po';

describe('finance-track-ui App', () => {
  let page: FinanceTrackUiPage;

  beforeEach(() => {
    page = new FinanceTrackUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
