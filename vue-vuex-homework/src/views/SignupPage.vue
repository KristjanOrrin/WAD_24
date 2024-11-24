<template>
  <div class="signup-container">
    <h2>Sign Up</h2>
    <form @submit.prevent="validateForm">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          @input="validatePassword"
        />
        <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignupPage",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      passwordError: "",
    };
  },
  methods: {
    validatePassword() {
      const password = this.password;
      let error = "";

      if (password.length < 8 || password.length > 15) {
        error += "Password must be 8-15 characters long. ";
      }
      if (!/[A-Z]/.test(password)) {
        error += "Password must include at least one uppercase letter. ";
      }
      if (!/[a-z].*[a-z]/.test(password)) {
        error += "Password must include at least two lowercase letters. ";
      }
      if (!/\d/.test(password)) {
        error += "Password must include at least one number. ";
      }
      if (!/^([A-Z])/.test(password)) {
        error += "Password must start with an uppercase letter. ";
      }
      if (!/_/.test(password)) {
        error += "Password must include an underscore (_). ";
      }

      this.passwordError = error || null;
    },
    validateForm() {
      this.validatePassword();
      if (!this.passwordError) {
        alert("Form submitted successfully!");
      } else {
        alert("Please fix the password issues before submitting.");
      }
    },
  },
};
</script>

<style scoped>
.signup-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
.error-message {
  color: red;
  font-size: 0.9em;
}
</style>
