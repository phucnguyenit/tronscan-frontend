import React from "react";
import {flatten} from "lodash";
import Block from "./components/blockchain/Block";
import Transaction from "./components/blockchain/Transaction";
import Address from "./components/addresses/Address";
import Home from "./components/Home";
import {
  AboutAsync,
  AccountAsync,
  AccountsAsync,
  CopyrightAsync,
  DemoAsync,
  FaqAsync,
  FoundationAsync,
  LedgerHelpAsync,
  LiveAsync,
  MyTokenAsync,
  NodesAsync,
  NodeTesterAsync,
  ProposalDetailAsync,
  RepresentativesAsync,
  SingleChartAsync,
  StatisticsAsync,
  SystemAsync,
  Token20DetailAsync,
  TokenDetailAsync,
  TokenListAsync,
  TokenOverviewAsync,
  TokensCreateAsync,
  TokenTRC20ListAsync,
  TokenAllAsync,
  TransactionViewerAsync,
  TronConvertToolAsync,
  TRONRatingAsync,
  VoteLiveAsync,
  VoteOverviewAsync,
  WalletWizardAsync
} from "./components/async";
import Blocks from "./components/blockchain/Blocks";
import Transactions from "./components/blockchain/Transactions";
import Transfers from "./components/blockchain/Transfers";
import Representative from "./components/representatives/representative";
import Contracts from "./components/blockchain/Contracts";
import SmartContract from "./components/blockchain/Contract";
import Exchangetrc from "./components/exchange/index";
import Exchange from "./components/exchange/dex10/index";
import Exchange20 from "./components/exchange/dex20/index";
import Notice from "./components/exchange/notice";
import ContractTrans from "./components/blockchain/ContractTrans";
import Committee from "./components/committee/index";
import Proposals from "./components/committee/Proposals";
import {Redirect} from "react-router-dom";
import {LedgerComponent} from "./hw/ledger/LedgerComponent";
import BTTSupplyTemp from "./components/tokens/TokenDetail/tempBtt.js";

export const routes = [
  {
    path: "/blockchain",
    label: "blockchain",
    icon: "fa fa-link",
    component: () => <Redirect to="/blockchain/blocks" />,
    routes: [
      {
        label: "nodes",
        icon: "fa fa-server",
        path: "/blockchain/nodes",
        component: NodesAsync,
        showInMenu: false
      },
      {
        path: "/blockchain/blocks",
        label: "blocks",
        icon: "fa fa-cubes",
        component: Blocks
      },
      {
        icon: "fas fa-handshake",
        path: "/blockchain/transactions",
        label: "transactions",
        component: Transactions
      },
      {
        icon: "fas fa-handshake",
        path: "/blockchain/transactions/:date",
        label: "daily_transactions",
        component: Transactions,
        showInMenu: false
      },
      {
        icon: "fa fa-exchange-alt",
        path: "/blockchain/transfers",
        label: "transfers",
        component: Transfers
      },
      {
        path: "/blockchain/accounts",
        label: "accounts",
        icon: "fa fa-users",
        component: AccountsAsync
      },
      // {
      //   path: "/blockchain/contracts",
      //   label: "Verified_contracts",
      //   icon: "fa fa-file",
      //   component: Contracts,
      // },
      {
        label: "statistics",
        icon: `fa fa-chart-pie`,
        path: "/blockchain/stats",
        component: StatisticsAsync,
        showInMenu: false
      },
      {
        label: "statistics",
        icon: `fa fa-chart-pie`,
        path: "/blockchain/stats/:chartName",
        component: SingleChartAsync,
        showInMenu: false
      },
      {
        label: "live",
        icon: `fa fa-bolt`,
        path: "/blockchain/live",
        component: LiveAsync,
        showInMenu: false
      }, // {
      //   label: "inter_tnxl",
      //   icon: `fa fa-random`,
      //   path: "/blockchain/ContractInter",
      //   component: ContractInter,
      //   showInMenu: false
      // },
      {
        path: "/blockchain/foundation",
        label: "foundation",
        icon: "fa fa-address-book",
        component: FoundationAsync,
        showInMenu: false
      }
    ]
  },
  /*{
    path: "/contracts",
    label: "contracts",
    icon: "fa fa-file-contract",
    component: () => <Redirect to="/contracts/contracts" />,
    routes: [
      {
        label: "contracts",
        icon: "fa fa-file",
        path: "/contracts/contracts",
        component: Contracts,
        showInMenu: false
      },
      {
        path: "/contracts/contract-triggers",
        label: "trigger",
        icon: "fa fa-users-cog",
        component: ContractTrans,
        showInMenu: false
      }
    ]
  },*/
  { path: "/block/:id", label: "block", component: Block, showInMenu: false },
  {
    path: "/transaction/:hash",
    label: "transaction",
    component: Transaction,
    showInMenu: false
  },
  {
    path: "/address/:id",
    label: "address",
    component: Address,
    showInMenu: false
  },
  {
    path: "/representative/:id",
    label: "representative",
    component: Representative,
    showInMenu: false
  },
  {
    path: "/contract/:id",
    label: "contract",
    component: SmartContract,
    showInMenu: false
  },
  /*{
    path: "/tokens",
    label: "tokens",
    icon: "fas fa-coins",
    component: TokenOverviewAsync,
    routes: [
      // {
      //   label: "overview_TRC20",
      //   path: "/tokens/trc20",
      //   icon: "fas fa-table",
      //   component: TokenTRC20ListAsync
      // },
      // "-",
      // {
      //   label: "overview_TRC10",
      //   path: "/tokens/list",
      //   icon: "fa fa-list",
      //   component: TokenListAsync
      // },
      {
        label: "overview",
        path: "/tokens/list",
        icon: "fa fa-list",
        component: TokenAllAsync
      },
      {
        label: "participate",
        path: "/tokens/view",
        icon: "fas fa-coins",
        component: TokenOverviewAsync
      },
      {
        label: "create",
        path: "/tokens/create",
        icon: "fa fa-plus-square",
        component: TokensCreateAsync
      }
    ]
  },
  {
    path: "/token/:id",
    label: "token",
    component: TokenDetailAsync,
    showInMenu: false
  },
  {
    path: "/token20/:address",
    label: "token",
    component: Token20DetailAsync,
    showInMenu: false
  },
  {
    label: "update_token",
    component: MyTokenAsync,
    path: "/myToken",
    showInMenu: false
  },
  {
    label: "TRONRating",
    component: TRONRatingAsync,
    path: "/rating",
    showInMenu: false
  },
  // {
  //   path: "/TRXMarket",
  //   label: "TRXMarket",
  //   icon: "fas fa-rocket",
  //   enurl: "https://trx.market",
  //   zhurl: "https://trx.market",
  //   linkHref: true
  // },
  // {
  //   label: "DEX10",
  //   path: "/exchange",
  //   icon: "fas fa-exchange-alt",
  //   component: Exchange,
  //   showInMenu: false,
  //   none: true
  // },
  // {
  //   label: "TRXMarket",
  //   path: "/exchange20",
  //   icon: "fas fa-exchange-alt",
  //   component: Exchange20,
  //   none: true
  // },
  {
    label: "TRXMarket",
    path: "/exchange/:type",
    redirect: '/exchange/trc10',
    icon: "fas fa-exchange-alt",
    component: Exchangetrc,
    none: true
  },
  {
    label: "notice",
    path: "/notice/:id",
    //icon: "fas fa-exchange-alt",
    component: Notice,
    showInMenu: false
  },*/
  {
    label: "TRONSR",
    path: "/sr",
    icon: "fas fa-chess-queen",
    component: RepresentativesAsync,
    routes: [
      {
        label: "representatives",
        path: "/sr/representatives",
        icon: "fa fa-rocket",
        component: RepresentativesAsync
      },
      /*{
        label: "votes",
        path: "/sr/votes",
        icon: "fas fa-comment",
        component: VoteOverviewAsync
      },
      {
        label: "committee",
        path: "/sr/committee",
        icon: "fas fa-users",
        component: Committee
      }*/
    ]
  },
  {
    path: "/votes-live",
    label: "live",
    icon: "fas fa-comment",
    component: VoteLiveAsync,
    showInMenu: false
  },
  {
    path: "/account",
    label: "account",
    showInMenu: false,
    component: AccountAsync
  },
  {
    path: "/proposals",
    label: "commission_proposed",
    component: Proposals,
    showInMenu: false
  },
  {
    path: "/proposal/:id",
    label: "commission_proposed",
    component: ProposalDetailAsync,
    showInMenu: false
  },
  {
    path: "/tools",
    label: "tools",
    icon: "fa fa-wrench",
    showInMenu: false,
    routes: [
      // {
      //   label: "verify_contract_code",
      //   path: "/tools/verify-contract-code",
      //   icon: "fa fa-check-square",
      //   component: VerifyContractCodeAsync,
      // },
      {
        label: "transaction_viewer",
        path: "/tools/transaction-viewer",
        icon: "fa fa-eye",
        component: TransactionViewerAsync
      },
      {
        label: "node_tester",
        path: "/tools/node-tester",
        icon: "fa fa-server",
        component: NodeTesterAsync
      },
      {
        label: "tron_convert_tool",
        path: "/tools/tron-convert-tool",
        icon: "fa fa-random",
        component: TronConvertToolAsync
      },
      {
        path: "/tools/system",
        icon: "fa fa-database",
        label: "system",
        component: SystemAsync
      },
      {
        url: "https://github.com/tronscan/tronscan-desktop/releases",
        icon: "fa fa-download",
        label: "desktop_explorer"
      },
      {
        url: "https://explorer.shasta.trongrid.io",
        icon: "fa fa-link",
        label: "link_test_server"
      },
      {
        url: "https://www.trongrid.io/shasta",
        icon: "fa fa-recycle",
        label: "link_test_fauct"
      }
    ]
  },
  {
    path: "/help",
    label: "help",
    icon: "fa fa-question",
    component: null,
    showInMenu: false,
    routes: [
      "TRON",
      {
        url: "https://dn-peiwo-web.qbox.me/What_is_TRON1.4.pdf",
        label: "what_is_tron"
      },
      "-",
      "Tronscan",
      {
        label: "frequently_asked_questions",
        component: FaqAsync,
        path: "/help/faq"
      },
      {
        label: "copyright",
        component: CopyrightAsync,
        path: "/help/copyright",
        showInMenu: false
      },
      {
        label: "about",
        component: AboutAsync,
        path: "/help/about",
        showInMenu: false
      },
      {
        label: "ledger_guide",
        component: LedgerHelpAsync,
        path: "/help/ledger"
      },
      { url: "https://t.me/tronscan", label: "telegram_updates" },
      "-",
      "Community",
      { url: "https://www.reddit.com/r/tronix", label: "reddit" },
      { url: "https://t.me/tronscantalk", label: "telegram" },
      "-",
      "Development",
      { url: "https://github.com/tronscan/tronscan-frontend/blob/dev2019/document/api.md", label: "tron_explorer_api" },
      {
        url:
          "https://dn-peiwo-web.qbox.me/Design_Book_of_TRON_Architecture1.4.pdf",
        label: "tron_architechure"
      },
      {
        url:
          "https://dn-peiwo-web.qbox.me/TRON%20Protobuf%20Protocol%20Document.pdf",
        label: "tron_protobuf_doc"
      },
      "-",
      "Feedback",
      {
        url: "https://github.com/tronscan/tronscan-frontend/issues/new",
        label: "report_an_error"
      }
    ]
  },
  // {
  //   path: "/more",
  //   label: "nav_more",
  //   icon: "fas fa-indent",
  //   routes: [
  //     {
  //       path: "/markets",
  //       label: "markets",
  //       icon: "fa fa-chart-line", // component: MarketsAsync
  //       enurl: "https://coinmarketcap.com/currencies/tron/",
  //       zhurl: "https://coinmarketcap.com/zh/currencies/tron/",
  //       linkHref: true
  //     },
  //     {
  //       path: "/more/list_trx",
  //       label: "list_trx",
  //       icon: "fa fa-plus",
  //       enurl: "https://tron.network/exchangesList?lng=en",
  //       zhurl: "https://tron.network/exchangesList?lng=zh",
  //       linkHref: true
  //     }
  //   ]
  // },
  {
      path: "/more",
      label: "nav_more",
      icon: "fas fa-indent",
      routes: [
            [
                'tools',
                {
                    path: "/tools/system",
                    icon: "fa fa-database",
                    label: "system",
                    component: SystemAsync
                },
                {
                    label: "transaction_viewer",
                    path: "/tools/transaction-viewer",
                    icon: "fa fa-eye",
                    component: TransactionViewerAsync
                },
                {
                    label: "tron_convert_tool",
                    path: "/tools/tron-convert-tool",
                    icon: "fa fa-random",
                    component: TronConvertToolAsync
                },
                {
                    label: "node_tester",
                    path: "/tools/node-tester",
                    icon: "fa fa-server",
                    component: NodeTesterAsync
                },
                // {
                //     url: "https://github.com/tronscan/tronscan-desktop/releases",
                //     icon: "fa fa-download",
                //     label: "desktop_explorer"
                // },
            ],
            [
                  "Documentation",
                {
                    url: "https://tron.network/static/doc/white_paper_v_2_0.pdf",
                    icon: "fa fa-globe",
                    label: "what_is_tron"
                },
                {
                    url: "https://dn-peiwo-web.qbox.me/Design_Book_of_TRON_Architecture1.4.pdf",
                    icon:"fa fa-outdent",
                    label: "tron_architechure"
                },
                {
                    url: "https://dn-peiwo-web.qbox.me/TRON%20Protobuf%20Protocol%20Document.pdf",
                    icon:"fa fa-book",
                    label: "tron_protobuf_doc"
                },
                {
                    url: "https://github.com/tronscan/tronscan-frontend/blob/dev2019/document/api.md",
                    icon:"fa fa-building",
                    label: "tron_explorer_api"
                },
                {
                    label: "frequently_asked_questions",
                    icon:"fa fa-question",
                    component: FaqAsync,
                    path: "/help/faq"
                },
                {
                    label: "ledger_guide",
                    icon:"fa fa-tags",
                    component: LedgerHelpAsync,
                    path: "/help/ledger"
                },
                // {
                //     label: "copyright",
                //     component: CopyrightAsync,
                //     path: "/help/copyright",
                //     showInMenu: false
                // },
                // {
                //     label: "about",
                //     component: AboutAsync,
                //     path: "/help/about",
                //     showInMenu: false
                // },
                // {
                //     label: "ledger_guide",
                //     component: LedgerHelpAsync,
                //     path: "/help/ledger"
                // },
                // {
                //     url: "https://t.me/tronscan",
                //     label: "telegram_updates"
                // },
                // {   url: "https://www.reddit.com/r/tronix",
                //     label: "reddit"
                // },
                // {   url: "https://t.me/tronscantalk",
                //     label: "telegram"
                // },
                // {
                //     url: "https://github.com/tronscan/tronscan-frontend/issues/new",
                //     label: "report_an_error"
                // }
            ],
            [
                  "Other",
                  {
                      url: "https://shasta.tronscan.org",
                      icon: "fa fa-link",
                      label: "link_test_server"
                  },
                  {
                      url: "https://www.trongrid.io/shasta",
                      icon: "fa fa-recycle",
                      label: "link_test_fauct"
                  },
                  {
                      url: "https://dapphouse.org",
                      icon:"fa fa-archive",
                      label: "DApps"
                  },
                  {
                      path: "/markets",
                      label: "markets",
                      icon: "fa fa-chart-line", // component: MarketsAsync
                      enurl: "https://coinmarketcap.com/currencies/tron/",
                      zhurl: "https://coinmarketcap.com/zh/currencies/tron/",
                      linkHref: true
                  },
                  {
                      path: "/more/list_trx",
                      label: "list_trx",
                      icon: "fa fa-plus",
                      enurl: "https://tron.network/exchangesList?lng=en",
                      zhurl: "https://tron.network/exchangesList?lng=zh",
                      linkHref: true
                  }

            ]

      ]
  },
  // {
  //     path: "/more",
  //     label: "NewMore",
  //     icon: "fas fa-indent",
  //     routes: [
  //         {
  //             path: "/markets",
  //             label: "markets",
  //             icon: "fa fa-chart-line", // component: MarketsAsync
  //             enurl: "https://coinmarketcap.com/currencies/tron/",
  //             zhurl: "https://coinmarketcap.com/zh/currencies/tron/",
  //             linkHref: true
  //         },
  //         {
  //             path: "/more/list_trx",
  //             label: "list_trx",
  //             icon: "fa fa-plus",
  //             enurl: "https://tron.network/exchangesList?lng=en",
  //             zhurl: "https://tron.network/exchangesList?lng=zh",
  //             linkHref: true
  //         }
  //     ]
  // },
  {
    path: "/wallet/new",
    label: "wallet",
    showInMenu: false,
    component: WalletWizardAsync
  },
  {
    path: "/demo",
    label: "demo",
    showInMenu: false,
    showSubMenu: false,
    showSubHeader: false,
    component: DemoAsync
  },
  {
    path: "/test/btt/supply",
    label: "supply",
    showInMenu: false,
    showSubMenu: false,
    showSubHeader: false,
    component: BTTSupplyTemp
  },
  {
    path: "/",
    label: "home",
    showInMenu: false,
    showSubMenu: false,
    showSubHeader: false,
    component: Home
  }
];

export const flatRoutes = flatten(
  routes.map(route => [...(route.routes || []), route])
);
