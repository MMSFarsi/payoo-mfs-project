// Step 1: Add event handler
document.getElementById('login-btn').addEventListener('click',function(event){
//    Prevent default behavior (prevent reloading Browser)
    event.preventDefault();
    console.log('hello');
    // get the phone number
    const phoneNumber=document.getElementById('phone-number').value
    console.log(phoneNumber)
    // get the pin code
    const pinCode=document.getElementById('pin-code').value;
    console.log(pinCode)

    if(phoneNumber==='01627079794' && pinCode==='552288'){
        window.location.href = '/home.html'
    }else{
        alert('wrong pass or pin')
    }
    
})