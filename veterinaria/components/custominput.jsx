export function CustomInput({ idLabel, labelTitle, placeholderLabel }) {
    const div = document.createElement('div');
    div.className = 'group';
  
    div.innerHTML = `
      <label for='${idLabel}'>${labelTitle}</label>
      <input placeholder='${placeholderLabel}' id='${idLabel}'>
    `;
  
    return div;
  }