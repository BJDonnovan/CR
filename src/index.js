import { Products } from "./scripts/Products";
import { CATALOG } from "./scripts/catalog";
// import { SetClick } from "./scripts/Products";
import './styles/styles.css';
const productsPage = new Products();
productsPage.render();
for(let i = 0;i<CATALOG.length;i++)
{
    var element = document.getElementById(CATALOG[i].id);
    element.onclick = productsPage.SetClick(element,CATALOG[i].id)
}



