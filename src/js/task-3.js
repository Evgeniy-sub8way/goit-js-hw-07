const inp = document.querySelector('#name-input');
const out = document.querySelector('#name-output');

const handleInput = (event) => {
    const value = event.target.value.trim();
    if (value === '') {
        out.textContent ='Anonymous';
    } else {
        
        out.textContent = value;
    }
};
inp.addEventListener('input', handleInput);
