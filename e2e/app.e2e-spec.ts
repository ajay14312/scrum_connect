import { AppPage } from './app.po';

import { browser, by } from 'protractor';

describe('my-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('24 hours weather forecast');
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getPlaceHolder().getText()).toEqual('Search');
  });

  it('should display welcome message', () => {
    page.navigateTo();
    page.setInputValue();
    browser.pause();
    browser.pause();
    page.getPlaceHolder().click();
    var aj = page.getTrElementData();
    expect(aj.get(0).getText()).toEqual('London');
    expect(aj.get(1).getText()).not.toEqual('25.89');
  });
});
