import './style.css';
import Header from './components/Header';
import Formulario from './components/formulario';

const veterinaria = {
  title: 'Veterinaria',
};

document.body.appendChild(Header(veterinaria));
document.body.appendChild(Formulario());

