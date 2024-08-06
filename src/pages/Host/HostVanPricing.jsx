import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
    const { currentVan } = useOutletContext()
    return (
        <h3 className="font-semibold">${currentVan.price}<span>/day</span></h3>
    )
}