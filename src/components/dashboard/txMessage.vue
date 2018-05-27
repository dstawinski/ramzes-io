<template>
  <div
    id="transaction_message"
    style="display: none">
    Your transaction has been successful! You have bought
    <span
      id="token_bought"
      style="font-weight: 600">
      1 FICC
    </span>
    for
    <span
      id="fiat_paid"
      style="font-weight: 600">
      300 PLN
    </span>
    . Waiting for balance update...
  </div>
</template>

<script>
export default {
  name: 'TransactionMessage',
};
</script>

<style scoped>
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
  box-sizing: border-box;
}
</style>

