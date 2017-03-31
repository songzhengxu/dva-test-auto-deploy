import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import App from '../src/components/App';

function shallowRender(Component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component/>);
  return renderer.getRenderOutput();
}

describe('Shallow Rendering', function () {
  it('App\'s title tag should is h1', function () {
    const app = shallowRender(App);
    expect(app.props.children.type).to.equal('h1');
  });
});
