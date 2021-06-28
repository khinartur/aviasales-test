import React from "react";
import {storiesOf} from '@storybook/react';
import {ProductCard} from "@/components/ProductCard/ProductCard";
import {Product} from "@/interfaces/Product";

const storyProduct: Product = {
  picture: 'https://veganrussian.ru/content/images/2021/04/cover-243.png',
  name: 'Батончик шоколадный, малиновый крем и печенье',
  weight: '55 г',
  price: 159,
};

const stories = storiesOf('ProductCard', module);

stories.add('Карточка товара', () => (
  <ProductCard
    product={storyProduct}
  />
));
