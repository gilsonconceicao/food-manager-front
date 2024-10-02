import { ListPaginatation } from "@/services/@types/generic";
import { getListFoodAsync } from "@/services/Foods";
import { Food } from "@/services/Foods/Foods.type";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useFoodListQuery() {
    return useQuery({
        queryKey: ['food-get-list'], 
        enabled: true, 
        queryFn: async () => {
            const {  data } = await getListFoodAsync();
            return data as ListPaginatation<Food>; 
        }
    })
}