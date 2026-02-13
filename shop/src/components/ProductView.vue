<script setup lang="ts">
import type { ProductVariant } from "@/models/Product.model";
import { productService } from "@/services/productService";
import { useCartStore } from "@/stores/cart";
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps<{
  category: string;
}>();

const cartStore = useCartStore();
const selectedSize = ref<string | null>(null);
const loading = ref<boolean>(true);
const productData = ref<any>(null);
const selectedVariantIndex = ref<number>(0);

const loadData: () => Promise<void> = async () => {
  loading.value = true;
  try {
    productData.value = await productService.fetchByCategory(props.category);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const updateVariant = (index: number) => {
  selectedVariantIndex.value = index;
  selectedSize.value = null;
};

const onSelectSize = (size: string, quantity: number): void | undefined => {
  if (quantity === 0) return;
  selectedSize.value = size;
};

const availableSizes = computed(() => {
  if (!currentVariant.value?.stock) return [];
  return Object.entries(currentVariant.value.stock).map(([size, quantity]) => ({
    size,
    quantity,
  }));
});

const currentVariant = computed<ProductVariant | undefined>(() => {
  return productData.value?.variants[selectedVariantIndex.value];
});

const addToCart = () => {
  if (!currentVariant.value) return;
  if (!selectedSize.value) return;

  cartStore.addToCart(
    currentVariant.value.id,
    currentVariant.value.price,
    `${currentVariant.value.name} (${currentVariant.value.colorName} ${selectedSize.value.toUpperCase()})`,
    selectedSize.value,
  );
};

// lifecycle
watch(() => props.category, loadData);
onMounted(loadData);
</script>

<template>
  <div v-if="loading" class="product-display">Chargement ...</div>
  <div v-else-if="productData" class="product-display">
    <div class="product-image">
      <img :src="currentVariant?.image" :alt="currentVariant?.name" />
    </div>
    <div class="product-info">
      <h2 class="product-title">{{ productData.title }}</h2>
      <div class="product-variant-details">
        <div
          v-for="(variant, index) in productData.variants"
          :key="variant.id"
          @click="updateVariant(+index)"
          class="variant-color"
        >
          <div
            class="color-circle"
            :style="{ backgroundColor: variant.color }"
            :class="{ active: selectedVariantIndex === index }"
          />
          <span class="color-name">{{ variant.colorName }}</span>
        </div>
      </div>
      <div class="sizes">
        <div
          v-for="{ size, quantity } in availableSizes"
          :key="size"
          :class="{
            active: selectedSize === size,
            disabled: quantity === 0,
            size,
          }"
          @click="onSelectSize(size, quantity)"
        >
          {{ size.toUpperCase() }}
        </div>
      </div>
      <button
        class="button"
        :class="{
          disabledButton: !selectedSize,
        }"
        @click="addToCart"
      >
        Ajouter au Panier
      </button>
    </div>
  </div>
</template>

<style scoped>
.product-display {
  display: flex;
  gap: 3em;
  padding: 1rem;
}

.product-title {
  font-size: 32px;
  margin-bottom: 0.5rem;
}

.product-variant-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

.variant-color {
  display: flex;
  align-items: center;
  gap: 1em;
  cursor: pointer;
  transition: transform 0.2s;
}

.variant-color:hover {
  transform: translateX(5px);
}

.color-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid transparent;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

.color-circle.active {
  border-color: var(--color-text-muted);
  scale: 1.1;
}

.button {
  margin: 30px;
  background-color: #39495c;
  border-radius: 5px;
  font-size: 16px;
  width: 160px;
  height: 60px;
  color: white;
  padding: 14px;
  box-shadow:
    inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  text-align: center;
  cursor: pointer;
}

.disabledButton {
  background-color: #ccc;
  cursor: not-allowed;
}

img {
  height: 400px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #ddd;
}
.sizes {
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
}
.size {
  background-color: var(--color-bg-header);
  padding: 1em;
  border-radius: 15%;
  cursor: pointer;
  color: var(--color-text-main);
  min-width: 3em;
  transition: all 0.2s ease;
  border: 2px solid transparent;
}

.size:hover:not(.disabled) {
  transform: scale(1.05);
}

.size.active {
  transform: scale(1.15);
  border: 2px solid var(--color-primary);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
}

.size.disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
