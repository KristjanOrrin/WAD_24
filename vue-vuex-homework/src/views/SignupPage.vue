<template>
  <div class="signup-wrapper">
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
        <div class="button-group">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
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
        this.$router.push("/"); // Suuna MainPage lehele
      } else {
        alert("Please fix the password issues before submitting.");
      }
    },
  },
};
</script>

<style scoped>
.signup-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh; /* Tagab nähtava footeri */
  background-color: #f4f4f9;
}

.signup-container {
  max-width: 400px;
  width: 100%;
  padding: 20px 30px; /* Lisatud sümmeetriline padding */
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  box-sizing: border-box; /* Lisatud box-sizing */
  background-color: #e98181;
}

h2 {
  text-align: center;
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
  width: calc(100% - 10px); /* Võtab kogu kasti laiuse */
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.button-group {
  display: flex;
  justify-content: center;
}

button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  font-size: 0.8em;
}
</style>
