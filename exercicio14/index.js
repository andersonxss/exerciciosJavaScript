let vertorBox = 0;
let vertorBoxItem = 0;
let box = document.querySelectorAll("ul");
let limitBoxes = document.querySelectorAll("ul").length - 1;
let allLimitElementsBox;

function setSelectBoxs() {
  this.addEventListener("keydown", (e) => {
    setActionkeydown(e);

    //Remover a classe selected da lista dos boxs
    for (let index = 0; index < box.length; index++) {
      for (i = 0; i <= box[index].childElementCount - 1; i++) {
        box[index].children[i]?.classList.remove("selected");
      }
    }

    //Adicionar a classe selected no item selecionado
    box[vertorBox].children[vertorBoxItem]?.classList.add("selected");
  });
}

function setActionkeydown(e) {
  switch (e.key) {
    case "ArrowUp":
      if (vertorBox > 0) {
        vertorBox--;
      }
      console.log("Seta para cima");
      break;
    case "ArrowDown":
      if (vertorBox < limitBoxes) {
        vertorBox++;
      }
      console.log("Seta para baixo");
      break;
    case "ArrowLeft":
      if (vertorBoxItem > 0) {
        vertorBoxItem--;
      }
      console.log("Seta para esquerda");
      break;
    case "ArrowRight":
      if (vertorBoxItem < allLimitElementsBox) {
        vertorBoxItem++;
      }
      console.log("Seta para direita");
      break;
  }

  allLimitElementsBox = box[vertorBox].getElementsByTagName("li").length - 1;
}
