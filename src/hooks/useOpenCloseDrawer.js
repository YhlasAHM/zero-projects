import { useCallback } from "react";
import { useState } from "react"

export const useOpenCloseDrawer = () => {
    const [open, setOpen] = useState(false);
    const openSet = useCallback(() => { setOpen(true) });
    const closeSet = useCallback(() => { setOpen(false) });
    return { open, openSet, closeSet }
}