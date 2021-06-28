import React from "react";
import {Product} from "@/interfaces/Product";
import {Card, Image} from 'semantic-ui-react';

interface ProductItemProps {
  product: Product;
}

export const ProductCard: React.FC<ProductItemProps> = ({product}) => {

  const {
    picture,
    name,
    size,
    price,
  } = product;

  return (
    <Card>
      <Image
        wrapped
        src={picture}
      />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
      </Card.Content>
    </Card>
  );
};
