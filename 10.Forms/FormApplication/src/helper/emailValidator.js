const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 


function validateEmail(string) {
    if (!regex.test(string)) {
      return false;
    }
  
    return true;
  }
  
  export default validateEmail;