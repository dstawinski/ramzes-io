<template>
  <section id="transaction_board">
    <div class="container">
      <TransactionMessage/>
      <IcoListContainer
        :tokens="tokens"
        @token-change="updateToken"/>
      <TransactionMenu
        :token="selectedToken"/>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

import TransactionMessage from './txMessage';
import IcoListContainer from './icoListContainer';
import TransactionMenu from './txMenu';

export default {
  name: 'TransactionBoard',
  components: {
    TransactionMessage,
    IcoListContainer,
    TransactionMenu,
  },
  data() {
    return {
      tokens: [],
      selectedToken: {},
    };
  },
  async created() {
    try {
      const response = await axios.get('http://167.99.141.77:8081/api/tokens');
      this.tokens = response.data;
      this.selectedToken = this.tokens[0];
    } catch (e) {
      this.errors.push(e);
    }
  },
  methods: {
    updateToken(token) {
      this.selectedToken = token;
    },
  },


};
</script>

<style scoped>
.container {
  position: relative;
  margin: 0 auto;
  width: 1300px;
  height: auto;
}
#transaction_board {
  margin-top: 170px;
}
</style>

