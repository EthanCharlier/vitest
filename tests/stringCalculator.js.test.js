import { expect, it, describe } from 'vitest'
import { add } from '../stringCalculator'

describe('test of function add', () => {

    // 1
    it('returns 0 for empty string', () => {
      expect(add('')).toBe(0)
    })
    it('returns 1 for "1" string', () => {
      expect(add('1')).toBe(1)
    })
    it('returns 3 for "1,2" string', () => {
      expect(add('1,2')).toBe(3)
    })

    // 2
    it('returns 12 for "1,2,3,6" string', () => {
      expect(add('1,2,3,6')).toBe(12)
    })

    // 3
    it('returns 6 for "1\\n2,3" string', () => {
      expect(add('1\n2,3')).toBe(6)
    })
    it('returns 1 for "1,\\n" string', () => {
      expect(add('1,\n')).toBe(1)
    })

    // 4
    it('returns 1 for "//;\\n1;2" string', () => {
      expect(add('//;\n1;2')).toBe(3)
    })

    // 5
    it('returns Negatives not allowed: -1 for "//,\\n6,-1" string', () => {
      expect(() => add('//,\n6,-1')).toThrow('Negatives not allowed: -1');
    })

    // 6
    it('returns Negatives not allowed: -1 for "//,\\n6,-1,3,6,-7" string', () => {
      expect(() => add('//,\n6,-1,3,6,-7')).toThrow('Negatives not allowed: -1,-7');
    })

    // 7
    it('returns 3 for "1\\n2,1002" string', () => {
      expect(add('1\n2,1002')).toBe(3)
    })

    // 8
    it('returns 6 for "//[***]\\n1***2***3" string', () => {
      expect(add('//[***]\n1***2***3')).toBe(6)
    })

    // 9
    it('returns 6 for "//[*][%]\\n1*2%3" string', () => {
      expect(add('//[*][%]\n1*2%3')).toBe(6)
    })

    // 10
    it('returns 6 for "//[**][%%]\\n1**2%%3" string', () => {
      expect(add('//[**][%%]\n1**2%%3')).toBe(6)
    })
})
