document.getElementById("two").onclick=function(){
    document.getElementById("two").style.pointerEvents="none";
    document.getElementById("two").style.opacity="0.5";
    document.querySelector(".responsive-search-bar").style.top="0px";
  }
  document.querySelector(".close").onclick=function(){
    document.getElementById("two").style.pointerEvents="auto";
    document.getElementById("two").style.opacity="1";
    document.querySelector(".responsive-search-bar").style.top="-300px";
  }

 // Retrieve the login button element
  const loginButton = document.querySelector(".login-button");

  // Add a click event listener to the login button
  loginButton.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default form submission
      
      // Get the input values for username and password
      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;
  
      // Add your login logic here
      if (/* Your login validation logic here */) {
          // Redirect the user to their dashboard or another page
          window.location.href = "dashboard.html";
      } else {
          // Display an error message or handle login failure
          alert("Login failed. Please check your credentials.");
      }
  });
  // Retrieve the signup button element
  const signupButton = document.querySelector(".signup-button");
  
  // Add a click event listener to the signup button
  signupButton.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default form submission
      
      // Get the input values for username, password, and confirm password
      const username = document.getElementById("signup-username").value;
      const password = document.getElementById("signup-password").value;
      const confirmPassword = document.getElementById("signup-confirm-password").value;
  
      // Add your signup logic here
      if (/* Your signup validation logic here */) {
          // Redirect the user to their profile or another page
          window.location.href = "profile.html";
      } else {
          // Display an error message or handle signup failure
          alert("Signup failed. Please check your information.");
      }
  });