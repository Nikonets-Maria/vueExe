<template>

  <div class="main_content">
  <div class="card">
    <div class="form_content">



      <Form :validation-schema="validationSchema" @submit="addUserData(formData.cardHolder,
       formData.cardNumber,
        formData.cardMonth,
         formData.cardYear,
         String(formData.cardCVC).slice(-1) )"
        class="form_card">

        <div class="card_holder">
          <div class="light_card">

              <Field name="cardHolder" v-model="formData.cardHolder" type="text" placeholder="Holder of card"/>
              <ErrorMessage name="cardHolder" class="error_input_msg"/>
              <Field name="cardNumber" v-model="formData.cardNumber" type="number" placeholder="Number of card"/>      
              <ErrorMessage name="cardNumber" class="error_input_msg"/>


            <label class="valid">VALID THRU</label>
            <label class="card_content">
             
              <label class="y_m_card">

                <div class="error_field">
                  <Field name="cardMonth" v-model="formData.cardMonth" type="number" placeholder="MM" class="num_input"/>
                  <ErrorMessage name="cardMonth" class="error_msg"/>
                </div>

                <p>/</p>

                <div class="error_field">
                  <Field name="cardYear" v-model="formData.cardYear" type="number" placeholder="YY" class="num_input"/>
                  <ErrorMessage name="cardYear" class="error_msg"/>
                </div>
                
                <img :src="cardImg" class="card_logo"/>
             </label>
              
            </label>

          <input type="submit" value="Send" class="submit_btn"/>

          </div>

          <div class="dark_form">
            <hr className="line"></hr>
            <Field name="cardCVC" v-model="formData.cardCVC" type="number" placeholder="CVC" class="cvc_input"/>
            <ErrorMessage name="cardCVC" class="error_cvs_msg"/>
          </div>

        </div>

      </Form>

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
import { validationSchema } from '@/validationRules';
import { ErrorMessage, Field, Form } from 'vee-validate';

import cardLogo from "../assets/images/logo.png"
import cardImg from "../assets/images/cardImg.png"
import cursor from "../assets/images/cursor.png"

export default {
  components: {Field, ErrorMessage, Form},

  data(){
    return {
      validationSchema,

      cardLogo: cardLogo,
      cardImg: cardImg,
      cursor: cursor,
      formData:{
        cardHolder: "",//"Holder of card", 2 words
        cardNumber: '',//"Number of card", 16 num
        cardMonth: null,//"MM",  1-12
        cardYear: null,//"YY",  date? до "сегодня"
        cardCVC:  '',//"CVC",  *** 
      },

      usersData: [
        {id: 1, name: 'Jane Doe', cardNumber: 1234123412341234, dateExpire: "11/01", code: "**3"},

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
        code: "**"+code || "**1"
      })
    }

  }
}
</script>

<style scoped>

.error_msg{
  display: flex;
  justify-content: end;
  margin-right: 15px;
  color: rgb(255, 0, 0);
  font-size: 15px;
    
}

.error_input_msg{
  display: flex;
  justify-content: end;
  margin-right: 55px;
  color: rgb(255, 0, 0);
  font-size: 15px;

}

.error_cvs_msg{
  display: flex;
  justify-content: end;
  margin-right: 55px;
  margin-top: 110px;
  color: rgb(255, 0, 0);
  font-size: 15px;

}

.form_card{
  display: flex;
  justify-content: center;
  align-items: center;

}

.card_holder{
  margin-top: 100px;

}

.light_card{
    position: relative;
    z-index: 2;
    width: 410px;
    height: 280px;
    border-radius: 10px;
    background-color: #ECECEC;
    border-bottom: 3px solid rgb(177, 177, 177);
    padding: 10px;
}

.dark_form{
    position: relative;
    left: 142px;
    top: -300px;
    z-index: 1;
    
    width: 410px;
    height: 280px;
    border-radius: 10px;
    background-color: #C7C7C7;

}

.card_logo{
  width: 150px;
}

.card_content{
  display: flex;

}

.y_m_card{
  display: flex;
  justify-content: center;
  align-items: center;

}

  .table_line{
    width: 170px;
    height: 40px;
    padding: 5px;
  }

  .card{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .valid{
    margin-left: 10px;
  }

  input{
    color: #A0A0A0;
    width: 324px;
    height: 28px;
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
    top: 115px;
    left: 295px;
    width: 63px;
    height: 25px;
  }

  .submit_btn{
    color: #FFFFFF;
    background-color: #95B0D8;
    border: none;
    border-radius: 11px;
    width: 187px;
    height: 40px;
    margin: 5px;
    margin-top: 90px;

  }

  .line{
    position: relative;
    top: 40px;
    background-color: #979797;
    height: 50px;
    margin-top: 40px;
    border: none;
  }
  
  .logo{
    height: 120px;
    margin-left: 120px;
    margin-right: -10px;
    margin-bottom: 50px;
  }

  .main_content{
    background-color: #FFFFFF;
    width: 1000px;
    height: 90vh;
    border-left: 1px solid black;
    border-right: 1px solid black;
  }


  
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

</style>

      <!-- <Form :validation-schema="validationCVS" class="under_form">
        <hr className="line"></hr>
        <Field name="cardCVC" v-model="formData.cardCVC" type="number" placeholder="CVC" class="cvc_input"/>
        <ErrorMessage name="cardCVC" class="error_msg"/>
      </Form> 

      <Form 
      class="card_form">
      
            <Field name="cardHolder" v-model="formData.cardHolder" type="text" placeholder="Holder of card"/>
            <ErrorMessage name="cardHolder" class="error_msg"/>

            <Field name="cardNumber" v-model="formData.cardNumber" type="number" placeholder="Number of card"/>      
            <ErrorMessage name="cardNumber" class="error_msg"/>

            <label class="valid">VALID THRU</label>
            <label class="card_content">
              <Field name="cardMonth" v-model="formData.cardMonth" type="number" placeholder="MM" class="num_input"/>
              <ErrorMessage name="cardMonth" class="error_msg"/>

              <label>/</label>
              <Field name="cardYear" v-model="formData.cardYear" type="number" placeholder="YY" class="num_input"/>
              <ErrorMessage name="cardYear" class="error_msg"/>
          
            </label>
          <input type="submit" value="Send" class="submit_btn"/>

      </Form> -->