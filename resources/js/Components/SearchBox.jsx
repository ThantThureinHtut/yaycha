import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group";
import { useForm } from "@inertiajs/react";
import { ArrowUpIcon, Search } from "lucide-react";

export default function SearchBox() {
    const {data , setData} = useForm({
        searchQuery: ''
    })
    return (
        <InputGroup >
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
                <Search />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
               12 results
            </InputGroupAddon>
        </InputGroup>
    );
}
