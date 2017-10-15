var DALL0078 = {
  init: function () {
    let divBox = document.createElement("div");
    divBox.classList.add("box");
    divBox.textContent = "DALL0078";
    document.getElementById("boxes").appendChild(divBox);

    divbox.addEventListener("mouseover", DALL0078.mousFunc);
    divbox.addEventListener("mouseout", DALL0078.mousFunc);
    divbox.addEventListener("click", function (ev) {
      ev.currentTarget.style.backgroundColor = "#000";
      ev.currentTarget.style.color = "#FFF";
      ev.currentTarget.style.border = "thick groove #666";
    });
  },
  mousFunc: function (ev) {
    ev.currentTarget.classList.toggle("highlight");
  }
}
