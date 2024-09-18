// Step 1: Add event handler
document.getElementById('login-btn').addEventListener('click',function(event){
//    Prevent default behavior (prevent reloading Browser)
    event.preventDefault();
    console.log('hello');
    // get the phone number
    const phoneNumber=document.getElementById('phone-number').value
    console.log(phoneNumber)
    
})