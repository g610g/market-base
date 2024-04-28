import React from "react";

function CartItem({ cartData }) {
    const format = (val) => {
        const amount = parseFloat(val);
        const formatted = new Intl.NumberFormat("en-PH", {
            style: "currency",
            currency: "PHP",
        }).format(amount);
        return formatted;
    };
    return (
        <div className="flex-1 flex gap-3 items-center">
            <img
                src={`data:image/jpeg;base64,${cartData.product_photo}`}
                alt="Product Picture"
                className="w-[130px] h-[130px]  rounded-[.5rem]"
            />
            <div className="flex-1 py-3">
                <div className="w-full flex justify-between">
                    <p className="font-league font-bold text-white text-2xl">
                        {cartData.product_name}
                    </p>

                    <p className="font-league font-bold text-2xl text-orangeButton">
                        Subtotal: {format(cartData.total_price)}
                    </p>
                </div>
                <div className="space-y-2 w-full  mt-1">
                    <label
                        className="font-league text-white font-light text-md"
                        htmlFor="variant"
                    >
                        Product Variant
                    </label>
                    <div className="flex w-full  gap-7 items-center">
                        <p
                            className="py-2 px-3 bg-[#515E71] w-[50%] rounded-[.5rem] font-league text-white font-extralight text-2xl"
                            id="variant"
                        >
                            {cartData.product_variant}
                        </p>
                        <div className="flex items-center justify-between w-full">
                            <p className="font-light text-white">
                                {format(cartData.product_price)}
                            </p>
                            <div className="flex items-center gap-3 text-white font-light">
                                <span>Quantity:</span>
                                <p className="p-3 text-white rounded-xl">
                                    {cartData.quantity}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
