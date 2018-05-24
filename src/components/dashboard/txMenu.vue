<template>
  <div
    id="transaction_menu">
    <p>Enter your Ethereum wallet address:</p>
    <input
      v-model="walletAddress"
      type="text"
      name="eth_wallet"
      placeholder="wallet address">
    <p>Please input:</p>
    <div id="curr1">
      <p>{{ token.currency }} to spend</p>
      <div>
        <p id="fiat_name">{{ token.currency }}:</p>
        <input
          v-model="tokenValue"
          type="text"
          name="fiat_amount"
          @input="calculateFiatValue">
      </div>
    </div>
    <div>
      <p>or</p>
    </div>
    <div id="curr2">
      <p>tokens to buy</p>
      <div>
        <p id="token_name">{{ token.symbol }}:</p>
        <input
          v-model="fiatValue"
          type="text"
          name="token_amount"
          @input="calculateTokenValue">
        <p id="crypto_in_stock">
        <strong>max.</strong> {{ token.ourSupply }}</p>
      </div>
    </div>
    <input
      id="submit"
      type="submit"
      name="confirm_transaction"
      value="Submit"
      @click="postNewOrder">
    <p id="security_info">Your payment will be securely processed by a Dotpay third-party.</p>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'TransactionMenu',
  props: {
    token: { type: Object, required: true },
  },
  data() {
    return {
      fiatValue: 0,
      tokenValue: 0,
      walletAddress: '',
    };
  },
  methods: {
    calculateTokenValue() {
      this.tokenValue = this.fiatValue * this.token.value;
    },
    calculateFiatValue() {
      this.fiatValue = this.tokenValue / this.token.value;
    },
    async postNewOrder() {
      const urlOrder = `http://167.99.141.77:8081/api/order/new/${this.walletAddress}`;

      const response = await axios.post(urlOrder);
      console.log(response);
      window.location.href = response.data.href;
    },
  },
};
</script>

<style scoped>
#transaction_menu {
  float: left;
}

#transaction_menu {
  width: 840px;
  height: 578px;
  padding: 20px;
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  margin: 0 0 0 40px;
}
#transaction_menu p,
#transaction_menu input {
  text-align: center;
  font-size: 24px;
}
#transaction_menu > div {
  float: left;
  margin-right: 40px;
}
#transaction_menu > div > div {
  width: 190px;
}
#transaction_menu > div > div #token_name,
#transaction_menu > div > div #fiat_name {
  float: left;
  width: 50%;
  padding: 10px 0;
  display: block;
  background-color: #fff;
  border: 2px solid #fff;
  z-index: 100;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-weight: 600;
  color: #1e0038;
  margin: 0;
  border-radius: 8px 0 0 8px;
}
#transaction_menu > div > div #crypto_in_stock {
  font-size: 16px;
  z-index: -50;
}
#transaction_menu > div > div > input {
  float: left;
  border: 2px solid #fff;
  border-radius: 0 8px 8px 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0.7);
  width: 50%;
  padding: 10.25px 0;
}
#transaction_menu > div > div > input:focus {
  color: white;
}
#transaction_menu #curr1 {
  margin-left: 157px;
}
#transaction_menu #curr2 {
  margin-right: 157px;
}
#transaction_menu input[name="confirm_transaction"] {
  display: block;
  margin: 205px auto 0 auto;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  font-family: Raleway;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  padding: 10px 50px;
  border-radius: 8px;
  border: 2px solid #fff;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
#transaction_menu input[name="confirm_transaction"]:hover {
  background-color: white;
  color: #1e0038;
}

input[name="eth_wallet"] {
  background-color: rgba(0, 0, 0, 0);
  font-family: Raleway;
  font-weight: 400;
  width: 100%;
  padding: 12px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.7);
  border: none;
  border: 2px solid #fff;
  border-radius: 8px;
  font-size: 31px !important;
  margin-bottom: 30px;
}

input[name="eth_wallet"]:focus {
  color: white;
}

#security_info {
  font-size: 16px !important;
  position: absolute;
  width: 100%;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>

