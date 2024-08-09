// Q6. Describe the purpose and usage of the localStorage and sessionStorage APIs in web development. Give suitable examples for each.

// Both localStorage and sessionStorage are part of the Web Storage API, which allows web applications to store data in the user's browser. Here’s a breakdown of their purposes and usage:

// localStorage :

// localStorage provides a way to store data with no expiration time. The data persists even when the user closes the browser or navigates to another page. This is useful for storing data that needs to be available across multiple sessions.

// Usage:
// Storing user preferences.
// Keeping track of items in a shopping cart.
// Saving user authentication tokens for persistent login.

// Example
localStorage.setItem("username", "Ram");

const username = localStorage.getItem("username");
console.log(username); // Output: Ram

localStorage.removeItem("username");

localStorage.clear();

// sessionStorage :

// sessionStorage provides a way to store data that is only available for the duration of the page session. The data is cleared when the page session ends, which is when the page is closed or reloaded. This is useful for storing data that should not persist beyond the current browsing session.

// Storing temporary data for the duration of a page visit.
// Keeping track of state in a single page application.
// Preserving data when navigating between pages within the same session.

// Example:
sessionStorage.setItem("age", "20");

const age = sessionStorage.getItem("age");
console.log(age); // Output: 20

sessionStorage.removeItem("age");

sessionStorage.clear();
