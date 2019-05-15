import React, {Fragment} from "react";
import {ONE_TRX, CONTRACT_ADDRESS_USDT} from "../../../constants";
import {AddressLink, ExternalLink, ContractLink, TokenTRC20Link} from "../../common/Links";
import Field from "./Field";
import {TRXPrice} from "../../common/Price";
import {tu} from "../../../utils/i18n";
import {FormattedNumber, FormattedDate, injectIntl} from "react-intl";
import rebuildList from "../../../utils/rebuildList";
import {toUtf8} from 'tronweb'
import { NameWithId } from '../../common/names';

export default function Contract({contract}) {
    let parametersArr = [
        'MAINTENANCE_TIME_INTERVAL',
        'ACCOUNT_UPGRADE_COST',
        'CREATE_ACCOUNT_FEE',
        'TRANSACTION_FEE',
        'ASSET_ISSUE_FEE',
        'WITNESS_PAY_PER_BLOCK',
        'WITNESS_STANDBY_ALLOWANCE',
        'CREATE_NEW_ACCOUNT_FEE_IN_SYSTEM_CONTRACT',
        'CREATE_NEW_ACCOUNT_BANDWIDTH_RATE',
        'ALLOW_CREATION_OF_CONTRACTS',
        'REMOVE_THE_POWER_OF_THE_GR',
        'ENERGY_FEE',
        'EXCHANGE_CREATE_FEE',
        'MAX_CPU_TIME_OF_ONE_TX',
        'ALLOW_UPDATE_ACCOUNT_NAME',
        'ALLOW_SAME_TOKEN_NAME'
    ];
    let proposal,proposalVal;
    if(contract.parameters){
        for(let item in contract.parameters){
            for(let i in parametersArr){
                if(item === i){
                     proposal = parametersArr[item];
                     proposalVal = contract.parameters[item]
                }
            }
        }

    }

    let TokenIDList = [];
    TokenIDList.push(contract)
    let tokenIdData  = rebuildList(TokenIDList,'asset_name','amount')[0];
    if(contract.contractType){
        switch (contract.contractType.toUpperCase()) {
            case "TRANSFERCONTRACT":

                return (
                    <Fragment>
                        <div className="card-body table-title">
                            <h5>
                                <i className="fa fa-exchange-alt"></i>
                                {tu("transfer_contract")}
                                <small>{tu("TRX_transfer_between_addresses")}</small>
                            </h5>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                <Field label="from"><AddressLink address={contract['owner_address']}/></Field>
                                <Field label="to"><AddressLink address={contract['to_address']}/></Field>
                                <Field label="amount"><TRXPrice amount={contract.amount / ONE_TRX}/></Field>
                                {contract.contract_note &&
                                <Field label="note">{decodeURIComponent(contract.contract_note)}</Field>
                                }
                                </tbody>
                            </table>
                        </div>
                    </Fragment>
                );

            case "TRANSFERASSETCONTRACT":
                return (
                    <Fragment>
                        <div className="card-body table-title">
                            <h5>
                                <i className="fa fa-exchange-alt"></i>
                                {tu("transfer_asset_contract")}
                                <small>{tu("token_transfer_between_addresses")}</small>
                            </h5>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                <Field label="from"><AddressLink address={contract['owner_address']}/></Field>
                                <Field label="to"><AddressLink address={contract['to_address']}/></Field>
                                <Field label="amount">{tokenIdData.map_amount}</Field>
                                <Field label="token"><NameWithId value={contract} notamount totoken/></Field>
                                </tbody>
                            </table>
                        </div>
                    </Fragment>
                );

            case "PARTICIPATEASSETISSUECONTRACT":
                return (
                    <Fragment>
                        <div className="card-body table-title">
                            <h5>
                                <i className="fa fa-exchange-alt"></i>
                                {tu("participate_asset_issue_contract")}
                                <small>{tu("participate_token_between_addresses")}</small>
                            </h5>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                <Field label="to"><AddressLink address={contract['owner_address']}/></Field>
                                <Field label="issuer"><AddressLink address={contract['to_address']}/></Field>
                                <Field label="amount">{contract.amount / ONE_TRX}</Field>
                                <Field label="token"><NameWithId value={contract} notamount totoken/></Field>
                                </tbody>
                            </table>
                        </div>
                    </Fragment>
                );
            case "WITNESSUPDATECONTRACT":
                return (
                    <Fragment>
                        <div className="card-body table-title">
                            <h5>
                                <i className="fa fa-exchange-alt"></i>
                                {tu("witness_update_contract")}
                                <small>{tu("updates_a_witness")}</small>
                            </h5>
                        </div>
                        <table className="table">
                            <tbody>
                            <Field label="owner_address"><AddressLink address={contract['owner_address']}/></Field>
                            <Field label="URL">{contract.url}</Field>
                            </tbody>
                        </table>
                    </Fragment>
                );
            case "WITNESSCREATECONTRACT":
                return (
                    <Fragment>
                        <div className="card-body table-title">
                            <h5>
                                <i className="fa fa-exchange-alt"></i>
                                {tu("witness_create_contract")}
                                <small>{tu("create_a_witness")}</small>
                            </h5>
                        </div>
                        <table className="table">
                            <tbody>
                            <Field label="owner_address"><AddressLink address={contract['owner_address']}/></Field>
                            <Field label="URL">{contract.url}</Field>
                            </tbody>
                        </table>
                    </Fragment>
                );

            case "ACCOUNTUPDATECONTRACT":
                return (
                    <Fragment>
                        <div className="card-body table-title">
                            <h5>
                                <i className="fa fa-exchange-alt"></i>
                                {tu("account_update_contract")}
                                <small>{tu("update_account_name")}</small>
                            </h5>
                        </div>
                        <table className="table">
                            <tbody>
                            <Field label="owner_address"><AddressLink address={contract['owner_address']}/></Field>
                            <Field label="account_name">{toUtf8(contract['account_name'])}</Field>
                            </tbody>
                        </table>
                    </Fragment>
                );
            case "ACCOUNTCREATECONTRACT":
                return (
                    <Fragment>
                        <div className="card-body table-title">
                            <h5>
                                <i className="fa fa-exchange-alt"></i>
                                {tu("account_create_contract")}
                                <small>{tu("account_create")}</small>
                            </h5>
                        </div>
                        <table className="table">
                            <tbody>
                            <Field label="create_from_address"><AddressLink address={contract['owner_address']}/></Field>
                            <Field label="create_to_address"><AddressLink address={contract['account_address']}/></Field>
                            </tbody>
                        </table>
                    </Fragment>
                );
            case "WITHDRAWBALANCECONTRACT":
                return (
                    <Fragment>
                        <div className="card-body table-title">
                            <h5>
                                <i className="fa fa-exchange-alt"></i>
                                {tu("withdraw_balance_contract")}
                                <small>{tu("withdraw_balance")}</small>
                            </h5>
                        </div>
                        <table className="table">
                            <tbody>
                            <Field label="owner_address"><AddressLink address={contract['owner_address']}/></Field>
                            </tbody>
                        </table>
                    </Fragment>
                );

            case "FREEZEBALANCECONTRACT":
                return (
                    <Fragment>
                        <div className="card-body table-title">
                            <h5>
                                <i className="fa fa-exchange-alt"></i>
                                {tu("freeze_balance_contract")}
                                <small>{tu("freeze_TRX")}</small>
                            </h5>
                        </div>
                        <table className="table">
                            <tbody>
                            <Field label="owner_address"><AddressLink address={contract['owner_address']}/></Field>
                            {contract['receiver_address']&&<Field label="receive_list"><AddressLink address={contract['receiver_address']}/></Field>}
                            {contract['resource']?<Field label="type">{contract['resource']}</Field>:<Field label="type">Bandwidth</Field>}
                            <Field label="frozen_balance">{contract['frozen_balance'] / ONE_TRX}</Field>
                            <Field label="frozen_days">{contract['frozen_duration']}</Field>
                            </tbody>
                        </table>
                    </Fragment>
                );

            case "UNFREEZEBALANCECONTRACT":
                return (
                    <Fragment>
                        <div className="card-body table-title">
                            <h5>
                                <i className="fa fa-exchange-alt"></i>
                                {tu("unfreeze_balance_contract")}
                                <small>{tu("unfreeze_TRX")}</small>
                            </h5>
                        </div>
                        <table className="table">
                            <tbody>
                            <Field label="owner_address"><AddressLink address={contract['owner_address']}/></Field>
                            {contract['receiver_address']&&<Field label="receive_list"><AddressLink address={contract['receiver_address']}/></Field>}
                            </tbody>
                        </table>
                    </Fragment>
                );

            case "VOTEWITNESSCONTRACT":
                return (
                    <Fragment>
                        <div className="card-body table-title">
                            <h5>
                                <i className="fa fa-exchange-alt"></i>
                                {tu("vote_witness_contract")}
                                <small>{tu("vote_for_a_witness")}</small>
                            </h5>
                        </div>
                        <table className="table">
                            <tbody>
                            <Field label="owner_address"><AddressLink address={contract['owner_address']}/></Field>
                            <tr>
                                <th>{tu("votes")}</th>
                                <td>
                                    <ul>
                                        {
                                            contract.votes.map((vote,index) => (
                                                <li key={index}>
                                                    <AddressLink address={vote['vote_address']} truncate={false}/>
                                                    {tu("counts")} : {vote['vote_count']}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </Fragment>
                );

            case "ASSETISSUECONTRACT":
                return (
                    <Fragment>
                        <div className="card-body table-title">
                            <h5>
                                <i className="fa fa-exchange-alt"></i>
                                {tu("asset_issue_contract")}
                                <small>{tu("issue_a_new_asset")}</small>
                            </h5>
                        </div>
                        <table className="table">
                            <tbody>
                            <Field label="owner_address"><AddressLink address={contract['owner_address']}/></Field>
                            <Field label="token_name">{toUtf8(contract.name)}</Field>
                            <Field label="total_supply"><FormattedNumber value={contract.total_supply/ (contract.precision?Math.pow(10,contract.precision):1)}/></Field>
                            <Field label="TRX_exchange_rate">{contract.trx_num / ONE_TRX} : {contract.num}</Field>
                            <Field label="start_time">
                                {contract.end_time - contract.start_time > 1000 ?  <FormattedDate value={contract.start_time}/> : "-"}
                            </Field>
                            <Field label="end_time">
                                {contract.end_time - contract.start_time > 1000 ?  <FormattedDate value={contract.end_time}/> : "-"}
                            </Field>
                            <Field label="description">{toUtf8(contract.description)}</Field>
                            <Field label="URL"><ExternalLink url={toUtf8(contract.url)}/></Field>
                            </tbody>
                        </table>
                    </Fragment>
                );
            case "PROPOSALCREATECONTRACT":
                return (
                    <Fragment>
                        <div className="card-body table-title">
                            <h5>
                                <i className="fa fa-exchange-alt"></i>
                                {tu("proposal_create_contract")}
                                <small>{tu("proposal_create")}</small>
                            </h5>
                        </div>
                        <table className="table">
                            <tbody>
                            <Field label="owner_address"><AddressLink address={contract['owner_address']}/></Field>
                            <tr>
                                <th>{proposal}</th>
                                <td>{proposalVal}</td>
                            </tr>
                            </tbody>
                        </table>
                    </Fragment>
                );
            case "TRIGGERSMARTCONTRACT":
                return (
                    <Fragment>
                        <div className="card-body table-title">
                            <h5>
                                <i className="fa fa-exchange-alt"></i>
                                {tu("trigger_smart_contract")}
                                <small>{tu('normal_address_trigger_smart_contract')}</small>
                            </h5>
                        </div>
                        <div className="content">
                            <div className="content_pos">
                                <div className="d-flex border-bottom pt-2">
                                    <div className="content_box_name">{tu('Basic_info')}</div>
                                    <div className="flex1">
                                        <div className="d-flex border-bottom content_item">
                                            <div className="content_name">{tu('contract_triggers_owner_address')}:</div>
                                            <div className="flex1">{contract['owner_address']}</div>
                                        </div>
                                        <div className="d-flex border-bottom content_item">
                                            <div className="content_name">{tu('contract_address')}:</div>
                                            <div className="flex1">{contract['contract_address']}</div>
                                        </div>
                                        <div className="d-flex content_item">
                                            <div className="content_name">{tu('value')}:</div>
                                            {
                                                contract['call_value']?
                                                    <TRXPrice amount={contract['call_value'] / ONE_TRX}/>
                                                    :<TRXPrice amount={0}/>
                                            }
                                        </div>
                                        {contract.contract_note &&
                                        <div className="d-flex content_item">
                                            <div className="content_name">{tu('data')}:</div>
                                            <div className="flex1">{decodeURIComponent(contract.contract_note)}</div>
                                        </div>
                                        }
                                    </div>
                                </div>
                                {contract.tokenTransferInfo && contract.tokenTransferInfo.decimals !==undefined && contract.tokenTransferInfo.symbol !==undefined && <div className="d-flex border-bottom pt-2">
                                    <div className="content_box_name">{tu('TRC20_transfers')}</div>
                                    <div className="flex1">
                                        <div className="d-flex border-bottom content_item">
                                            <div className="content_name">{tu('from')}:</div>
                                            <div className="flex1"><AddressLink address={contract.tokenTransferInfo['from_address']}/></div>
                                        </div>
                                        <div className="d-flex border-bottom content_item">
                                            <div className="content_name">{tu('to')}:</div>
                                            <div className="flex1"><AddressLink address={contract.tokenTransferInfo['to_address']}/></div>
                                        </div>
                                        <div className="d-flex border-bottom content_item">
                                            <div className="content_name" >{tu('amount')}:</div>
                                            <div className="flex1">{Number(contract.tokenTransferInfo['amount_str'])/ Math.pow(10,contract.tokenTransferInfo['decimals'])}</div>
                                        </div>
                                        <div className="d-flex border-bottom content_item">
                                            <div className="content_name" >{tu('token_txs_info')}:</div>
                                            <div className="flex1">
                                                {
                                                    contract.tokenTransferInfo['contract_address'] == CONTRACT_ADDRESS_USDT?
                                                        <b className="token-img-top" style={{marginRight:5}}>
                                                            <img width={20} height={20} src={contract.tokenTransferInfo['icon_url']} alt={contract.tokenTransferInfo['name']} />
                                                            <i style={{width:10,height:10,bottom:-5}}></i>
                                                        </b>
                                                        : <img width={20} height={20} src={contract.tokenTransferInfo['icon_url']} alt={contract.tokenTransferInfo['name']} style={{marginRight:5}}/>

                                                }
                                                <TokenTRC20Link name={contract.tokenTransferInfo['name']} address={contract.tokenTransferInfo['contract_address']} namePlus={contract.tokenTransferInfo['name'] + ' (' + contract.tokenTransferInfo['symbol'] + ')'}/></div>
                                        </div>

                                    </div>
                                </div>}

                                {contract.method &&
                                <div className="d-flex border-bottom pt-2">
                                    <div className="content_box_name">{tu('Method_calling')}</div>
                                    <div className="flex1">
                                        <div className="d-flex border-bottom content_item">
                                            <div className="content_name" >{tu("contract_method")}:</div>
                                            <div className="flex1">{contract.method}</div>
                                        </div>
                                        {
                                            contract.parameter && Object.keys(contract.parameter).map((p)=>{
                                                return (
                                                    <div className="d-flex border-bottom content_item">
                                                        <div className="content_name">{p}:</div>
                                                        <div className="flex1">{contract.parameter[p]}</div>
                                                    </div>)
                                            })
                                        }
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </Fragment>
                );
            default:
                return (
                    <Fragment>
                        <div className="card-body table-title">
                            <h5>
                                <i className="fa fa-exchange-alt"></i>
                                &nbsp;&nbsp;
                                {contract.contractType}
                            </h5>
                        </div>
                        <table className="table">
                            <tbody>
                            {
                                contract['owner_address']?
                                    <Field label="owner_address"><AddressLink address={contract['owner_address']}/></Field>
                                    :''
                            }
                            </tbody>
                        </table>
                    </Fragment>
                );
        }
    }


  return (
      <div>
          {
              contract.contractType && <div className="card-body">
                  {JSON.stringify(contract)}
              </div>
          }
      </div>

  );
}
