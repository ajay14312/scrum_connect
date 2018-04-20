import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-weather h2')).getText();
  }

  getPlaceHolder() {
    return element(by.css('[type="button"]'));
  }

  setInputValue() {
    return element(by.css('[type="text"]')).sendKeys('London,UK');
  }

  getTrElementData() {
    return element.all(by.tagName('td')).getText();
  }
}
