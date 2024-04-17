import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

function CreateMerchantModel() {
    return (
        <Dialog>
            <DialogTrigger className="text-white font-league font-semibold text-2xl bg-[#2C394B] py-2 px-[2rem] rounded-md">
                Create Merchant Store
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default CreateMerchantModel;
