import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import App from '../../src/app/App';

describe('App Component Test Suite', () => {
  it('should render', () => {
    const component = render(<App />);
    expect(component.getByText('Hello World')).toBeDefined();
  });
});
