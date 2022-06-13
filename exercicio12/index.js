let dadosList = [];

const addItemList = () => {
  let valueForm = document.querySelector(".formitem").value;
  if (valueForm) {
    dadosList.push(parseInt(valueForm));
    compare();
  }
};

const compare = () => {
  document.querySelector(".formitem").value = "";
  dadosList.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  document.querySelector(".container").innerHTML = JSON.stringify(dadosList);
};
