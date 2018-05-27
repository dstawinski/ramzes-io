<template>
  <div id="dashboard">
    <dashboardHeader/>
    <transactionBoard/>
    <vue-particles
      :particle-opacity="0.7"
      :particles-number="150"
      :particle-size="3"
      :lines-width="1"
      :line-linked="true"
      :line-opacity="0.4"
      :lines-distance="150"
      :move-speed="3"
      :hover-effect="true"
      :click-effect="true"
      color="#ffffff"
      shape-type="circle"
      lines-color="#dedede"
      hover-mode="grab"
      click-mode="push" />
  </div>
</template>

<script>
import dashboardHeader from './dashboardHeader';
import transactionBoard from './txBoard';

export default {
  name: 'VueDashboard',
  components: {
    dashboardHeader,
    transactionBoard,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,600");
strong {
  font-weight: 600;
}

#dashboard {
  padding: 0;
  margin: 0;
  background-color: #1e0038;
  font-family: Raleway;
  font-weight: 400;
}

#dashboard p::selection,
#dashboard input::selection,
#dashboard strong::selection {
  background: rgba(255, 255, 255, 0.4);
}

#dashboard input::-webkit-outer-spin-button,
#dashboard input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  /* <-- Apparently some margin are still there even though it\'s hidden */
}

#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99%;
  z-index: -100;
}
</style>

