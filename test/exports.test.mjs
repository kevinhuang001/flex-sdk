import test from 'node:test'
import assert from 'node:assert/strict'
import { FiexUiClient } from '../dist/index.js'
import { attachFiexPanel } from '../dist/host.js'
test('browser SDK exposes the contract without loading Tauri or Node runtime', () => {
  assert.equal(typeof FiexUiClient, 'function')
  assert.equal(typeof attachFiexPanel, 'function')
})
