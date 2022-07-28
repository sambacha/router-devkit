const contractListPromise = import("../artifacts/_contracts.json");
// @ts-ignore
const externalContractsPromise = import("../artifacts/external_contracts");

export const loadAppContracts = async () => {
  const config = {};
  config.deployedContracts = (await contractListPromise).default ?? {};
  config.externalContracts = (await externalContractsPromise).default ?? {};
  return config;
};