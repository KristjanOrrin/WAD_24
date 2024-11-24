<template>
    <div>
      <h1>Signup</h1>
      <form @submit.prevent="validatePassword">
        <div>
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            @input="validatePassword"
            placeholder="Enter your password"
          />
        </div>
        <div v-if="validationErrors.length > 0">
          <p>The password is not valid:</p>
          <ul>
            <li v-for="(error, index) in validationErrors" :key="index">{{ error }}</li>
          </ul>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        password: "",
        validationErrors: [],
      };
    },
    methods: {
      validatePassword() {
        const errors = [];
        const password = this.password;
  
        // Check conditions
        if (password.length < 8 || password.length > 15) {
          errors.push("Password should be between 8 and 15 characters.");
        }
        if (!/^[A-Z]/.test(password)) {
          errors.push("Password should start with an uppercase letter.");
        }
        if (!/[A-Z]/.test(password)) {
          errors.push("Password should include at least one uppercase alphabet character.");
        }
        if ((password.match(/[a-z]/g) || []).length < 2) {
          errors.push("Password should include at least two lowercase alphabet characters.");
        }
        if (!/\d/.test(password)) {
          errors.push("Password should include at least one numeric value.");
        }
        if (!/_/.test(password)) {
          errors.push('Password should include the character "_".');
        }
  
        // Update validation errors
        this.validationErrors = errors;
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    max-width: 400px;
    margin: 0 auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  label {
    display: block;
    margin-bottom: 0.5em;
  }
  input {
    width: 100%;
    padding: 0.5em;
    margin-bottom: 1em;
  }
  button {
    padding: 0.7em;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
  }
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  </style>
  