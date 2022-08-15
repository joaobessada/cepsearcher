const input = document.querySelector('input[type="tel"]');
const button = document.querySelector('button');

const result = document.querySelector('.result');
const thumbsup = document.querySelector('img');

button.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  //const url = 'https://viacep.com.br/ws/' + input.value + '/json/';
  const final = fetch('https://viacep.com.br/ws/' + input.value + '/json/');
  final
    .then((r) => r.json())
    .then((body) => {
      result.innerText = `Seu endereço é ${body.uf} - ${body.localidade}, ${body.logradouro}, ${body.bairro}`;
      result.classList.add('active');
      thumbsup.classList.add('active');
    });
}
