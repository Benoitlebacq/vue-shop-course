import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    const items = ref<
      {
        id: number;
        quantity: number;
        price: number;
        name: string;
        size: string;
      }[]
    >([]);

    const addToCart = (
      productId: number,
      price: number,
      name: string,
      size: string,
    ) => {
      const existingItem = items.value.find(
        (item) => item.id === productId && item.size === size,
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.price = price * existingItem.quantity;
      } else {
        items.value.push({ id: productId, quantity: 1, price, name, size });
      }
    };

    const totalItems = computed(() =>
      items.value.reduce((total, item) => total + item.quantity, 0),
    );

    const totalPrice = computed(() =>
      items.value.reduce((total, item) => total + item.price, 0),
    );

    return { items, addToCart, totalItems, totalPrice };
  },
  { persist: true },
);
