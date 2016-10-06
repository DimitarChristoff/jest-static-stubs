# jest-static-stubs

Stubbing imported assets (typically, in react components / ES6) so they work in JEST.

## why?

Sometimes, you don't want to use harmony-reflect or cannot (node 4) or you need to test onload behaviour handlers. These stubs will return their content type's equivalent of `blank.gif`, not just an empty string.

## the use case

If you have a component that does a direct import of an image, when testing it with Jest, it will break. So... you need to stub it.

```js
import React from 'react';
import Logo from './logo.png';

export default class Foo extends React.Component {

  handleLoad(){
    this.ready = true;
    console.log(this.logo.src);
  }

  render(){
    return <div>
      <img src={Logo} onLoad={::this.handleLoad} ref={logo => this.logo = logo} />
    </div>;
  }
}
```

Testing then is just transparent:

```
import React from 'react';
import renderer from 'react-test-renderer';
import Foo from '../src/foo';

jest.mock('react-dom');

describe('component tests >', () => {

  it('renders correctly', () => {
    const tree = renderer.create(<Foo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
```

The snapshot will just have something like
```js
exports[`component tests > renders correctly 1`] = `
<div>
  <img
    onLoad={[Function bound handleLoad]}
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==" />
</div>
`;
```

## how to use

```sh
$ npm i jest-static-stubs -D
```

Edit `package.json` and in the `jest` section, add your mappers:

```json
{
    "jest": {
        "moduleNameMapper": {
            "^.+\\.(jpg|jpeg)$": "jest-static-stubs/jpg",
            "^.+\\.gif$": "jest-static-stubs/gif",
            "^.+\\.png$": "jest-static-stubs/png",
            "^.+\\.(eot|otf|svg|ttf|woff|woff2|mp3|m4a|aac|oga)$": "identity-obj-proxy",
        }
    }
}
```

## types

 - jpg, gif, png
 - wav, mid
 - webm, mkv, flv, avi, mp4
 - swf

