module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['<rootDir>/(tests/unit/**/*.spec.(ts|tsx|js)|**/__tests__/*.(ts|tsx|js))']
  // snapshotSerializers: [
  //   'jest-serializer-vue'
  // ]
}
