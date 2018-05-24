<template>
  <div id="ico_list_container">
    <p id="ico_list_heading">ICO list</p>
    <ul id="ico_list">
      <li
        v-for="(token,index) in tokens"
        :key="index">
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

// let currentTokenPrice = null;


// const getTokensURL = 'http://206.189.48.168:8081/api/getTokens';
// let tokens = $.ajax({
//   url: getTokensURL,
// }).done((res) => {
//   $('#ico_list').empty();
//   tokens = JSON.parse(res);
//   $.each(tokens, (i, val) => {
//     const newListElem = `
//             <li id=${val._id}>
//                 <img src='http://via.placeholder.com/66x66'>
//                 <div>
//                 <p class="ico_name">${val.token}</p>
//                 <p>
//                     <strong>${val.currency}: </strong>${val.value}</p>
//                 <p>
//                     <strong>Tokens left: </strong>${val.ourSupply}</p>
//                 </div>
//             </li>`;
//     $('#ico_list').append(newListElem);
//     $(`#${val._id}`).click(() => {
//       selectToken(val._id, val.value, val.ourSupply, val.symbol);
//     });
//   });
//   console.log($('#ico_list').first());
//   $('li').first().trigger('click');
// });

// function selectToken(id, value, supply, symbol) {
//   currentTokenPrice = value;
//   $.each($('li'), (i, el) => {
//     if (el.id === id) {
//       $(el).addClass('current_ICO');
//     } else {
//       $(el).removeClass('current_ICO');
//     }
//   });

//   $('#token_name').html(symbol);
//   $('#crypto_in_stock').html(`<strong>max.</strong> ${supply}`);
// }

import axios from 'axios';

export default {
  name: 'IcoListContainer',
  data() {
    return {
      tokens: [],
      errors: [],

    };
  },
  async created() {
    // async / await version (created() becomes async created())
    //
    try {
      const response = await axios.get('http://167.99.141.77:8081/api/tokens');
      console.log(response);
      this.tokens = response.data;
    } catch (e) {
      this.errors.push(e);
    }
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

