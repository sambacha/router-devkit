import { Interface } from '@ethersproject/abi'
import invariant from 'tiny-invariant'

public static encodeCallPositionManager(calldatas: string[]): string {
  invariant(calldatas.length > 0, 'NULL_CALLDATA')

  if (calldatas.length == 1) {
    return ApproveAndCall.INTERFACE.encodeFunctionData('callPositionManager', calldatas)
  } else {
    const encodedMulticall = NonfungiblePositionManager.INTERFACE.encodeFunctionData('multicall', [calldatas])
    return ApproveAndCall.INTERFACE.encodeFunctionData('callPositionManager', [encodedMulticall])
  }
}