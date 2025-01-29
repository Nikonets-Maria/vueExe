


<template>
  <div class="main_content">
  <div class="card">
    <div class="form_content">
      
      <form class="under_form">
        <hr className="line"></hr>
        <input v-model="formData.cardCVC" type="number" placeholder="CVC" class="cvc_input"/>
      </form> 

      <form @submit.prevent="addUserData(formData.cardHolder,
       formData.cardNumber,
        formData.cardMonth,
         formData.cardYear,
          formData.cardCVC )" class="card_form">
      
            <input v-model="formData.cardHolder" type="text" placeholder="Holder of card"/>
            <input v-model="formData.cardNumber" type="number" placeholder="Number of card"/>      
            <label class="valid">VALID THRU</label>
            <label class="card_content">
              <input v-model="formData.cardMonth" type="number" placeholder="MM" class="num_input"/>
              <label>/</label>
              <input v-model="formData.cardYear" type="number" placeholder="YY" class="num_input"/>
          </label>
          <input type="submit" value="Send" class="submit_btn"/>

      </form>
      <!-- <div>
        <h1>{{ formData.cardHolder }}</h1>
        <h2> {{ formData.cardNumber }}</h2>
        <h2> {{ formData.cardMonth }}</h2>
        <h2> {{ formData.cardYear }}</h2>
        <h2> {{ formData.cardCVC }}</h2>

        <h1>AAAAA</h1>
    </div> -->
      <img :src="cardImg" class="card_logo"/>

    </div>
 


    <img :src="cardLogo" class="logo"/>
    

  </div>
    

    <div class="table_contain">

        <table class="card_table">
          <thead class="table_head">
            <tr>
              <th><h4>NAME</h4></th>
              <th><h4>CARD NUMBER</h4></th>
              <th><h4>DATE EXPIRE</h4></th>
              <th><h4>CODE</h4></th>
            </tr>
          </thead>
          <tbody class="table_bdy">
            <tr v-for="item in usersData" :key="item.id" > 
              <td class="table_line">{{ item.name }}{{ item.firstName }}</td>
              <td class="table_line">{{ item.cardNumber }}</td>
              <td class="table_line">{{ item.dateExpire }}</td>
              <td class="table_line">{{ item.code }}</td>
            </tr>
          </tbody>
      </table>

    </div>

  </div>



</template>

<script >
import cardLogo from "../assets/images/logo.png"
import cardImg from "../assets/images/cardImg.png"
import cursor from "../assets/images/cursor.png"

export default {

  data(){
    return {
      cardLogo: cardLogo,
      cardImg: cardImg,
      cursor: cursor,
      formData:{
        cardHolder: "",//"Holder of card", 2 words
        cardNumber: null,//"Number of card", 16 num
        cardMonth: null,//"MM",  1-12
        cardYear: null,//"YY",  date? до "сегодня"
        cardCVC: null//"CVC",  *** 
      },

      usersData: [
        {id: 1, name: 'Jane Doe', cardNumber: 1234123412341234, dateExpire: 110121, code: 123},
        // {id: 2, name: 'John', firstName: 'Doe', cardNumber: 1234123412341234, dateExpire: 110121, code: 123},
        // {id: 3, name: 'John', firstName: 'Doe', cardNumber: 1234123412341234, dateExpire: 110121, code: 123},
        // {id: 5, name: 'John', firstName: 'Doe', cardNumber: 1234123412341234, dateExpire: 110121, code: 123},
        // {id: 6, name: 'John', firstName: 'Doe', cardNumber: 1234123412341234, dateExpire: 110121, code: 123},
        // {id: 7, name: 'John', firstName: 'Doe', cardNumber: 1234123412341234, dateExpire: 110121, code: 123},

      ]
      
    }
  },

  methods:{
    addUserData(name, cardNumber, cardMonth, cardYear, code){
      this.usersData.push({
        id: Date.now,
        name: name || 'John Doe', 
        cardNumber: cardNumber ||1234123412341234, 
        dateExpire: cardMonth+'/'+cardYear || '11/21', 
        code: code || 123
      })
    }

  }
}
</script>

<style scoped>

.table_contain{
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 28px;
    width: 810px;
    background-color: #95B0D8;
    padding: 20px;
    margin-bottom: 30%;
  }

  .card_table{
    width: 680px;
  }


  .table_head{
    background-color: #E5E5E5;
    color: #000;
  }

  .table_bdy{
    background-color: #FFFFFF;
  }

  .table_line{
    width: 170px;
    height: 40px;
    padding: 5px;
  }


  .main_content{
    background-color: #FFFFFF;
    width: 1000px;
    border-left: 1px solid black;
    border-right: 1px solid black;
  }

  .card{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .card_form{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    position: relative;
    top: -160px;
    right: 40px;
    padding: 20px;
    width: 388px;
    height: 239px;
    border-radius: 10px;
    background-color: #ECECEC;
    border-bottom: 3px solid rgb(177, 177, 177);
  }

  .card_content{
    display: flex;
    align-items: center;
  }

  .valid{
    margin-left: 10px;
  }

  input{
    color: #A0A0A0;
    width: 324px;
    height: 42px;
    margin-top: 105px;
    margin: 10px;
    border: 1px solid rgb(177, 177, 177);
    padding: 10px;

  }

  input:hover{
    border: 1px solid #176FC1;
    cursor:  url("../assets/images/cursor.png"), auto;
  }

  .num_input{
    width: 63px;
    height: 25px;
  }

  .cvc_input{
    position: relative;
    top: 100px;
    left: 280px;
    width: 63px;
    height: 25px;
  }

  .submit_btn{
    position: relative;
    top: 120px;
    right: 30px;

    color: #FFFFFF;
    background-color: #95B0D8;
    border: none;
    border-radius: 11px;
    width: 187px;
    height: 48px;
    margin: 5px;

  }

  .under_form{
    position: relative;
    top: 140px;
    left: 130px;

    width: 388px;
    height: 239px;
    border-radius: 10px;
    background-color: #C7C7C7;

  }

  .line{
    position: relative;
    top: 40px;
    background-color: #979797;
    height: 50px;
    margin-top: 40px;
    border: none;
  }

  .card_logo{
    position: relative;
    top: -282px;
    left: 200px;

    width: 150px;
  }
  
  .logo{
    height: 120px;
    margin-left: 120px;
    margin-right: -10px;
    margin-bottom: 50px;
  }

</style>
