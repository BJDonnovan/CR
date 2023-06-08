import { CATALOG } from "./catalog";
import { LocalStorageUtil } from "./localStorageUtils";

export class Products {
    constructor() {
        this.localStorageUtil = new LocalStorageUtil();
        this.classNameActive = ' products-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handleSetLocationStorage() {
        console.log('1');
        // const { pushProduct, products } = this.localStorageUtil.putProducts(id);
        
        // if (pushProduct) {
        //     element.classList.add(this.classNameActive);
        //     element.innerHTML = this.labelRemove;
        // } else {
        //     element.classList.remove(this.classNameActive);
        //     element.innerHTML = this.labelAdd;
        // }
    }

    render() {
        const PRODUCTS = document.getElementById('products');
        const productsStore = this.localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img }) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' '+this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}" />
                    <span class="products-element__price">
                         ${price.toLocaleString()} Руб
                    </span>
                    <button id ="${id}" class="products-element__btn${activeClass}" onclick=" alert('Товар ${name} добавлен в корзину');  ">
                        ${activeText}
                    </button>
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

    
}

export function handleSetLocationStorage() {
    console.log('1');
    // const { pushProduct, products } = this.localStorageUtil.putProducts(id);
    
    // if (pushProduct) {
    //     element.classList.add(this.classNameActive);
    //     element.innerHTML = this.labelRemove;
    // } else {
    //     element.classList.remove(this.classNameActive);
    //     element.innerHTML = this.labelAdd;
    // }
}
