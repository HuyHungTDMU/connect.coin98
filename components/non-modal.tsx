import { Coin98WalletAdapter } from '@coin98t/wallet-adapter-coin98';
import { FinWalletAdapter } from '@coin98t/wallet-adapter-fin';
import { KeplrWalletAdapter } from '@coin98t/wallet-adapter-keplr';
import { MetaMaskWalletAdapter } from '@coin98t/wallet-adapter-metamask';
import { PhantomWalletAdapter } from '@coin98t/wallet-adapter-phantom';
import { CompassWalletAdapter } from '@coin98t/wallet-adapter-compass';
import { LeapWalletAdapter } from '@coin98t/wallet-adapter-leap';
import { BLOCKCHAINS_DATA, CHAINS_ID, useWallet, WalletProvider, WALLETS_NAME } from '@coin98t/wallet-adapter-react';
import { TypeConnectError } from '@coin98t/wallet-adapter-base';
import Head from 'next/head';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { assets, chains } from 'chain-registry';
import { chainRegistryChainToKeplr } from '@chain-registry/keplr';

export default function Home() {
  // const enables = [BLOCKCHAINS_DATA.cosmos, BLOCKCHAINS_DATA.ethereum, BLOCKCHAINS_DATA.solana];

  // const wallets = [
  //   Coin98WalletAdapter,
  //   MetaMaskWalletAdapter,
  //   KeplrWalletAdapter,
  //   FinWalletAdapter,
  //   PhantomWalletAdapter,
  //   CompassWalletAdapter,
  //   LeapWalletAdapter,
  // ];

  useEffect(() => {
    // const result = Object.values(CHAIN_DATA)
    //   .filter((item: any) => item.isWeb3)
    //   .map((item: any, idx: any) => {
    //     return (
    //       `export const ` +
    //       item.symbol +
    //       `: ChainInfoEVM  =` +
    //       `${JSON.stringify({
    //         id: idx,
    //         blockChainName: 'evm',
    //         name: item.name,
    //         chainId: item.chainId,
    //         imgUrl:
    //           'data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiPgo8dGl0bGU+YXBwX2V0aGVyZXVtX3BvdzwvdGl0bGU+CjxwYXRoIGQ9Ik0xMi43ODEgOS4wNjRsLTQuNzY2IDYuNzE3LTQuNzY0LTYuNzE3IDQuNzY0IDIuODE3IDQuNzY3LTIuODE3ek03LjY5NyA2LjUzMmMwLjA4OSAwLjA0NSAwLjE5IDAuMDcxIDAuMjk2IDAuMDcxIDAuMTA0IDAgMC4yMDItMC4wMjQgMC4yOS0wLjA2N2wxLjU1MyAyLjM5NGMtMC4xMiAwLjExOS0wLjE5NCAwLjI4NC0wLjE5NCAwLjQ2NiAwIDAuMTk0IDAuMDg1IDAuMzcgMC4yMTkgMC40ODlsLTEuODQ3IDEuMDkyLTEuODYxLTEuMWMwLjEwNy0wLjExNyAwLjE3My0wLjI3MyAwLjE3My0wLjQ0NCAwLTAuMTg3LTAuMDc5LTAuMzU2LTAuMjA0LTAuNDc2ek0xMC45NjcgNS4xNTRsMS44MSAzLjAwNi0xLjg0MSAxLjA4OGMtMC4wNTYtMC4yNDItMC4yNDUtMC40MzQtMC40ODYtMC40OTJsMC4xOC0zLjQzOGMwLjEyOS0wLjAyMSAwLjI0NS0wLjA4MCAwLjMzNy0wLjE2NXpNNS4wMjQgNS4yMTZjMC4wOTEgMC4wNjIgMC4xOTkgMC4xMDEgMC4zMTQgMC4xMTFsMC4xODEgMy40NjljLTAuMjIxIDAuMDUzLTAuMzk5IDAuMjE2LTAuNDcgMC40M2wtMS44LTEuMDY0ek04LjAxNCAwLjI1bDIuMjkgMy44MDRjLTAuMjU1IDAuMDkwLTAuNDM4IDAuMzMzLTAuNDM4IDAuNjE5IDAgMC4zMjIgMC4yMzIgMC41OTEgMC41MzkgMC42NDZsLTAuMTggMy40MjVjLTAuMDcyIDAuMDA4LTAuMTQyIDAuMDI3LTAuMjA1IDAuMDU3bC0xLjU1Ni0yLjM5N2MwLjExNC0wLjExOCAwLjE4NC0wLjI3OSAwLjE4NC0wLjQ1NiAwLTAuMzYyLTAuMjkzLTAuNjU2LTAuNjU1LTAuNjU2cy0wLjY1NSAwLjI5My0wLjY1NSAwLjY1NmMwIDAuMTc0IDAuMDY4IDAuMzMyIDAuMTc4IDAuNDVsLTEuNTggMi40MzZjLTAuMDYwLTAuMDI3LTAuMTI1LTAuMDQ0LTAuMTkyLTAuMDUybC0wLjE4Mi0zLjQ3NWMwLjI3OS0wLjA3NSAwLjQ4NC0wLjMzIDAuNDg0LTAuNjMzIDAtMC4yNS0wLjE0MS0wLjQ2OC0wLjM0Ny0wLjU3OWwyLjMxNi0zLjg0NHoiPjwvcGF0aD4KPC9zdmc+Cg==',
    //         chainName: item.name,
    //         nativeCurrency: {
    //           name: item.name,
    //           symbol: item.symbol,
    //           decimals: 18,
    //         },
    //         rpcUrls: [`${item.rpcURL}`],
    //       })}`
    //     );
    //   });
    // console.log('result', result);
  }, []);
  return (
    <>
      <Head>
        <title>ChiPoPo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <WalletProvider
        enables={enables}
        wallets={wallets}
        autoConnect
        onError={(error, adapter) => {
          console.log('error', error);
          console.log('adapter', adapter);
        }}
      > */}
      <Content />
      {/* </WalletProvider> */}
    </>
  );
}

export const Content = () => {
  const {
    publicKey,
    address,
    selectWallet,
    connected,
    disconnect,
    wallet,
    selectedBlockChain,
    selectedChainId,
    switchNetwork,
    signTypedData,
  } = useWallet();

  // const [walletId, setWalletId] = useState<any>(WALLETS_NAME.coin98Ether);
  const [currentChainId, setCurrentChainId] = useState<any>();
  // handle add chainCosmos
  const handleConnectWallet = useCallback(
    (walletName: string, chainId: string) => {
      selectWallet(walletName, chainId, async (error: any, typeError: TypeConnectError) => {
        if (typeError === 'network') {
          if (walletName === 'keplr_cosmos') {
            const chainRecords = chains.map((chain: any) => {
              const assetFined = assets.find((asset: any) => {
                return asset.chain_name === chain.chain_name;
              });
              if (assetFined) return { chain, assetFined };
              return { chain };
            });

            const chainInfo = chainRecords.find(chainRecord => chainRecord.chain.chain_id === chainId);
            const wallet = window.keplr;

            const suggestChain = chainRegistryChainToKeplr(
              chainInfo?.chain,
              chainInfo?.assetFined ? [chainInfo?.assetFined] : [],
            );

            if (wallet) {
              return await wallet.experimentalSuggestChain(suggestChain);
            }
            return;
          }
          if (walletName === 'metamask_ether') {
            const wallet = window.ethereum;

            return await wallet.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: chainId,
                  chainName: 'Binance Smart Chain Testnet',

                  nativeCurrency: {
                    name: 'BNB',
                    symbol: 'BNB', // 2-6 characters long
                    decimals: 18,
                  },
                  rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
                },
              ],
            });
          }
        }
        return;
      });
    },
    [wallet],
  );

  const handleSignTypedDataV4 = async () => {
    const msgParams = {
      domain: {
        chainId: selectedChainId as string,
        name: 'Ether Mail',
        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
        version: '1',
      },
      message: {
        contents: 'Hello, Bob!',
        from: {
          name: 'Cow',
          wallets: ['0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826', '0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF'],
        },
        to: [
          {
            name: 'Bob',
            wallets: [
              '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
              '0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57',
              '0xB0B0b0b0b0b0B000000000000000000000000000',
            ],
          },
        ],
      },
      primaryType: 'Mail',
      types: {
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          { name: 'verifyingContract', type: 'address' },
        ],
        Group: [
          { name: 'name', type: 'string' },
          { name: 'members', type: 'Person[]' },
        ],
        Mail: [
          { name: 'from', type: 'Person' },
          { name: 'to', type: 'Person[]' },
          { name: 'contents', type: 'string' },
        ],
        Person: [
          { name: 'name', type: 'string' },
          { name: 'wallets', type: 'address[]' },
        ],
      },
    };

    const res = await signTypedData(msgParams, 'v4');
  };

  const handleSignTypedData = async () => {
    const msgParams = [
      {
        type: 'string',
        name: 'Message',
        value: 'Hi, Alice!',
      },
      {
        type: 'uint32',
        name: 'A number',
        value: '1337',
      },
    ];

    const res = await signTypedData(msgParams, 'v1');
  };
  const handleSignTypedDataV3 = async () => {
    const msgParams = {
      types: {
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          { name: 'verifyingContract', type: 'address' },
        ],
        Person: [
          { name: 'name', type: 'string' },
          { name: 'wallet', type: 'address' },
        ],
        Mail: [
          { name: 'from', type: 'Person' },
          { name: 'to', type: 'Person' },
          { name: 'contents', type: 'string' },
        ],
      },
      primaryType: 'Mail',
      domain: {
        name: 'Ether Mail',
        version: '1',
        chainId: selectedChainId as string,
        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
      },
      message: {
        from: {
          name: 'Cow',
          wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
        },
        to: {
          name: 'Bob',
          wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
        },
        contents: 'Hello, Bob!',
      },
    };

    const res = await signTypedData(msgParams, 'v3');
  };
  useEffect(() => {
    (async () => {
      if (typeof window !== 'undefined') {
        //commonjs module.exports = default
        // const eruda = await import('eruda');
        // eruda.default.init();
        // const wallet = window.coin98.provider!;
        // const currentChainIdWallet = await wallet.request({ method: 'eth_chainId' });
        // setCurrentChainId(currentChainIdWallet);
      }
    })();
  }, []);

  // useEffect(() => {
  //   if (['0x89', '0x38', '0x1'].includes(currentChainId as string)) return setWalletId(WALLETS_NAME.coin98Ether);
  //   if (['atlantic-2'].includes(currentChainId as string)) return setWalletId(WALLETS_NAME.coin98Cosmos);
  //   return setWalletId(WALLETS_NAME.coin98Solana);
  // }, [currentChainId]);
  useEffect(() => {
    const eventSync = () => {
      console.log('change Data');
    };
    // window.addEventListener('compass_keystorechange', this._onKeyStoreChange);
    window.addEventListener('compass_keystorechange', eventSync);
  }, []);

  return (
    <div style={{ height: '100vh', padding: '20px', fontSize: '20px' }}>
      <h1 className="text-2xl text-black p-2">Test Function Page</h1>
      <div className="flex justify-end">
        <div>
          {!connected && (
            <button
              className="p-2.5 border-2 rounded-lg hover:bg-slate-300 hover:border-black duration-200 cursor-pointer"
              // onClick={() => handleConnectWallet(walletId, (currentChainId as any) ?? '0x1')}
              onClick={() => handleConnectWallet(WALLETS_NAME.coin98Ether, CHAINS_ID.binanceSmart)}
            >
              Connect Wallet
            </button>
          )}
        </div>
        <div className="flex items-center gap-4">
          <div>
            {address}
            {publicKey?.toBase58()}
          </div>
          {connected && (
            <div>
              <button
                className="p-2.5 border-2 rounded-lg hover:bg-slate-300 hover:border-black duration-200 cursor-pointer"
                onClick={disconnect}
              >
                Disconnect
              </button>
              <button
                className="p-2.5 border-2 ml-4 rounded-lg hover:bg-slate-300 hover:border-black duration-200 cursor-pointer"
                onClick={async () => {
                  const res = await switchNetwork(CHAINS_ID.binanceSmartTest, async (error: any) => {
                    {
                      const wallet = window.ethereum;

                      return await wallet.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                          {
                            chainId: CHAINS_ID.binanceSmartTest,
                            chainName: 'Binance Smart Chain Testnet',

                            nativeCurrency: {
                              name: 'BNB',
                              symbol: 'BNB', // 2-6 characters long
                              decimals: 18,
                            },
                            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
                          },
                        ],
                      });
                    }
                  });

                  console.log('res switch', res);
                }}
              >
                Switch chain EVM
              </button>
            </div>
          )}
        </div>
      </div>

      {connected && (
        <div>
          <div className="border-[2px] border-orange-600 rounded-3xl p-4 mt-6">
            <div>Network Id:{selectedChainId}</div>
            <div>BlockChain:{selectedBlockChain}</div>
          </div>

          <button
            className="p-2.5 border-2 rounded-lg hover:bg-slate-300 hover:border-black duration-200 cursor-pointer"
            // onClick={() => handleConnectWallet(walletId, (currentChainId as any) ?? '0x1')}
            onClick={() => handleSignTypedDataV4()}
          >
            SignTypeData _v4
          </button>

          <button
            className="p-2.5 border-2 rounded-lg hover:bg-slate-300 hover:border-black duration-200 cursor-pointer"
            // onClick={() => handleConnectWallet(walletId, (currentChainId as any) ?? '0x1')}
            onClick={() => handleSignTypedDataV3()}
          >
            SignTypeData _v3
          </button>

          <button
            className="p-2.5 border-2 rounded-lg hover:bg-slate-300 hover:border-black duration-200 cursor-pointer"
            // onClick={() => handleConnectWallet(walletId, (currentChainId as any) ?? '0x1')}
            onClick={() => handleSignTypedData()}
          >
            SignTypeData
          </button>
        </div>
      )}
      <Link href="/test-final-modal" passHref className="flex mt-40 justify-center">
        <button className="p-2.5 border-2 rounded-lg hover:bg-slate-300 hover:border-black duration-200 cursor-pointer">
          Go to C98 Modal Page{' '}
        </button>
      </Link>
      {address && <div>{/* Handle for Dapp */}</div>}
    </div>
  );
};
