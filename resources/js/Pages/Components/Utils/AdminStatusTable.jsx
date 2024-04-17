import React from "react";
import TrashIcon from "../../../assets/trash.svg?react";
import DeleteAlertDialog from "./DeleteAlertDialog";
function AdminStatusTable({ status, id }) {
    return (
        <div className="flex justify-between w-full">
            <p
                className={`py-3 px-4 rounded-md ${
                    status ? "text-textGreen" : "text-textRed"
                } font-league font-light bg-[#19273A]`}
            >
                {status ? "Open" : "Close"}
            </p>
            <DeleteAlertDialog id={id}>
                <TrashIcon />
            </DeleteAlertDialog>
            {/* <button className="">Delete</button> */}
        </div>
    );
}

export default AdminStatusTable;
