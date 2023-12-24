const options = document.querySelectorAll("li");
for (let i = 0; i < options.length; i++) {
  options[i].onclick = () => {
    document.activeElement.blur();
  };
}
