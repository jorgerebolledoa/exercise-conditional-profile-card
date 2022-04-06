import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  let name = "Lucy";
  if (variables.name === null) {
    name = "Lucy";
  } else {
    name = variables.name;
  }
  let lastname = "Boilett";
  if (variables.lastname === null) {
    lastname = "Boilett";
  } else {
    lastname = variables.lastname;
  }
  let role = "Web Developer";
  if (variables.role === null) {
    role = "Web Developer";
  } else {
    role = variables.role;
  }
  let country = "USA";
  if (variables.country === null) {
    country = "USA";
  } else country = variables.country;
  let city = "Miami";
  if (variables.city === null) {
    city = "Miami";
  } else {
    city = variables.city;
  }
  let socialMediaPosition;
  if (variables.socialMediaPosition == `position-left`)
    socialMediaPosition = "position-left";
  else socialMediaPosition = "position-right";

  let twitter = "4geeksacademy";
  if (variables.twitter === null) {
    twitter = "4geeksacademy";
  } else {
    twitter = variables.twitter;
  }
  let github = "4geeksacademy";
  if (variables.github === null) {
    github = "4geeksacademy";
  } else {
    github = variables.github;
  }
  let linkedin = "4geeksacademy";
  if (variables.linkedin === null) {
    linkedin = "4geeksacademy";
  } else {
    linkedin = variables.linkedin;
  }
  let instagram = "4geeksacademy";
  if (variables.instagram === null) {
    instagram = "4geeksacademy";
  } else {
    instagram = variables.instagram;
  }

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${name} ${lastname}</h1>
          <h2>${role}</h2>
          <h3>${city},${country} </h3>
          <ul class="${socialMediaPosition}">
            <li><a href="https://twitter.com/${twitter}" target="_blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${github}" target="_blank"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${linkedin} target="_blank""><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${instagram}" target="_blank"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernamesn
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
