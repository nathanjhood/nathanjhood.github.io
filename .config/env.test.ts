import * as test from "node:test";

test.describe('env.ts', { timeout: 20000 }, (suiteContext) => {
  test.it('should do something', { timeout: 20000 }, (testContext) => {
    test.todo('the test', { timeout: 20000 }, (testContext) => {
    })
  })
})
