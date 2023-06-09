import { Products } from "./scripts/Products";
import { CATALOG } from "./scripts/catalog";
import './styles/styles.css';
const productsPage = new Products();
productsPage.render();
CATALOG.forEach(({id}) => {
var element = document.getElementById(id);
    element.onclick = function(){productsPage.SetClick(element,id)} 
});


    




