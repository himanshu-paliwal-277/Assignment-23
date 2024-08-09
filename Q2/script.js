// Q2. Write a JavaScript program to make an AJAX request using the XMLHttpRequest object to fetch data from a remote API (https://jsonplaceholder.typicode.com/users) and log a list of user names from the response to the browser console and output.

let get_user_button = document.getElementById("get_user_button");
let user_list = document.getElementById("user_list");

get_user_button.addEventListener("click", () => {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      var response = JSON.parse(xhr.responseText);
      console.log(response);
      let i = 1;
      response.forEach((user) => {
        let li = document.createElement("li");
        user_list.appendChild(li);
        li.innerHTML = `${i}. ${user.name}`;
        i++;
      });
    } else {
      console.error("Failed to load data. Status:", xhr.status);
    }
  };

  xhr.onerror = function () {
    console.error("Request failed.");
  };

  xhr.send();
});
