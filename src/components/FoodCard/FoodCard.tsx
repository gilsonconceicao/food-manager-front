/* eslint-disable @next/next/no-img-element */
import { Food } from "@/services/Foods/Foods.type";
import React from "react";
import {
  ActionsCardStack,
  ContentCardStack,
  FoodCardStack,
  ImageCard,
  LoveArea,
} from "./Food.style";
import { Button, Stack, Typography } from "@mui/material";
import { useControlMenu } from "@/Hooks/Zustand/useMenuControl";
import { AddShoppingCart, FavoriteBorderOutlined } from "@mui/icons-material";
import { formatCurrencyInCents } from "@/Helpers/Methods/StringMethods";
import { Actions } from "../Actions";

type FoodCardProps = {
  food: Food;
  handleAction: (action: string) => void;
};

export const FoodCard: React.FC<FoodCardProps> = ({
  food,
  handleAction,
}) => {
  const { isMobile } = useControlMenu();
  return (
    <FoodCardStack isMobile={isMobile}>
      <Stack>
        <ImageCard src={`https://${food.url}`} alt={food.name} />
      </Stack>
      <ContentCardStack>
        <Typography variant="h6" fontWeight="bold">
          {food.name}
        </Typography>
        <Typography variant="caption" pb={1} pt={1} fontWeight="normal">
          {food.description}
        </Typography>
      </ContentCardStack>
      <LoveArea>
        <Actions options={[
          { label: "Editar", action: () => handleAction('edit') },
        ]} />
      </LoveArea>

      <ActionsCardStack isMobile={isMobile}>
        <Button
          variant="contained"
          sx={{ borderRadius: "0" }}
          size="large"
          startIcon={<AddShoppingCart />}
        >
          Comprar
        </Button>
      </ActionsCardStack>
    </FoodCardStack>
  );
};
