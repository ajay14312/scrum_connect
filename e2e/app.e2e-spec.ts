import { AppPage } from './app.po';

import { browser, by } from 'protractor';

describe('my-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('24 hours weather forecast');
  });

  it('should display "Search"', () => {
    page.navigateTo();
    expect(page.getPlaceHolder().getText()).toEqual('Search');
  });

  it('should display "London"', () => {
    page.navigateTo();
    page.setInputValue();
    page.getPlaceHolder().click();
    let aj = page.getTrElementData();
    expect(aj.get(0).getText()).toEqual('London');
    expect(aj.get(1).getText()).not.toEqual('25.89');
  });
});
