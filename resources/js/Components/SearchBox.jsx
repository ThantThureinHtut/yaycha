import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group";
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemFooter,
    ItemHeader,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item";

import { Link, router, useForm, usePage } from "@inertiajs/react";
import { ArrowUpIcon, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";

export default function SearchBox() {
    const {auth} = usePage().props;
    const [query, setQuery] = useState();
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const SearchTimeSet = setTimeout(() => {
            if (query) {
                axios
                    .post(route("user.search"), { query: query })
                    .then((res) => {
                        setUsers(res.data.users);
                        setOpen(true);
                    });
            } else {
                setUsers([]);
                setOpen(false);
            }
        }, 300);

        return () => {
            clearTimeout(SearchTimeSet);
        };
    }, [query]);
    return (
        <div className="w-full relative z-50">
            <div>
                <InputGroup>
                    <InputGroupInput
                        placeholder="Search..."
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <InputGroupAddon>
                        <Search />
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">
                        {users && users.length} Result
                    </InputGroupAddon>
                </InputGroup>
            </div>
            {open && (
                <div className=" absolute mt-2 w-full p-3 bg-white/60 dark:bg-secondary/60 shadow-sm backdrop-blur-sm rounded-b-lg flex flex-col gap-3 max-h-96 overflow-y-auto custom-scrollbar ">
                        {/* If user have , Show the search User Data */}
                        {users &&
                        users.map((user) => (
                            <div key={user.id}>
                                <Link href={user.id !== auth.user.id ? route("account.show" , {id: user.id}) : route("account.dashboard") }>
                                    <Item variant="outline">
                                        <ItemMedia />
                                        <ItemContent>
                                            <div className="flex gap-3 items-center">
                                                <div>
                                                    <Avatar>
                                                        <AvatarImage
                                                            src={
                                                                user.avatar_url
                                                            }
                                                        />
                                                    </Avatar>
                                                </div>
                                                <div>
                                                    <ItemTitle>
                                                        {user.name}
                                                    </ItemTitle>
                                                    <ItemDescription>
                                                        {user.username}
                                                    </ItemDescription>
                                                </div>
                                            </div>
                                        </ItemContent>
                                        <ItemActions />
                                    </Item>
                                </Link>
                            </div>
                        ))}

                        {/* Not Found Message Show there is no data return */}
                      {users.length === 0 && <h1 className="text-center text-lg ">Not Found</h1>}
                </div>
            )}
        </div>
    );
}
