import { CustomInput } from "./custominput";

export default function Formulario() {
  const form = document.createElement('form');
  const inputs = [
    {
      idLabel: 'Nombre Paciente',
      labelTitle: 'NOMBRE PACIENTE',
      placeholderLabel: 'Nombre del Paciente',
    },
    {
      idLabel: 'Nombre Propietario',
      labelTitle: 'NOMBRE PROPIETARIO',
      placeholderLabel: 'Nombre del propietario',
    },
    {
      idLabel: 'Telefono',
      labelTitle: 'TELEFONO PROPIETARIO',
      placeholderLabel: 'Telefono del propietario',
    },
    {
      idLabel: 'Sintomas',
      labelTitle: 'Sintomas',
      placeholderLabel: 'Sintomas',
    },
  ];

  const formData = {};
  inputs.forEach((input) => {
    const customInput = CustomInput(input);
    customInput.querySelector('input').addEventListener('input', function (event) {
      formData[input.idLabel] = event.target.value;   
    });

    form.appendChild(customInput);
  });

  const button = document.createElement('button');
  button.textContent = 'Enviar'; 
  button.addEventListener('click', function (event) {
    event.preventDefault();
    
    console.log(formData);
  });

  form.appendChild(button);
  return form;
}
