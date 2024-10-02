export enum FoodCategoryEnum {
    Appetizer = 'Appetizer',
    MainCourse = 'MainCourse',
    Dessert = 'Dessert',
    Beverage = 'Beverage',
    Salad = 'Salad',
    Soup = 'Soup',
    Snack = 'Snack',
    Sweet = 'Sweet'
}

// Mapeamento para as descrições em português
export const FoodCategoryDescriptions: Record<FoodCategoryEnum, string> = {
    [FoodCategoryEnum.Appetizer]: "Entrada",
    [FoodCategoryEnum.MainCourse]: "Prato Principal",
    [FoodCategoryEnum.Dessert]: "Sobremesa",
    [FoodCategoryEnum.Beverage]: "Bebida",
    [FoodCategoryEnum.Salad]: "Salada",
    [FoodCategoryEnum.Soup]: "Sopa",
    [FoodCategoryEnum.Snack]: "Lanche",
    [FoodCategoryEnum.Sweet]: "Doce"
};