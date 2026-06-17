import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  
  addItem: (item) => {
    const currentItems = get().items;
    const existingItemIndex = currentItems.findIndex(
      (i) => i.id === item.id && i.size === item.size
    );

    if (existingItemIndex > -1) {
      const newItems = [...currentItems];
      newItems[existingItemIndex].quantity += item.quantity || 1;
      set({ items: newItems, isOpen: true });
    } else {
      set({ items: [...currentItems, { ...item, quantity: item.quantity || 1 }], isOpen: true });
    }
  },

  removeItem: (id, size) => {
    set({ items: get().items.filter((i) => !(i.id === id && i.size === size)) });
  },

  updateQuantity: (id, size, quantity) => {
    if (quantity === 0) {
      get().removeItem(id, size);
      return;
    }
    set({
      items: get().items.map((i) => 
        (i.id === id && i.size === size) ? { ...i, quantity } : i
      )
    });
  },

  clearCart: () => set({ items: [] }),

  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  }
}));
