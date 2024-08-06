import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
export default function HostVanDetail() {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = useState(null)

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    },[id])
    console.log(currentVan)

    if (!currentVan) {
        return <h1>Loading...</h1>
    }
    return (
        <section>
            <Link
                to=".."
                relative="path"
            >&larr; <span>Back to all vans</span></Link>

            <div>
                <div>
                    <img src={currentVan.imageUrl} className="w-72"/>
                    <div>
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>

                <nav className="flex gap-5 font-semibold">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{ currentVan }} />
            </div>
        </section>
    )
}
