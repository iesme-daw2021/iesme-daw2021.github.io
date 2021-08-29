const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
require('regenerator-runtime');

describe('Main page (index)', function () {
  let dom;

  beforeAll(async () => {
    const file = path.resolve(__dirname, '../docs/index.html');

    try {
      dom = await JSDOM.fromFile(file);
    } catch (error) {
      console.log(error);
    }
  });

  it('Title is DWEC', function () {
    expect(dom.window.document.querySelector('h1').innerHTML).toBe('2021 DWEC');
  });

  it('button exists', function () {
    expect(dom.window.document.getElementsByClassName('button')).toBeTruthy();
  });
});
