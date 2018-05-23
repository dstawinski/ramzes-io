<template>
  <section id="transaction_board">
    <div class="container">
      <TransactionMessage/>
      <IcoListContainer/>
      <TransactionMenu/>
    </div>
  </section>
</template>

<script>
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

