const container = document.querySelector("#container");
const iterator = 600;
for (let i = 0; i < iterator; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.cursor = "pointer";
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}
const getColor = () => {
  const colors = [
    "#5F4B8BFF",
    "#E69A8DFF",
    "#42EADDFF",
    "#CDB599FF",
    "#641E16",
    "#78281F",
    "#512E5F",
    "#4A235A",
    "#154360",
    "#0E6251",
    "#0B5345",
    "#0B5345",
    "#7D6608",
    "#7E5109",
    "#6E2C00",
    "#7B7D7D",
    "#FDFEFE",
    "#424949",
    "#2C3E50",
    "#800080",
  ];
  const idx = Math.floor(Math.random() * colors.length);
  return colors[idx];
};

const setColor = (element) => {
  const color = getColor();
  element.style.background = `${color}`;
  element.style.boxShadow = `0px 0px 2px ${color},0px 0px 10px ${color}`;
};
const removeColor = (element) => {
  element.style.background = `#1d1d1d`;
  element.style.boxShadow = "0 0 5px #1d1d1d";
};
