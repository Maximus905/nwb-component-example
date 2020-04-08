import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

// import Example1 from "../src/components/Example1";
// import Example2 from "../src/components/Example2";
import {Example1, Example2} from '../src'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  test('displays a welcome message', () => {
    render(<Example1/>, node, () => {
      expect(node.innerHTML).toContain('Example1: Welcome to React components')
    })
  })
  test('displays a welcome message', () => {
    render(<Example2/>, node, () => {
      expect(node.innerHTML).toContain('Example2: Welcome to React components')
    })
  })
})
describe('jest demo test', () => {
  test('tes one', () => {
    let testVar = 1
    expect(testVar).toBe(1)
  })
})
test('jest test two', () => {
  expect(true).toBeTruthy()
})