exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/spec.js'],
  // baseUrl: 'http://localhost:8000',
  maxSessions: 1,
  multiCapabilities: [
    { browserName: 'chrome' }
  ],
}