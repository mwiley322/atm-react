import React, { Component } from 'react';

export default class Account extends Component {
  constructor (props) {
    super (props)
    this.state={
      balance: 0
    }
  }

  handleDepositClick (e) {
    e.preventDefault();
    let amount = +this.refs.myAmount.value;
    let newBalance = this.state.balance + amount;
    this.setState({
      balance: newBalance
    });
    this.refs.myAmount.value = '';
  }

  handleWithdrawClick (e) {
    e.preventDefault();
    let amount = +this.refs.myAmount.value;
    let newBalance = this.state.balance - amount;
    if (newBalance < 0) {
      newBalance = 0;
    } 
    this.setState({
      balance: newBalance
    });
    this.refs.myAmount.value='';
  }

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">{this.state.balance}</div>
        <input ref="myAmount" type="text" placeholder="enter an amount" />
        <input type="button" value="Deposit" onClick={(e)=>this.handleDepositClick(e)}/>
        <input type="button" value="Withdraw" onClick={(e)=>this.handleWithdrawClick(e)}/>
      </div>
    )
  }
}
