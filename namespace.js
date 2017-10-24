var DALL0078 = {
  init: function () {
    let divBox = document.createElement("div");
    divBox.classList.add("box");
    divBox.textContent = "DALL0078";
    document.getElementById("boxes").appendChild(divBox);

    divBox.addEventListener("mouseover", DALL0078.mousOver);
    divBox.addEventListener("mouseout", DALL0078.mousOut);
    divBox.addEventListener("click", function (ev) {
      ev.currentTarget.style.backgroundColor = "#000";
      ev.currentTarget.style.color = "#FFF";
      ev.currentTarget.style.border = "0.8em groove #53A";
      ev.currentTarget.style.textAlign = "center";
      ev.currentTarget.style.verticalAlign = "center";
    });
  },
  mousOver: function (ev) {
    ev.currentTarget.classList.toggle("highlight");
  },
  mousOut: function (ev) {
    ev.currentTarget.classList.toggle("highlight");
    ev.currentTarget.style= null;
  }
};
