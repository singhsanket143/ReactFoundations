const regex = /^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

function validatePassword(string) {
  if (string.length < 8) {
    return false;
  }

  if (!regex.test(string)) {
    return false;
  }

  return true;
}

export default validatePassword;