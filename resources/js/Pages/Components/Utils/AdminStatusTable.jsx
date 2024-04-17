import React from "react";
import TrashIcon from "../../../assets/trash.svg?react";
function AdminStatusTable({ status }) {
    return (
        <div className="flex justify-between w-full">
            <p
                className={`py-3 px-4 rounded-md ${
                    status ? "text-textGreen" : "text-textRed"
                } font-league font-light bg-[#19273A]`}
            >
                {status ? "Open" : "Close"}
            </p>
            <div className="px-2 py-1 rounded-md">
                <TrashIcon />
            </div>
        </div>
    );
}

export default AdminStatusTable;
