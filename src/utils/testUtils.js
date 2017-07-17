import React from 'react';
import { StaticRouter } from 'react-router';

export function testRouter(component) {
  const context = {};
  const location = './';

  return (
    <StaticRouter location={location} context={context}>
      {component}
    </StaticRouter>
  );
}
