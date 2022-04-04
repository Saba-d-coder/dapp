import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Genius',
  tokenName: 'Genius',
  tokenSymbol: 'GT',
  hiddenMetadataUri: 'ipfs://QmV3qtjYSEksw6WEALY4dnifEVXJo3fJaTCcKcgK111jJn/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.19,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.21,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.23,
    maxMintAmountPerTx: 20,
  },
  contractAddress: "0x0ef40C87Fa6C0B1bcdc49147eAd401c845882A3e",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
