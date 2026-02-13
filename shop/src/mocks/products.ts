import blueCapImg from "@/assets/img/casket_blue.webp";
import lightbrownCapImg from "@/assets/img/casket_beige.jpg";
import blackCapImg from "@/assets/img/casket_black.webp";
import blueJeanJacket from "@/assets/img/blue-jacket.jpg";
import lightBlueJeanJacket from "@/assets/img/light-blue-jacket.jpg";
import blueBoxer from "@/assets/img/blue-slip.png";
import lightbrownBoxer from "@/assets/img/beige-slip.png";
import blackbrownBoxer from "@/assets/img/black-slip.png";
import type { ProductCategory } from "@/models/Product.model";

export const productsData: Record<string, ProductCategory> = {
  caskets: {
    title: "Casquettes",
    variants: [
      {
        id: 1234,
        name: "Casquette",
        color: "#00738a",
        colorName: "Bleue",
        image: blueCapImg,
        price: 20,
        stock: {
          unique: 50,
        },
      },
      {
        id: 5678,
        name: "Casquette",
        color: "#A48D6E",
        colorName: "Beige",
        image: lightbrownCapImg,
        price: 20,
        stock: {
          unique: 10,
        },
      },
      {
        id: 9101,
        name: "Casquette",
        color: "#111",
        colorName: "Noire",
        image: blackCapImg,
        price: 20,
        stock: {
          unique: 0,
        },
      },
    ],
  },

  jackets: {
    title: "Vestes",
    variants: [
      {
        id: 999,
        name: "Veste",
        color: "#18202B",
        colorName: "Jean bleu",
        image: blueJeanJacket,
        price: 80,
        stock: {
          s: 2,
          m: 0,
          l: 1,
          xl: 2,
        },
      },
      {
        id: 1000,
        name: "Veste",
        color: "#6D8293",
        colorName: "Jean bleu clair",
        image: lightBlueJeanJacket,
        price: 80,
        stock: {
          s: 10,
          m: 15,
          l: 20,
          xl: 5,
          "2xl": 3,
        },
      },
    ],
  },
  boxers: {
    title: "Boxers",
    variants: [
      {
        id: 5689,
        name: "Boxer",
        color: "#00738a",
        colorName: "Boxer bleu",
        image: blueBoxer,
        price: 80,
        stock: {
          s: 2,
          m: 0,
          l: 1,
          xl: 2,
        },
      },
      {
        id: 98466,
        name: "Boxer",
        color: "#F3E3C7",
        colorName: "Boxer beige",
        image: lightbrownBoxer,
        price: 80,
        stock: {
          s: 0,
          m: 0,
          l: 20,
          xl: 5,
          "2xl": 3,
        },
      },
      {
        id: 98466,
        name: "Boxer",
        color: "#53595D",
        colorName: "Boxer noir",
        image: blackbrownBoxer,
        price: 80,
        stock: {
          s: 2,
          m: 4,
          l: 0,
          xl: 5,
          "2xl": 3,
        },
      },
    ],
  },
};
