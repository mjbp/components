const base = require('../../tools/jest/config.base.js');
const pack = require("./package");

module.exports = {
  ...base,
  transform: {
      '^.+\\.js$': '../../tools/jest/babel-jest-wrapper.js'
  },
  displayName: pack.name,
  name: pack.name,
  setupFiles: ['./jest.setup.js'],
  globals: {
    tid: 'UA-141774857-1'
  }
};