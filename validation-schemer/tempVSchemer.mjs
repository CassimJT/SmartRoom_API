const tempVSchemer = {
    temp: {
      notEmpty: {
        errorMessage: "temp cannot be empty",
      },
      isFloat: {
        errorMessage: "temp must be a valid number",
      },
      toFloat: true, 
    },
  };
  
  export default tempVSchemer;
  