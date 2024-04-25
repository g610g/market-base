import { Link } from "@inertiajs/inertia-react";
import React from "react";

function Pagination({ links, nextPage, prevPage }) {
    return (
        <nav aria-label="Page navigation example" className="max-w-full">
            <ul class="flex items-center -space-x-px h-8 text-sm">
                <li>
                    <Link
                        href={prevPage}
                        class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 hover:bg-gray-600 bg-gray-800   border-gray-700  hover:text-white"
                    >
                        <span class="sr-only">Previous</span>
                        <svg
                            class="w-2.5 h-2.5 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                    </Link>
                </li>
                {links
                    .filter(
                        (link) =>
                            link.label != "&laquo; Previous" &&
                            link.label != "Next &raquo;"
                    )
                    .map((link) => (
                        <li>
                            <Link
                                href={link.url}
                                class={`flex items-center justify-center ${
                                    link.active
                                        ? "bg-orangeButton hover:bg-orangeButton"
                                        : "bg-gray-800 hover:bg-gray-700"
                                } px-3 h-8 leading-tight   hover:bg-gray-100   border-gray-700 text-gray-400  hover:text-white`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                <li>
                    <Link
                        href={nextPage}
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 hover:bg-gray-600 bg-gray-800   border-gray-700  hover:text-white"
                    >
                        <span class="sr-only">Next</span>
                        <svg
                            class="w-2.5 h-2.5 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
