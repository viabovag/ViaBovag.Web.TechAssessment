global.mockIntersectionObserver = () => {
  return jest.fn().mockImplementation(() => ({
    observe: () => null,
    disconnect: () => null,
  }));
};

jest.mock('next/router', () => require('next-router-mock'));
