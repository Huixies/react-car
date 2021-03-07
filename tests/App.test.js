import React from 'react';
import App from '../src/App';
import renderer from 'react-test-renderer';

test('测试App的渲染', () => {
  const app = renderer.create(
    <App />,
  );
  let tree = app.toJSON();

  expect(tree.children[0]).toBe('5');
});
