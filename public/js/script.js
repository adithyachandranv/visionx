// Function to fetch and render snippets dynamically
async function fetchAndRenderSnippets() {
    try {
      // Fetch JSON data
      const response = await fetch('/snippets.json');
      if (!response.ok) {
        throw new Error('Failed to fetch snippets.');
      }
  
      const data = await response.json();
  
      // Get the container element
      const faqContainer = document.getElementById('faqContainer');
  
      // Clear existing content (if any)
      faqContainer.innerHTML = '';
  
      // Generate FAQ items for each snippet
      data.snippets.forEach((snippet, index) => {
        // Create a FAQ item
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');
  
        // Create the question button
        const questionButton = document.createElement('button');
        questionButton.classList.add('faq-question');
        questionButton.textContent = snippet.title;
  
        // Create the answer container
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('faq-answer', 'hidden');
  
        // Create the code content
        const codeContent = document.createElement('pre');
        codeContent.classList.add('code-content');
        codeContent.textContent = snippet.code;
  
        // Create the copy button
        const copyButton = document.createElement('button');
        copyButton.classList.add('copy-button');
        copyButton.textContent = 'Copy';
  
        // Append code content and copy button to answer
        answerDiv.appendChild(codeContent);
        answerDiv.appendChild(copyButton);
  
        // Append question and answer to the FAQ item
        faqItem.appendChild(questionButton);
        faqItem.appendChild(answerDiv);
  
        // Append the FAQ item to the container
        faqContainer.appendChild(faqItem);
  
        // Event listener to toggle the dropdown
        questionButton.addEventListener('click', () => {
          const isVisible = !answerDiv.classList.contains('hidden');
          document.querySelectorAll('.faq-answer').forEach((ans) => ans.classList.add('hidden')); // Close others
          if (!isVisible) {
            answerDiv.classList.remove('hidden');
          }
        });
  
        // Event listener for the copy button
        copyButton.addEventListener('click', () => {
          navigator.clipboard.writeText(snippet.code)
            .then(() => {
              alert('Code copied to clipboard!');
            })
            .catch((err) => {
              console.error('Failed to copy text:', err);
            });
        });
      });
    } catch (error) {
      console.error('Error fetching or rendering snippets:', error);
    }
  }
  
  // Initialize on page load
  document.addEventListener('DOMContentLoaded', fetchAndRenderSnippets);
  