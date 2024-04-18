import React from "react";
import { usePage } from "@inertiajs/inertia-react";
function Distributor() {
    const { error } = usePage().props;
    console.log(error);
    return <div>Distributor</div>;
}

export default Distributor;
