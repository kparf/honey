import './styles/base.css';
import './styles/header.css';
import './styles/products.css';
import './styles/hello.css';
import './styles/values.css';
import './styles/footer.css';
import { caruselInit } from './carusel';


Mavo.inited
.then(() => Mavo.all[0].dataLoaded)
.then(caruselInit);
