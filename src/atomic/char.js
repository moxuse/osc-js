import { isInt } from '../common/utils'

import Atomic from '../atomic'

/**
 * 32-bit big-endian two's complement carctor OSC Atomic Data Type
 */
export default class AtomicChar extends Atomic {
  /**
   * Create an AtomicChar instance
   * @param {number} [value] Initial integer value
   */
  constructor(value) {
    if (value && !isInt(value)) {
      throw new Error('OSC AtomicInt32 constructor expects value of type number')
    }

    super(value)
  }

  /**
   * Interpret the given number as packed binary data
   * @return {Uint8Array} Packed binary data
   */
  pack() {
    return super.pack('setInt32', 4)
  }

  /**
   * Unpack binary data from DataView and read a Int32 number
   * @param {DataView} dataView The DataView holding the binary representation of the value
   * @param {number} [initialOffset=0] Offset of DataView before unpacking
   * @return {number} Offset after unpacking
   */
  unpack(dataView, initialOffset = 0) {
    return super.unpack(dataView, 'getInt32', 4, initialOffset)
  }
}
