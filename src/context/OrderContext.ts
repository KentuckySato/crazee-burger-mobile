import {createContext} from 'react';
import {Product, ProductId, ProductQuantity, Products} from '../enums/product';
import {EMPTY_PRODUCT} from '../enums/product';

export type OrderContextType = {
  username: string;
  isModeAdmin: boolean;
  setIsModeAdmin: (setIsModeAdmin: boolean) => void;

  currentTabSelected: string;
  setCurrentTabSelected: (currentTabSelected: string) => void;

  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;

  menu: Products;
  handleAddMenuProduct: (product: Product, username: string) => void;
  handleDeleteMenuProduct: (id: ProductId, username: string) => void;
  handleEditMenuProduct: (product: Product, username: string) => void;
  resetMenu: (username: string) => void;

  newProduct: Product;
  setNewProduct: (newProduct: Product) => void;

  productSelected: Product;
  setProductSelected: (productSelected: Product) => void;
  handleProductSelected: (id: ProductId) => void;

  titleFieldRef: React.MutableRefObject<HTMLInputElement | null>;

  basket: ProductQuantity[];
  setBasket: (basket: ProductQuantity[]) => void;
  handleAddBasketProduct: (id: ProductId, username: string) => void;
  handleDeleteBasketProduct: (id: ProductId, username: string) => void;
};

export const OrderContext = createContext<OrderContextType>({
  username: '',
  isModeAdmin: false,
  setIsModeAdmin: () => false,

  currentTabSelected: 'add',
  setCurrentTabSelected: () => '',

  isCollapsed: false,
  setIsCollapsed: () => false,

  menu: [],
  handleAddMenuProduct: () => '',
  handleDeleteMenuProduct: () => '',
  handleEditMenuProduct: () => '',
  resetMenu: () => {},

  newProduct: EMPTY_PRODUCT,
  setNewProduct: () => '',

  productSelected: {...EMPTY_PRODUCT},
  setProductSelected: () => {},
  handleProductSelected: () => {},

  titleFieldRef: {current: null},

  basket: [],
  setBasket: () => [],
  handleAddBasketProduct: () => '',
  handleDeleteBasketProduct: () => '',
});
