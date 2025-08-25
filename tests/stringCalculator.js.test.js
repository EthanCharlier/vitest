import { expect, it, describe } from 'vitest'
import { add } from '../stringCalculator'

describe('test of function add', () => {
    it('returns 0 for empty string', () => {
      expect(add('')).toBe(0)
    })
    it('returns 1 for "1" string', () => {
      expect(add('1')).toBe(1)
    })
    it('returns 3 for "1,2" string', () => {
      expect(add('1,2')).toBe(3)
    })

    it('returns 12 for "1,2,3,6" string', () => {
      expect(add('1,2,3,6')).toBe(12)
    })

    it('returns 6 for "1\n2,3" string', () => {
      expect(add('1\n2,3')).toBe(6)
    })
    it('returns 1 for "1,\n" string', () => {
      expect(add('1,\n')).toBe(1)
    })
})
