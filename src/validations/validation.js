import * as Yup from "yup"

Yup.setLocale({
  mixed:{
    required:"Bu alan doldurulması zorunlu alandır",
    oneOf:"Bu alanı işaretlemek zorundasınız"
  },
  string:{
    min:"Bu alanda minimum ${min} karakter olmalıdır",
    max:"Bu alanda maximum ${max} karakter olmalıdır"
  },
  
})


export default Yup