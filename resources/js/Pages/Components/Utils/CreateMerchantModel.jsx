import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Inertia } from "@inertiajs/inertia";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
function CreateMerchantModel({ merchantClasses }) {
    const validationSchema = z.object({
        merchantStoreClass: z
            .string()
            .min(1, { message: "Merchant Store Class is required" }),
        merchantStore: z.string().min(5, {
            message: "Merchant Store name must be atleast 5 characters long",
        }),
    });
    const form = useForm({ resolver: zodResolver(validationSchema) });
    const onSubmit = (data) => {
        Inertia.post("/admin/store", data, { preserveState: false });
    };
    return (
        <Dialog>
            <DialogTrigger
                asChild
                className="text-white font-league font-semibold text-2xl bg-[#2C394B] py-[1.4rem] px-[2rem] rounded-[.5rem]  outline-none"
            >
                <Button variant="default">Create Merchant Store</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]  bg-[#2C394B]">
                <DialogHeader>
                    <DialogTitle className="text-white font-league font-bold text-[2rem]">
                        Create Merchant Store
                    </DialogTitle>
                    <DialogDescription className="text-white font-league text-[1.2rem]">
                        Create Merchant Stores here. Click save when you're
                        done.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4 flex flex-col items-center"
                    >
                        <div className="w-full">
                            <FormField
                                control={form.control}
                                name="merchantStoreClass"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select
                                            className="w-full"
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue
                                                    className="text-white font-league "
                                                    placeholder="Select Merchant Class"
                                                />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#2C394B] font-league text-white text-[2rem]">
                                                <SelectGroup>
                                                    <SelectLabel>
                                                        Merchant Classes
                                                    </SelectLabel>
                                                    {merchantClasses.map(
                                                        (merchantClass) => (
                                                            <SelectItem
                                                                value={
                                                                    merchantClass.class_name
                                                                }
                                                                key={
                                                                    merchantClass.id
                                                                }
                                                            >
                                                                {
                                                                    merchantClass.class_name
                                                                }
                                                            </SelectItem>
                                                        )
                                                    )}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className="text-red-500 font-bold" />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-full">
                            <FormField
                                control={form.control}
                                name="merchantStore"
                                render={({ field }) => (
                                    <FormItem>
                                        <Input
                                            placeholder="Merchant Store Name"
                                            id="username"
                                            defaultValue="@peduarte"
                                            className="col-span-3"
                                            {...field}
                                        />
                                        <FormMessage className="text-red-500 font-bold" />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter>
                            <Button
                                type="submit"
                                className="bg-orangeButton rounded-[.5rem] hover:bg-indigo-600"
                            >
                                Save changes
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default CreateMerchantModel;
