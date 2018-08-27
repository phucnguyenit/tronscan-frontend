import React, {Component, Fragment, PureComponent} from 'react';
import {t, tu} from "../../utils/i18n";
import {connect} from "react-redux";
import {filter, trim, some, sumBy, cloneDeep} from "lodash";
import {FormattedNumber, FormattedDate, injectIntl} from "react-intl";
import "react-datetime/css/react-datetime.css";
import {NumberField} from "../common/Fields";
import 'moment/min/locales';

function ErrorLabel(error) {
  if (error !== null) {
    return (
        <small className="text-danger"> {error} </small>
    )
  }
  return null;
}

export class BasicInfo extends PureComponent {

  constructor(props) {
    super(props);

    this.state = this.props.state;
  }

  isValid = () => {

    let {name, abbr, description, url, totalSupply} = this.state;

    let newErrors = {
      name: null,
      totalSupply: null,
      description: null,
      url: null,
      abbr: null,
      logo:null,
    };

    name = trim(name);

    if (name.length === 0) {
      newErrors.name = tu("no_name_error");
    } else if (name.length > 32) {
      newErrors.name = tu("tokenname_error_message_0");
    } else if (!/^[a-zA-Z]+$/i.test(name)) {
      newErrors.name = tu("tokenname_error_message_1");
    }

    abbr = trim(abbr);

    if (abbr.length === 0) {
      newErrors.abbr = tu("abbreviation_required");
    } else if (abbr.length > 5) {
      newErrors.abbr = tu("abbreviation_error_message_0");
    } else if (!/^[a-zA-Z]+$/i.test(abbr)) {
      newErrors.abbr = tu("abbreviation_error_message_1");
    }

    if (description.length === 0) {
      newErrors.description = tu("no_description_error");
    } else if (description.length > 200) {
      newErrors.description = tu("description_error_message_0");
    }

    if (totalSupply <= 0)
      newErrors.totalSupply = tu("no_supply_error");

    if (url.length === 0)
      newErrors.url = tu("no_url_error");

    if (document.getElementById("previewLogo").src)
      newErrors.logo = tu("no_logo_error");

    if (some(Object.values(newErrors), error => error !== null)) {
      this.setState({errors: newErrors});
    }
    else {
      this.props.nextStep(2);
      this.state.step = 2;
      this.props.nextState(this.state);
    }
  };
  previewLogo = () => {

    let file = document.getElementById("logo");
    document.getElementById("previewLogo").src = URL.createObjectURL(file.files[0]);
    let reader = new FileReader();
    reader.readAsDataURL(file.files[0]);
    reader.onload = function () {
      console.log(reader.result);
    }

  }

  componentDidMount() {
    console.log("Basic");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("update");
  }

  render() {
    console.log('son');
    let {name, url, totalSupply, abbr, description} = this.state;
    let {intl} = this.props;
    let {errors} = this.state;

    return (

        <main className="">
          <h5 className="card-title">
            {tu("issue_a_token")}
          </h5>
          <p>
            {tu('token_issue_guide_message_1')}
            {tu('token_issue_guide_message_2')}
            {tu('token_issue_guide_message_3')}
          </p>
          <hr/>
          <form>
            <fieldset>
              <legend>
                {tu("basic_info")}
                <i className="fab fa-wpforms float-right"/>
              </legend>
              <p>
                <small className="form-text text-muted">
                  {'('}{tu("language_support")}{')'}
                </small>
              </p>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>{tu("token_name")} *</label>
                  <input type="text" className="form-control" onChange={(e) => {
                    this.setState({name: e.target.value})
                  }} value={name} placeholder={intl.formatMessage({id: 'token_message'})}/>
                  {ErrorLabel(errors.name)}
                </div>
                <div className="form-group col-md-6">
                  <label>{tu("token_abbr")} *</label>
                  <input type="text" className="form-control" onChange={(e) => {
                    this.setState({abbr: e.target.value})
                  }} value={abbr} placeholder={intl.formatMessage({id: 'abbr_message'})}/>
                  {ErrorLabel(errors.abbr)}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label>{tu("total_supply")} *</label>
                  <NumberField
                      className="form-control"
                      value={totalSupply}
                      min={1}
                      onChange={(totalSupply) => this.setState({totalSupply})}/>
                  {ErrorLabel(errors.supply)}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label>{tu("description")} *</label>
                  <input type="text" className="form-control" onChange={(e) => {
                    this.setState({description: e.target.value})
                  }} value={description} placeholder={intl.formatMessage({id: 'description_message'})}/>
                  {ErrorLabel(errors.description)}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label>{tu("website_url")} *</label>
                  <input type="text" placeholder="http://" className="form-control" onChange={(e) => {
                    this.setState({url: e.target.value})
                  }} value={url} placeholder={intl.formatMessage({id: 'url_message'})}/>
                  {ErrorLabel(errors.url)}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label>{tu("token_logo")}
                    <small className="form-text text-muted" style={{display: 'inline'}}>
                      ({tu("image_restraint_desc")})
                    </small>
                  </label>
                  <div>
                    <a href="javascript:;" className="uploadLogo">
                      <img src={require("../../images/Upload.png")}/>
                      <input type="file" id="logo" onChange={this.previewLogo}
                             accept="image/x-png, image/jpg, image/jpeg, image/gif"/>
                    </a>
                    <img id="previewLogo"
                         style={{marginTop: '-52px', marginLeft: '15px', width: '60px', height: '60px'}}/>
                  </div>
                  {ErrorLabel(errors.logo)}
                </div>
              </div>
            </fieldset>

            <a className="btn btn-danger btn-lg" onClick={() => {
              this.isValid()
            }}>{tu('next')}</a>
          </form>

        </main>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(BasicInfo));
