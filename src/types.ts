export type Language = 'kg' | 'ru' | 'en';

export type CategoryId = 
  | 'all'
  | 'rolls'
  | 'pizza'
  | 'ramen'
  | 'tomyum'
  | 'breakfast'
  | 'asian'
  | 'salads'
  | 'drinks';

export interface Category {
  id: CategoryId | string;
  name: string;
  nameKg?: string;
  nameRu?: string;
  nameEn?: string;
  emoji: string;
  count?: number;
}

export interface Dish {
  id: string;
  name: string;
  nameKg?: string;
  nameRu?: string;
  nameEn?: string;
  category: CategoryId | string;
  description: string;
  descriptionKg?: string;
  descriptionRu?: string;
  descriptionEn?: string;
  ingredients: string[];
  ingredientsKg?: string[];
  ingredientsRu?: string[];
  ingredientsEn?: string[];
  weight: string;
  weightEn?: string;
  price: number;
  oldPrice?: number;
  image: string;
  isPopular?: boolean;
  isSpicy?: boolean;
  isHalal?: boolean;
  isNew?: boolean;
  isVeg?: boolean;
  calories?: number;
  preparationTime?: string;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
  notes?: string;
  selectedOptions?: {
    spicyLevel?: 'mild' | 'medium' | 'hot';
    extraSauce?: boolean;
    chopsticks?: number;
  };
}

export type OrderType = 'delivery' | 'pickup';
export type PaymentMethod = 'cash' | 'card' | 'card_courier' | 'mbank' | 'qr';
export type OrderStatus = 'pending' | 'cooking' | 'delivering' | 'completed' | 'received' | 'preparing' | 'on_the_way' | 'delivered';

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  totalAmount: number;
  orderType: OrderType;
  customerName: string;
  phone: string;
  address?: string;
  apartment?: string;
  floor?: string;
  intercom?: string;
  notes?: string;
  comment?: string;
  paymentMethod: PaymentMethod;
  status: OrderStatus;
  createdAt: string;
  deliveryTimeEstimated?: string;
  promoCode?: string;
}

export interface Promo {
  id: string;
  badge: string;
  title: string;
  description: string;
  discountText: string;
  code: string;
  image: string;
  bgGradient: string;
  minOrder?: number;
  categoryTrigger?: CategoryId | string;
}

export interface TableBooking {
  id: string;
  name: string;
  phone: string;
  guests: number;
  guestsCount?: number;
  date: string;
  time: string;
  occasion?: string;
  wishes?: string;
  createdAt?: string;
  status?: 'pending' | 'confirmed';
}
