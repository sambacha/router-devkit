/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace ERC20PermitEverywhere {
  export type PermitTransferFromStruct = {
    token: PromiseOrValue<string>;
    spender: PromiseOrValue<string>;
    maxAmount: PromiseOrValue<BigNumberish>;
    deadline: PromiseOrValue<BigNumberish>;
  };

  export type PermitTransferFromStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber
  ] & {
    token: string;
    spender: string;
    maxAmount: BigNumber;
    deadline: BigNumber;
  };

  export type SignatureStruct = {
    v: PromiseOrValue<BigNumberish>;
    r: PromiseOrValue<BytesLike>;
    s: PromiseOrValue<BytesLike>;
  };

  export type SignatureStructOutput = [number, string, string] & {
    v: number;
    r: string;
    s: string;
  };
}

export interface ERC20PermitEverywhereInterface extends utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "TRANSFER_PERMIT_TYPEHASH()": FunctionFragment;
    "currentNonce(address)": FunctionFragment;
    "executePermitTransferFrom(address,address,uint256,(address,address,uint256,uint256),(uint8,bytes32,bytes32))": FunctionFragment;
    "hashPermit((address,address,uint256,uint256),uint256)": FunctionFragment;
    "increaseNonce(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DOMAIN_SEPARATOR"
      | "TRANSFER_PERMIT_TYPEHASH"
      | "currentNonce"
      | "executePermitTransferFrom"
      | "hashPermit"
      | "increaseNonce"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TRANSFER_PERMIT_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentNonce",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "executePermitTransferFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      ERC20PermitEverywhere.PermitTransferFromStruct,
      ERC20PermitEverywhere.SignatureStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hashPermit",
    values: [
      ERC20PermitEverywhere.PermitTransferFromStruct,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseNonce",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TRANSFER_PERMIT_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executePermitTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hashPermit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseNonce",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ERC20PermitEverywhere extends BaseContract {
  contractName: "ERC20PermitEverywhere";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC20PermitEverywhereInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    TRANSFER_PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    currentNonce(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    executePermitTransferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      permit: ERC20PermitEverywhere.PermitTransferFromStruct,
      sig: ERC20PermitEverywhere.SignatureStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hashPermit(
      permit: ERC20PermitEverywhere.PermitTransferFromStruct,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { hash: string }>;

    increaseNonce(
      increaseAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  TRANSFER_PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  currentNonce(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  executePermitTransferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    permit: ERC20PermitEverywhere.PermitTransferFromStruct,
    sig: ERC20PermitEverywhere.SignatureStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hashPermit(
    permit: ERC20PermitEverywhere.PermitTransferFromStruct,
    nonce: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  increaseNonce(
    increaseAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    TRANSFER_PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    currentNonce(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executePermitTransferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      permit: ERC20PermitEverywhere.PermitTransferFromStruct,
      sig: ERC20PermitEverywhere.SignatureStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    hashPermit(
      permit: ERC20PermitEverywhere.PermitTransferFromStruct,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    increaseNonce(
      increaseAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    TRANSFER_PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    currentNonce(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executePermitTransferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      permit: ERC20PermitEverywhere.PermitTransferFromStruct,
      sig: ERC20PermitEverywhere.SignatureStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hashPermit(
      permit: ERC20PermitEverywhere.PermitTransferFromStruct,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseNonce(
      increaseAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TRANSFER_PERMIT_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentNonce(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executePermitTransferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      permit: ERC20PermitEverywhere.PermitTransferFromStruct,
      sig: ERC20PermitEverywhere.SignatureStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hashPermit(
      permit: ERC20PermitEverywhere.PermitTransferFromStruct,
      nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseNonce(
      increaseAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
