import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
// import { PortisConnector } from '@web3-react/portis-connector';
// import { FortmaticConnector } from './Fortmatic';
import { NetworkConnector } from './NetworkConnector';

const REACT_APP_NETWORK_URL = process.env.REACT_APP_NETWORK_URL;
// const FORMATIC_KEY = process.env.REACT_APP_FORTMATIC_KEY
// const PORTIS_ID = process.env.REACT_APP_PORTIS_ID

export const NETWORK_CHAIN_ID: number = parseInt(process.env.REACT_APP_CHAIN_ID ?? '1');
// export const BSC_CHAIN_ID: number = parseInt(process.env.BSC_CHAIN_ID ?? '56');

if (typeof REACT_APP_NETWORK_URL === 'undefined') {
  throw new Error(`REACT_APP_NETWORK_URL must be a defined environment variable`);
}

export const network = new NetworkConnector({
  urls: { [NETWORK_CHAIN_ID]: REACT_APP_NETWORK_URL, 56: 'https://bsc-dataseed1.binance.org/' },
  defaultChainId: 1
});

let networkLibrary: Web3Provider | undefined;
export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? new Web3Provider(network.provider as any));
}

export const injected = new InjectedConnector({
  supportedChainIds: [1, 56],
});

// mainnet only
export const walletconnect = new WalletConnectConnector({
  supportedChainIds: [1, 56],
});

// mainnet only
// export const fortmatic = new FortmaticConnector({
//   apiKey: FORMATIC_KEY ?? '',
//   chainId: 1
// })

// mainnet only
// export const portis = new PortisConnector({
//   dAppId: PORTIS_ID ?? '',
//   networks: [1]
// })

// mainnet only
export const walletlink = new WalletLinkConnector({
  url: REACT_APP_NETWORK_URL,
  appName: 'Swap',
  // appLogoUrl: '',
});
