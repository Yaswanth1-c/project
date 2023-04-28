// Define interfaces for the datatypes used in the applicatioin

interface User {
  id: string;
  name: string;
  email: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface AddToCartInput {
  productIds: string;
  quantity: number;
}
interface Order {
  id: string;
  items: CartItem[];
  totalPrice: number;
  status: string;
}

interface CartItem {
  id: string;
  name: string;
  quantity: number;
}

interface CreateOrderInput {
  items: { id: string }[];
  status: string;
}

interface Query {
  products: Product[];
  orders: Order[];
  order: Order | undefined;
  userOrders: Order[];
}

interface ProductInput {
  name: string;
  description: string;
  price: number;
  image: string;
}

interface UpdateProductInput {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
}

interface UpdateOrderStatusInput {
  id: string;
  status: string;
}

interface Mutation {
  createProduct: (input: ProductInput) => Product;
  updateProduct: (input: UpdateProductInput) => Product;
  deleteProduct: (id: string) => boolean;
  createOrder: (input: CreateOrderInput) => Order;
  updateOrderStatus: (input: UpdateOrderStatusInput) => Order;
  signUp: (name: string, email: string, password: string) => string;
  signIn: (email: string, password: string) => string;
  signOut: () => boolean;
}
// Define a Graphql query and mutation schema using SDL
const typeDefs = `
    type User {
      id: ID!
      name: String!
      email: String!
      password: String!
    }
    
    type Product {
      id: ID!
      name: String!
      description: String!
      price: Float!
      image: String!
    }
    
    type Cart {
      id: ID!
      items: [CartItem]
    }

    type CartItem {
      id: ID!
      product: Product!
      quantity: Int!
    }

    input CartItemInput {
      id: ID!
    }

    type Order {
      id: ID!
      items: [CartItem]
      totalPrice: Float!
      status: String
    }

    type Status {
      id: String
      message: String
      token: String
    }
    
    input UpdateCartItem {
      cartItemId: ID!
      quantity: Int!
    }
     
    input RemoveCartItemInput {
      cartItemId: ID!
    }

    
    type Query {
      products: [Product!]!
      getProduct(id: ID!): Product
      cart: [Cart]
      getCart(id: ID!):Cart
      orders: [Order!]!
      order(id: ID!): Order
      userOrders(userId: ID!): [Order!]!
    }
    
    input ProductInput {
      name: String!
      description: String!
      price: Float!
      image: String!
    }
    
    input UpdateProductInput {
      id: ID!
      name: String
      description: String
      price: Float
      image: String
    }

    input CreateOrderInput {
      items: [CartItemInput!]!
    }
   

    input UpdateOrderStatusInput {
      id: ID!
      status: String!
    }
   
    input PaymentInput {
      token: String
      amount: Float
    }

    type PaymentIntent {
      id: String
      clientSecret: String
      click_Here_To_MakePayment: String
    }

    type Response {
      message: String
    }
  
    type Mutation {
      createProduct(input: ProductInput!): Product!
      updateProduct(input: UpdateProductInput!): Product!
      deleteProduct(id: ID!): Status
      addToCart(productId: [ID!], quantity: Int!, userId: ID!): Cart
      updateCartItem(cartItemId: ID!, quantity: Int!):Cart
      removeCartItem(cartItemId: ID!): Cart
      createOrder(input: CreateOrderInput!): Order
      updateOrderStatus(input: UpdateOrderStatusInput!): Status
      deleteOrder(id: ID!): Status
      signUp( name:String!, email: String!, password: String!): Status
      signIn(email: String!, password: String!): Status
      signOut: Boolean!
      createPaymentIntent(orderId: String): PaymentIntent
      confirmPaymentIntent(paymentIntentId: String, token: String): PaymentIntent
    }`;

export { typeDefs };
export {
  CreateOrderInput,
  ProductInput,
  UpdateProductInput,
  UpdateOrderStatusInput,
};
