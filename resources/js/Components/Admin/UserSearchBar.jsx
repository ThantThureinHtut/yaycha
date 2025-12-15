import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/Components/ui/input-group";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import useSearchFilter from "../Hooks/useSearchFilter";
export default function UserSearchBar({
    search,
    setSearch,
    filter,
    setFilter,
    pageName,
}) {
    return (
        <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <InputGroup>
                <InputGroupAddon>
                    <Search />
                </InputGroupAddon>
                <InputGroupInput
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Seach..."
                />
            </InputGroup>
            <Select // 2. Bind the value to your state
                defaultValue={filter?.length <= 0 ? "default" : filter}
                // 3. Use 'onValueChange' to capture the selection
                onValueChange={(value) => setFilter(value)}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="sortAToZ">Sort A-Z</SelectItem>
                    <SelectItem value="oldUser">Old users</SelectItem>
                    {pageName == "user" && (
                        <div>
                            <SelectItem value="pending">
                                Status is Pending
                            </SelectItem>
                            <SelectItem value="success">
                                Status is Success
                            </SelectItem>
                        </div>
                    )}
                    <SelectItem value="loginByGoogle">
                        Login by Google
                    </SelectItem>
                    <SelectItem value="loginByManual">
                        Login by Manual
                    </SelectItem>
                </SelectContent>
            </Select>
        </form>
    );
}
