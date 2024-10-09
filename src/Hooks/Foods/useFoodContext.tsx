import { ListPaginatation } from "@/services/@types/generic";
import { createFoodAsync, getListFoodAsync, updateFoodAsync } from "@/services/Foods";
import { Food, FoodCreateDTO } from "@/services/Foods/Foods.type";
import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";

export function useFoodListQuery() {
    return useQuery({
        queryKey: ['food-get-list'], 
        enabled: true, 
        refetchOnMount: false, 
        refetchOnWindowFocus: false, 
        queryFn: async () => {
            const {  data } = await getListFoodAsync();
            return data as ListPaginatation<Food>; 
        }
    })
}

export function useCreateFoodMutate(onSuccess: () => void) {
    return useMutation({
        mutationFn: async (values: Food) => {
            const payload = {
                ...values, 
                urlImage: values?.url?.replace('https://', '')
            } as FoodCreateDTO
            return await createFoodAsync(payload)
        }, 
        onSuccess
    })
}

export function useUpdateFoodMutate(id: string, onSuccess: () => void) {
    return useMutation({
        mutationFn: async (values: Food) => {
            const payload = {
                ...values, 
                urlImage: values?.url?.replace('https://', '')
            } as FoodCreateDTO
            return await updateFoodAsync(id, payload)
        }, 
        onSuccess
    })
}