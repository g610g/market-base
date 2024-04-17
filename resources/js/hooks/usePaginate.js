import { useState } from "react";

function usePaginate(items, pageLimit) {
    const [pageNumber, setPageNumber] = useState(0);
    const pageCount = Math.ceil(items.length / pageLimit);

    return { pageNumber, pageCount };
}
