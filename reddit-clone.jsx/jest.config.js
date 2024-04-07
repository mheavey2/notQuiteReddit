export default {
preset: 'vite-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.jsx?$": "vite-jest" 
    // process `*.jsx` files with `vite-jest`
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
    },
}
