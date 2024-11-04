{
    interface IProduct {
        id: number;
        name: string;
        price: number;
    }
    
    type OrderStatusType = 'accepted' | 'in progress' | 'delivered' | 'refused';
    
    type ProductInOrderType = {
        product: IProduct;
        count: number;
    }
    
    interface IOrder {
        id: number;
        status: OrderStatusType;
        products: ProductInOrderType[];
    
    }
    
    interface ICart {
        showCart: () => ProductInOrderType[];
        addProduct: (product: IProduct) => void;
        removeProduct: (product: IProduct) => void;
    }
    
    interface IOrderManager {
        changeOrderStatus: (id: number, newStatus: OrderStatusType) => void;
        showOrder: (id: number) => IOrder | null;
        checkOut: (order: IOrder) => void;
    }
    
    interface IProductManager {
        changeName: (name: string, id: number) => void;
        changePrice: (newPrice: number, id: number) => void;
        showProduct: <T extends string | number>(productDetail: T) => IProduct | null;
    }
    
    class Product implements IProduct {
        id: number;
        name: string;
        price: number;
    
        constructor(productSettings: IProduct) {
            const { name, price, id } = productSettings;
            this.name = name;
            this.price = price;
            this.id = id;
        }
    }
    
    class Order implements IOrder {
        id: number;
        products: ProductInOrderType[];
        status: OrderStatusType;
    
        constructor(id: number, products: ProductInOrderType[]) {
            this.id = id;
            this.products = products;
            this.status = 'accepted';
        }
    }
    
    class Cart implements ICart {
        private products: ProductInOrderType[];
        showCart: () => ProductInOrderType[];
        addProduct: (product: IProduct) => void;
        removeProduct: (product: IProduct) => void;
    
        constructor () {
            this.products = [];
    
            this.showCart = () => {
                return this.products;
            }
    
            this.addProduct = (product: IProduct) => {
                const isInCart = this.products.findIndex(position => position.product.id === product.id);
                if (isInCart !== -1) {
                    this.products[isInCart].count += 1;
                } else {
                    this.products.push({
                        product,
                        count: 1,
                    });
                }
            }
    
            this.removeProduct = (product: IProduct) => {
                const productInCart = this.products.findIndex(position => position.product.id === product.id);
                if (this.products[productInCart].count > 1) {
                    this.products[productInCart].count -= 1;
                } else {
                    this.products = this.products.filter(position => position.product.id !== product.id);
                }
            }
        }
    }
    
    class OrderManager implements IOrderManager {
        private orders: IOrder[];
        changeOrderStatus: (id: number, newStatus: OrderStatusType) => void;
        showOrder: (id: number) => IOrder | null;
        checkOut: (order: IOrder) => void;
    
        constructor() {
            this.orders = [];
            this.changeOrderStatus = (id: number, newStatus: OrderStatusType) => {
                const order = this.orders.findIndex(order => order.id === id);
                this.orders[order].status = newStatus;
            }
    
            this.showOrder = (id: number) => {
                return this.orders.find(order => order.id === id) || null;
            }
    
            this.checkOut = (order: IOrder) => {
                this.orders.push(order);
            }
        }
    }
    
    class ProductManager implements IProductManager {
        private products: IProduct[];
        changeName: (name: string, id: number) => void;
        changePrice: (newPrice: number, id: number) => void;
        showProduct: <T extends string | number>(productDetail: T) => IProduct | null;
    
        constructor(products: IProduct[]) {
            this.products = products;
    
            this.changeName = (name: string, id: number) => {
                const product = this.products.find(product => product.id === id);
    
                if (product) product.name = name;
            }
    
            this.changePrice = (newPrice: number, id: number) => {
                const product = this.products.find(product => product.id === id);
    
                if (product) product.price = newPrice;
            }
    
            this.showProduct = <T extends string | number>(productDetail: T) => {
                if (typeof productDetail === 'string') {
                    return this.products.find(product => product.name === productDetail) || null;
                }
    
                if (typeof productDetail === 'number') {
                    return this.products.find(product => product.id === productDetail) || null;
                }
    
                return null;
            }
        }
    }

    //Создание продуктов
    const bagProduct = new Product({
        name: 'Bag',
        price: 1000,
        id: 1,
    });
    const bedProduct = new Product({
        name: 'Bed',
        price: 1500,
        id: 2,
    });
    const TVProduct = new Product({
        name: 'TV',
        price: 3000,
        id: 3,
    });
    const productManager = new ProductManager([bagProduct, bedProduct, TVProduct]);
    
    //Работа с товарами
    console.log(productManager.showProduct(3));
    productManager.changeName('Red bag', 1);
    console.log(productManager.showProduct('Red bag'));
    productManager.changePrice(2500, 3);
    console.log(productManager.showProduct('TV'));
    
    //Работа с корзиной
    const cart = new Cart();
    cart.addProduct(bagProduct);
    console.log(cart.showCart());
    cart.addProduct(bedProduct);
    console.log(cart.showCart());
    cart.removeProduct(bagProduct);
    console.log(cart.showCart());
    cart.addProduct(bedProduct);
    console.log(cart.showCart());
    

    //Работа с заказами
    const orderManager = new OrderManager();
    const order1 = new Order(1, cart.showCart());

    orderManager.checkOut(order1);
    console.log(orderManager.showOrder(1));
    orderManager.changeOrderStatus(1, 'in progress');
    console.log(orderManager.showOrder(1));
}