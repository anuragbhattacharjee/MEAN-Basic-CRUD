import { MytasklistPage } from './app.po';

describe('mytasklist App', () => {
  let page: MytasklistPage;

  beforeEach(() => {
    page = new MytasklistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
