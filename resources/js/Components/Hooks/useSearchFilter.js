import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function useSearchFilter(routeName, filters , dataKey) {
    const [search, setSearch] = useState(filters.search || []);
    const [filter, setFilter] = useState(filters.filter || []);

    useEffect(() => {
        const timer = setTimeout(() => {
            router.get(
                route(routeName),
                {
                    search: search,
                    filter: filter,
                },
                {
                    preserveState: true, // Don't clear the search box while typing
                    preserveScroll: true, // Don't jump to the top
                    replace: true, // Don't fill the browser history with every letter typed
                    only: [dataKey],
                }
            );
        }, 300);

        return () => clearTimeout(timer);
    }, [search, filter]);

    return { search, setSearch, filter, setFilter };
}
