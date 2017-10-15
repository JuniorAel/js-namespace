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
      ev.currentTarget.style.border = "1.0em groove #53A";
      ev.currentTarget.style.textAlign = "center";
    });
    //FUN PART
    var divSteve = document.getElementById('boxes').firstElementChild;
    divSteve.textContent = "St3v3 <br>luv my Stud3nts <br>S2 S2 S2 S2";
    divSteve.addEventListener("mouseover", DALL0078.mousFunc);
    divSteve.addEventListener("mouseout", DALL0078.mousFunc);
  },
  mousFunc: function (ev) {
    ev.currentTarget.classList.toggle("highlight");
  }
};
