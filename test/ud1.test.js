const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { sum } = require('../docs/scripts/operations');

let dom;

async function loadDOM(filename, jsfile) {
  let dom;
  const file = path.resolve(__dirname, filename);
  const options = {
    runScripts: 'dangerously',
    resources: 'usable',
  };

  try {
    dom = await JSDOM.fromFile(file, options);

    const systemJSContent = fs.readFileSync(require.resolve(jsfile), {
      encoding: 'utf-8',
    });
    let src = dom.window.document.createElement('script');
    src.textContent = systemJSContent;
    dom.window.document.body.appendChild(src);
  } catch (error) {
    console.log(error);
  }

  return dom;
}

describe('Unit 1', function () {
  beforeAll(
    async () => (dom = await loadDOM('../docs/ud1.html', '../docs/scripts/ud1'))
  );

  it('Title in Navigation Bar is Unit 1', function () {
    expect(dom.window.document.querySelector('span').innerHTML).toBe('Unit 1');
  });

  it('Sum function', function () {
    expect(sum(2, 3)).toBe(5);
  });

  it('Sum function in HTML', function () {
    expect(dom.window.document.querySelector('p')).toBeTruthy();
    expect(dom.window.document.querySelector('p').innerHTML).toBe('12');
  });
});
