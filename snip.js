async function fetchAndRenderSnippets() {
    try {
      const response = await fetch('/sniip.json');
      if (!response.ok) {
        throw new Error('Failed to fetch snippets.');
      }
      
      const data = await response.json();
  
      const faqContainer = document.getElementById('faqContainer');
      faqContainer.innerHTML = '';
  
      data.snippets.forEach((snippet, index) => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');
  
        const questionButton = document.createElement('button');
        questionButton.classList.add('faq-question');
        questionButton.innerHTML = `
          ${snippet.title}
          <span class="plus-icon">+</span>
        `;
  
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('faq-answer');
  
        const codeContent = document.createElement('pre');
        codeContent.textContent = snippet.code;
  
        const copyButton = document.createElement('button');
        copyButton.classList.add('copy-button');
        copyButton.textContent = 'Copy';
  
        answerDiv.appendChild(codeContent);
        answerDiv.appendChild(copyButton);
  
        faqItem.appendChild(questionButton);
        faqItem.appendChild(answerDiv);
        faqContainer.appendChild(faqItem);
  
        questionButton.addEventListener('click', () => {
          const isOpen = !answerDiv.style.display || answerDiv.style.display === 'none';
          document.querySelectorAll('.faq-answer').forEach((ans) => (ans.style.display = 'none'));
          answerDiv.style.display = isOpen ? 'block' : 'none';
        });
  
        copyButton.addEventListener('click', () => {
          navigator.clipboard.writeText(snippet.code).then(() => {
            alert('Code copied to clipboard!');
          });
        });
      });
    } catch (error) {
      console.error('Error fetching or rendering snippets:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', fetchAndRenderSnippets);
  