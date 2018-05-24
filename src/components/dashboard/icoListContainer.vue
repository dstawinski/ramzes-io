<template>
  <div id="ico_list_container">
    <p id="ico_list_heading">ICO list</p>
    <ul id="ico_list">
      <li
        v-for="(token,index) in tokens"
        :key="index"
        :class="{ 'current_ICO': isActive[index] }"
        @click="makeActive(index)">
        <img src="http://via.placeholder.com/66x66">
        <div>
          <p class="ico_name">{{ token.token }}</p>
          <p>
          <strong>{{ token.currency }}: </strong>{{ token.value }}</p>
          <p>
          <strong>Tokens left: </strong>{{ token.ourSupply }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>


import axios from 'axios';

export default {
  name: 'IcoListContainer',
  data() {
    return {
      tokens: [],
      errors: [],
      isActive: [],
    };
  },
  async created() {
    // async / await version (created() becomes async created())
    //
    try {
      const response = await axios.get('http://167.99.141.77:8081/api/tokens');
      this.tokens = response.data;
      this.isActive = new Array(this.tokens.length);
      console.log(this.isActive);
    } catch (e) {
      this.errors.push(e);
    }
  },
  methods: {
    makeActive(index) {
      this.isActive = new Array(this.tokens.length);
      this.isActive[index] = true;
    },
  },
};
</script>

<style scoped>
#ico_list_container {
  width: 420px;
  float: left;
}

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
  background-color: #e0e0e0;
}

#ico_list {
  width: 100%;
  height: 520px;
  overflow-y: scroll;
  margin: 0;
  padding: 0 8px 0 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

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
  transition: opacity 0.25s ease;
}

#ico_list li img,
#ico_list li div {
  float: left;
}

#ico_list li div {
  font-size: 15px;
  padding: 0 0 0 10px;
}
#ico_list li div p {
  margin: 0;
}

#ico_list li div .ico_name {
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 11px;
}

#ico_list li:hover {
  opacity: 0.8;
}

#ico_list::-webkit-scrollbar {
  width: 10px;
}

#ico_list::-webkit-scrollbar-track {
  background: rgba(224, 224, 224, 0.4);
}

#ico_list::-webkit-scrollbar-thumb {
  background: rgba(224, 224, 224, 0.7);
}

#ico_list::-webkit-scrollbar-thumb:hover {
  background: #e0e0e0;
}

.current_ICO {
  opacity: 1 !important;
}
</style>

