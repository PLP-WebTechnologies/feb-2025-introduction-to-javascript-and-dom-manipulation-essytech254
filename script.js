// Change text content
document.getElementById("change-text-btn").addEventListener("click", () => {
    document.getElementById("dynamic-text").textContent = "The text has been updated!";
  });
  
  // Modify CSS style
  document.getElementById("toggle-style-btn").addEventListener("click", () => {
    document.body.style.backgroundColor =
      document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
  });
  
  // Add and remove an element
  const container = document.getElementById("element-container");
  
  document.getElementById("add-element-btn").addEventListener("click", () => {
    if (!document.getElementById("new-paragraph")) {
      const newPara = document.createElement("p");
      newPara.id = "new-paragraph";
      newPara.textContent = "I was added with JavaScript!";
      container.appendChild(newPara);
    }
  });
  
  document.getElementById("remove-element-btn").addEventListener("click", () => {
    const para = document.getElementById("new-paragraph");
    if (para) {
      container.removeChild(para);
    }
  });
  