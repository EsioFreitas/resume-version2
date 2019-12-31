(function() {
  var container = document.querySelector(".exper__content");
  console.log(typeof experiences);

  Object.keys(experiences).forEach(ex => {
    console.log(experiences);
    let div = document.createElement("div");

    let title = document.createElement("h2");
    let titleText = document.createTextNode(experiences[ex].jobTitle);
    title.appendChild(titleText);

    let company = document.createElement("h3");
    let companyText = document.createTextNode(experiences[ex].company);
    company.appendChild(companyText);

    let duration = document.createElement("p");
    let durationleText = document.createTextNode(experiences[ex].duration);
    duration.appendChild(durationleText);

    let description = document.createElement("p");
    let descriptionText = document.createTextNode(experiences[ex].description);
    description.appendChild(descriptionText);

    div.appendChild(title);
    div.appendChild(company);
    div.appendChild(duration);
    div.appendChild(description);

    container.appendChild(div);
  });
})();
