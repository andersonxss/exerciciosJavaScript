$(".container div").click(function (event) {
  const element = $(event.target).attr("class");
  $(".container div").removeClass("checked");
  $(`.${element}`).addClass("checked");
});
