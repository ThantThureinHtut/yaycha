import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/ui/pagination";
import { router } from "@inertiajs/react";

export default function PaginationBar({ links, search, filter }) {
    // Helper function to handle the click and keep your state (Search/Filter)
    const handlePageChange = (e, url) => {
        e.preventDefault(); // Stop the browser from reloading
        if (url) {
            router.get(
                url,
                { search: search, filter: filter },
                { preserveState: true, preserveScroll: true }
            );
        }
    };

    return (
        <Pagination>
            <PaginationContent>
                {links.map((link, index) => {
                    // 1. Clean up the labels (Laravel sends "&laquo; Previous")
                    // We change them to simple text so Shadcn UI can handle the arrows
                    const isPrevious = link.label.includes("Previous");
                    const isNext = link.label.includes("Next");
                    const isEllipsis = link.label == '...' ;

                    // CASE A: The "..." Dots
                    if (link.url == null && isEllipsis) {

                        return (
                            <PaginationItem key={index}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        );
                    }

                    // CASE B: The "Previous" Button
                    if (isPrevious) {
                        return (
                            <PaginationItem key={index}>
                                <PaginationPrevious
                                    href={link.url || "#"}
                                    onClick={(e) =>
                                        handlePageChange(e, link.url)
                                    }
                                    // Disable if url is null (You are on Page 1)
                                    className={
                                        !link.url
                                            ? "pointer-events-none opacity-50"
                                            : "cursor-pointer"
                                    }
                                />
                            </PaginationItem>
                        );
                    }

                    // CASE C: The "Next" Button
                    if (isNext) {
                        return (
                            <PaginationItem key={index}>
                                <PaginationNext
                                    href={link.url || "#"}
                                    onClick={(e) =>
                                        handlePageChange(e, link.url)
                                    }
                                    // Disable if url is null (You are on the last page)
                                    className={
                                        !link.url
                                            ? "pointer-events-none opacity-50"
                                            : "cursor-pointer"
                                    }
                                />
                            </PaginationItem>
                        );
                    }

                    // CASE D: Standard Page Numbers (1, 2, 3...)
                    return (
                        <PaginationItem key={index}>
                            <PaginationLink
                                href={link.url || "#"}
                                isActive={link.active} // Highlights the current page
                                onClick={(e) => handlePageChange(e, link.url)}
                            >
                                {/* Render the number (e.g., "1") */}
                                {link.label}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}
            </PaginationContent>
        </Pagination>
    );
}
