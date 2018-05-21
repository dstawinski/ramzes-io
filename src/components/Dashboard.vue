<template>
<div>
  <header>
    <div id="navbar" class="container">
      <a href="#">
        <img src="assets/ramzes_logo.svg" id="logo" alt="Logo Ramzes">
        <p id="ramzes">
          <strong>Ramzes</strong>.io</p>
      </a>
      <nav>
        <a href="#">
          <strong>Explore</strong> ICOs</a>
        <a href="#">
          <strong>Submit</strong> ICOs</a>
        <a href="#">
          <strong>Token</strong> Market</a>
      </nav>
    </div>
  </header>
  <section id="transaction_board">
      <div class="container">
        <p id="transaction_message" style="display: none">Your transaction has been successful! You have bought
          <span id="token_bought" style="font-weight: 600">1 FICC</span> for
          <span id="fiat_paid" style="font-weight: 600">300 PLN</span>. Waiting for balance update...</p>
        <div id="ico_list_container">
          <p id="ico_list_heading">ICO list</p>
          <ul id="ico_list">
            <li>
              <img src="http://via.placeholder.com/66x66">
              <div>
                <p class="ico_name">FAJNE ICO COMPANY</p>
                <p>
                  <strong>PLN: </strong>300</p>
                <p>
                  <strong>Tokens left: </strong>821</p>
              </div>
            </li>
            <li>
              <img src="http://via.placeholder.com/66x66">
              <div>
                <p class="ico_name">FAJNE ICO COMPANY</p>
                <p>
                  <strong>PLN: </strong>300</p>
                <p>
                  <strong>Tokens left: </strong>821</p>
              </div>
            </li>
            <li>
              <img src="http://via.placeholder.com/66x66">
              <div>
                <p class="ico_name">FAJNE ICO COMPANY</p>
                <p>
                  <strong>PLN: </strong>300</p>
                <p>
                  <strong>Tokens left: </strong>821</p>
              </div>
            </li>
            <li>
              <img src="http://via.placeholder.com/66x66">
              <div>
                <p class="ico_name">FAJNE ICO COMPANY</p>
                <p>
                  <strong>PLN: </strong>300</p>
                <p>
                  <strong>Tokens left: </strong>821</p>
              </div>
            </li>
          </ul>
        </div>
        <div id="transaction_menu">
          <p>Enter your Ethereum wallet address:</p>
          <input type="text" onClick="this.setSelectionRange(0, this.value.length)" name="eth_wallet" value="wallet address">
          <p>Please input:</p>
          <div id="dupa">
            <p>PLN to spend</p>
            <div>
              <p id="fiat_name">PLN:</p>
              <input type="text" onClick="this.setSelectionRange(0, this.value.length)" name="fiat_amount" value="300" disabled>
            </div>
          </div>
          <div>
            <p>or</p>
          </div>
          <div id="dupa2">
            <p>tokens to buy</p>
            <div>
              <p id="token_name">FICC:</p>
              <input type="text" onClick="this.setSelectionRange(0, this.value.length)" name="token_amount" value="1.00">
              <p id="crypto_in_stock">
                <strong>max.</strong> 822.00</p>
            </div>
          </div>
          <input id="submit" type="submit" name="confirm_transaction" value="Submit">
          <p id="security_info">Your payment will be securely processed by a Dotpay third-party.</p>
        </div>
      </div>
      <div id="particles-js"></div>
    </section>
</div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  created() {
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,600");
strong {
  font-weight: 600; }

body {
  padding: 0;
  margin: 0;
  background-color: #1e0038;
  font-family: Raleway;
  font-weight: 400; }

body p::selection, body input::selection, body stron::selection {
  background: rgba(255, 255, 255, 0.4); }

body input::-webkit-outer-spin-button, body input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  /* <-- Apparently some margin are still there even though it\'s hidden */ }

#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99%;
  z-index: -100; }

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 85px;
  background-color: rgba(10, 10, 10, 0.7);
  color: #fff;
  z-index: 100; }

.container {
  position: relative;
  margin: 0 auto;
  width: 1300px;
  height: auto; }

#navbar {
  height: 85px; }
  #navbar a {
    display: inline-block;
    margin-left: 40px;
    padding: 5px;
    color: #fff;
    text-decoration: none;
    font-size: 24px; }
    #navbar a :hover {
      opacity: 0.7; }

#logo, #ramzes, nav {
  position: absolute;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  -moz-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  -o-transform: translate(0, -50%);
  transform: translate(0, -50%); }

#logo {
  left: 0;
  width: 60px;
  height: 60px; }

#ramzes {
  margin: 0;
  left: 77px;
  font-size: 33px; }

nav {
  right: 0; }

#transaction_board {
  margin-top: 170px; }

#transaction_message {
  display: block;
  background-color: rgba(0, 200, 0, 0.8);
  color: #fff;
  width: 100%;
  padding: 10px;
  text-align: center;
  margin: 0 0 8px 0;
  border: 2px solid #0f0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; }

#ico_list_container {
  width: 420px; }

#ico_list_container, #transaction_menu {
  float: left; }

#ico_list_heading {
  display: block;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  height: 50px;
  margin: 0 0 8px 0;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  background-color: #e0e0e0; }

#ico_list {
  width: 100%;
  height: 520px;
  overflow-y: scroll;
  margin: 0;
  padding: 0 8px 0 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; }
  #ico_list li {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 12px;
    width: 100%;
    height: 90px;
    margin: 0 0 8px 0;
    opacity: 0.7;
    background-color: rgba(224, 224, 224, 0.7);
    cursor: pointer;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    -ms-transition: opacity 0.25s ease;
    -o-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease; }
    #ico_list li img, #ico_list li div {
      float: left; }
    #ico_list li div {
      font-size: 15px;
      padding: 0 0 0 10px; }
      #ico_list li div p {
        margin: 0; }
      #ico_list li div .ico_name {
        font-size: 19px;
        font-weight: 600;
        margin-bottom: 11px; }
  #ico_list li:hover {
    opacity: 0.8; }

#ico_list::-webkit-scrollbar {
  width: 10px; }

#ico_list::-webkit-scrollbar-track {
  background: rgba(224, 224, 224, 0.4); }

#ico_list::-webkit-scrollbar-thumb {
  background: rgba(224, 224, 224, 0.7); }

#ico_list::-webkit-scrollbar-thumb:hover {
  background: #e0e0e0; }

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
  margin: 0 0 0 40px; }
  #transaction_menu p, #transaction_menu input {
    text-align: center;
    font-size: 24px; }
  #transaction_menu > div {
    float: left;
    margin-right: 40px; }
    #transaction_menu > div > div {
      width: 190px; }
      #transaction_menu > div > div #token_name, #transaction_menu > div > div #fiat_name {
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
        border-radius: 8px 0 0 8px; }
      #transaction_menu > div > div #crypto_in_stock {
        font-size: 16px;
        z-index: -50; }
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
        padding: 10.25px 0; }
      #transaction_menu > div > div > input:focus {
        color: white; }
  #transaction_menu #dupa {
    margin-left: 157px; }
  #transaction_menu #dupa2 {
    margin-right: 157px; }
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
    -webkit-transition: all .25s ease;
    -moz-transition: all .25s ease;
    -ms-transition: all .25s ease;
    -o-transition: all .25s ease;
    transition: all .25s ease; }
  #transaction_menu input[name="confirm_transaction"]:hover {
    background-color: white;
    color: #1e0038; }

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
  margin-bottom: 30px; }

input[name="eth_wallet"]:focus {
  color: white; }

#security_info {
  font-size: 16px !important;
  position: absolute;
  width: 100%;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 0); }

.current_ICO {
  opacity: 1 !important; }
</style>
