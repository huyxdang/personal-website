import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock(
  'react-router-dom',
  () => {
    const React = require('react');

    return {
      BrowserRouter: ({ children }) => <div>{children}</div>,
      Routes: ({ children }) => <>{React.Children.toArray(children)[0]}</>,
      Route: ({ element }) => element,
      NavLink: ({ children, className, to }) => (
        <a
          href={to}
          className={
            typeof className === 'function'
              ? className({ isActive: to === '/' })
              : className
          }
        >
          {children}
        </a>
      ),
    };
  },
  { virtual: true }
);

test('renders primary navigation', () => {
  render(<App />);
  expect(screen.getByText(/about/i)).toBeInTheDocument();
  expect(screen.getByText(/blog/i)).toBeInTheDocument();
});
