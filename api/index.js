import axios from "axios"
import { useQuery } from "@tanstack/react-query"

export function usePersons({ page, pageSize, keepPreviousData, staleTime }) {
    return useQuery({
        queryKey: ['projects', page],
        queryFn: async () => {
            const { data } = await axios.get(
                `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${pageSize}`
            );
            return data
        },
        keepPreviousData: keepPreviousData ?? true,
        staleTime: staleTime ?? 10 * 1000,
    })
}