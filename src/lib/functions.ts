import { MouseEvent } from "react";
import toast from "react-hot-toast";

export function notImplemented(e?: MouseEvent) {
    e?.preventDefault();
    toast.error("Not Implemeted!", {id: "notImplementedToast" + e?.detail, duration: 1900})
}