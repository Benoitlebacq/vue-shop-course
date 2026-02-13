<script setup lang="ts">
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
</script>

<template>
  <div class="cart-container">
    <h3>Mon Panier</h3>
    <p v-if="cartStore.items.length === 0">Le Panier est vide</p>
    <ul v-else>
      <li v-for="item in cartStore.items" :key="item.id">
        {{ item.name }} {{ item.price }}€ x{{ item.quantity }}
      </li>
    </ul>
    <div class="total">
      <div class="total-detail">
        <strong>Total articles: {{ cartStore.totalItems }}</strong>
        <br />
        <strong>Prix total: {{ cartStore.totalPrice }}€</strong>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  padding: 1rem;
  background-color: var(--color-bg-basket);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  min-width: 350px;
  height: fit-content;
  align-self: flex-start;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.total {
  margin-top: auto;
  border-top: 1px solid #ccc;
  padding-top: 0.5rem;
}
.total-detail {
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
</style>
