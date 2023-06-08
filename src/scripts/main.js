import { localStorageUtil } from "./localStorageUtils";
export function SetClick(element,id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id);
    
    if (pushProduct) {
        element.classList.add('products-element__btn_active');
        element.innerHTML = 'Удалить из корзины';
    } else {
        element.classList.remove('products-element__btn_active');
        element.innerHTML = 'Добавить в корзину';
    }
}