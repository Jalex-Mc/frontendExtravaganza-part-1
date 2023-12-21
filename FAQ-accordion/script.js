const dropdown = document.getElementsByClassName("accordion");
const buttons = document.getElementsByClassName("sideButton")

dropdown[0].focus()

for (i = 0; i < dropdown.length; i++) {
  let button = buttons[i]
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling; //this will find the element after this one, which would be the panel element
        panel = panel.children[0]
        if (panel.style.display === "flex") {
            panel.style.display = "none";
            button.src = "/styles/images/icon-plus.svg"
        } else {
            panel.style.display = "flex"
            panel.style.flexWrap = "wrap"
            button.src = "/styles/images/icon-minus.svg"

        }
    })
}

const len = dropdown.length

for (let i = 0; i < dropdown.length; i++) {
  let button = buttons[i]
  if (dropdown[i] === document.activeElement) {
    dropdown[i].addEventListener("keydown", function (event) {
      if (event.which === 40) {
        this.classList.toggle("active");
        let panel = this.nextElementSibling; //this will find the element after this one, which would be the panel element
        panel = panel.children[0];
        if (panel.style.display === "flex") {
          panel.style.display = "none";
          let next = dropdown[(i + 1) % len];
          button.src = "/styles/images/icon-plus.svg"
          next.focus()
        } else {
          panel.style.display = "flex";
          panel.style.flexWrap = "wrap";
          button.src = "/styles/images/icon-minus.svg"
        }
      }

      if (event.which === 38) {
        this.classList.toggle("active");
        let panel = this.nextElementSibling; //this will find the element after this one, which would be the panel element
        panel = panel.children[0];
        if (panel.style.display === "flex") {
          panel.style.display = "none";
          let next = dropdown[(i - 1) % len];
          if (!next.focus()) {
            next = dropdown[dropdown.length - 1]
          } else {
              next.focus()
          }
        button.src = "/styles/images/icon-plus.svg"

        } else {
          panel.style.display = "flex";
          panel.style.flexWrap = "wrap";
          button.src = "/styles/images/icon-minus.svg"
        }
      }

    });

    let next = dropdown[(i+1)%len]
    next.focus()
} 

}


