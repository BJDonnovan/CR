import { CATALOG } from "./catalog";
export function render() {
        const PRODUCTS = document.getElementById('products');
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img }) => {
            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}" />
                    <span class="products-element__price">
                         ${price.toLocaleString()} RUB
                    </span>
                    <button class="products-element__btn">Добавить в корзину</button>
                </li>
            `;
        });

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        PRODUCTS.innerHTML = html;
    }
render();


