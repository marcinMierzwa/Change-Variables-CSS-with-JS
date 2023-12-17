const image = document.querySelector(".image");
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("change", updateValue);
  input.addEventListener("mousemove", updateValue);
});

function updateValue() {
  const suffix = this.dataset.size || "";
  image.style.filter = `${this.name}(${this.value}${suffix})`;
  image.style.transform = `${this.name}(${this.value / 100})`;
}
