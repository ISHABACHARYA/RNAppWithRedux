export const email_changed=(text)=>{
    return{
        type: 'email_changed',
        payload: text
    }
}

export const password_changed=(text)=>{
   return{ 
       type: 'password_changed',
       payload: text
}
}