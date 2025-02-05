
import * as yup from 'yup'

// const this_year = new Date().toISOString().split('T')[0] //YYYY-MM-DD // 2025-02-05
const this_year = new Date().toISOString().split('-')[0].slice(2,4)

export const validationSchema = yup.object({

    cardNumber: yup.string()
                .required('Required')
                .min(16, 'Invalid')
                .max(16, 'Invalid')
                ,
    cardHolder: yup.string()
                    .required('Required')
                    ,
    cardMonth: yup.number()
                    .required('Required')
                    .max(12, 'Invalid')
                    ,
    cardYear: yup.number()
                    .required('Required')
                    .min(this_year, 'Invalid')
                    ,
    cardCVC: yup.string()
                    .required('Required')
                    .min(3, 'Invalid')
                    .max(3, 'Invalid')
        ,

})

// 1 - Required / Invalid name - 2words
// 2 - Required / Invalid card number 4-visa 5-mc - 16chain
// mm(12) - yy(25) = Required / Invalid
// cvs - Required(3)

    // password: yup.string()
    //                 .required('Введите пароль')
    //                 .matches(/\w{8,}[!@#$%^&*()]+/,'Длинна 8 символов, наличие спец символа')
    //                 ,
    // secondPassword: yup.string()
    //                 .oneOf([yup.ref('password'), null], 'Пароли не совподают')
    //                 .required('Повторите  пароль')
    //                 ,