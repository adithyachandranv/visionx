// JSON data for snippets
const snippets = {
    snippet1: "console.log('This is snippet 1');",
    snippet2: `
  function add(a, b) {
    return a + b;
  }
  console.log(add(2, 3));`,
    snippet3: `
  const greet = (name) => {
    return \`Hello, \${name}!\`;
  };
  console.log(greet('World'));`,
  };
  
  // DOM elements
  const dropdown = document.getElementById("snippetDropdown");
  const codeContainer = document.getElementById("codeContainer");
  const codeContent = document.getElementById("codeContent");
  const copyButton = document.getElementById("copyButton");
  
  // Event listener for dropdown selection
  dropdown.addEventListener("change", () => {
    const selectedValue = dropdown.value;
  
    if (selectedValue && snippets[selectedValue]) {
      codeContent.textContent = snippets[selectedValue];
      codeContainer.classList.remove("hidden");
    } else {
      codeContainer.classList.add("hidden");
    }
  });
  
  // Event listener for copy button
  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(codeContent.textContent)
      .then(() => {
        alert("Code copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  });
  