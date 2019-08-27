import './styles/base.css';
import './styles/header.css';
import './styles/products.css';
import './styles/hello.css';
import './styles/values.css';
import './styles/footer.css';
import './styles/form.css';
import './styles/description.css';
import { caruselInit } from './carusel';


if (typeof Mavo != "undefined") {
  Mavo.inited
  .then(() => Mavo.all[0].dataLoaded)
  .then(caruselInit);
} else {
  caruselInit();
}
