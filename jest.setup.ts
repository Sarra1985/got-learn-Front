import '@testing-library/jest-dom';
window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    media: '',
    onchange: null,
    addListener: function () { },
    removeListener: function () { },
    addEventListener: function () { },
    removeEventListener: function () { },
    dispatchEvent: function () { }
  };
};