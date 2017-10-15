var DALL0078 = {
  init: function () {
    let divBox = document.createElement("div");
    divBox.classList.add("box");
    divBox.textContent = "DALL0078";
    document.getElementById("boxes").appendChild(divBox);

    divBox.addEventListener("mouseover", DALL0078.mousFunc);
    divBox.addEventListener("mouseout", DALL0078.mousFunc);
    divBox.addEventListener("click", function (ev) {
      ev.currentTarget.style.backgroundColor = "#000";
      ev.currentTarget.style.color = "#FFF";
      ev.currentTarget.style.border = "0.2em groove #53A";
    });
  },
  mousFunc: function (ev) {
    ev.currentTarget.classList.toggle("highlight");
  }
};
