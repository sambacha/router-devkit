export default (bytecode: string | any[]) => {
  // Add a case to check whether or not the bytecode is valid hex
  if (!bytecode.length % 2) {
    throw Error('Invalid bytecode')
  }
  let pcs = []
  bytecode = bytecode.slice(2, bytecode.length) 
  for (let i = 0; i < bytecode.length; i += 2) {
    let opcode = convertOpcode(bytecode.slice(i, i + 2))
    // FIXME - Add logic to handle invalid opcodes
    pcs.push(i / 2)
    if (opcode > 95 && opcode < 128) {
      i += 2 * (opcode - 95)
    }
  }
  return pcs
}

export function isHex(bytecode: string | string[] | any) {
  if (bytecode[0] !== '0' || bytecode[1] !== 'x' || bytecode.length % 2 !== 0) {
    return false
  }
  for (let i = 2; i < bytecode.length; i++) {
    if (toNibble(bytecode.charCodeAt(i)) == -1) {
      return false
    }
  }
  return true
}

export function toNibble(ascii) {
  if (ascii > 47 && ascii < 58) {
    return ascii - 48
  } else if (ascii > 96 && ascii < 123) {
    return ascii - 87
  } else {
    return -1
  }
}

export function convertOpcode(op: string | any | any[]) {
  return toNibble(op.charCodeAt(0)) * 16 + toNibble(op.charCodeAt(1)) 
}