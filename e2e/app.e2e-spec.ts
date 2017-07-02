import { FullcalendarAppAg4Page } from './app.po';

describe('fullcalendar-app-ag4 App', () => {
  let page: FullcalendarAppAg4Page;

  beforeEach(() => {
    page = new FullcalendarAppAg4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
