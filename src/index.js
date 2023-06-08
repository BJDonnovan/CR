import { Products } from "./scripts/Products";
import { CATALOG } from "./scripts/catalog";
import { SetClick } from "./scripts/main";
import './styles/Products.css';
var productsPage = new Products();
productsPage.render();
for(let i = 0;i<CATALOG.length;i++)
{
    var element = document.getElementById(CATALOG[i].id);
    element.addEventListener('click',SetClick(element,CATALOG[i].id));
}



