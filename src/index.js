import * as Prod from "./scripts/Products";
// import { productsPage } from "./scripts/Products";
import { localStorageUtil } from "./scripts/localStorageUtils";
import './styles/Products.css';
var productsPage = new Prod.Products();
productsPage.render();
Prod.handleSetLocationStorage();
// import './src/styles/styles.css'

