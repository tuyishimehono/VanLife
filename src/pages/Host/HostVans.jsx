import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
export default function HostVans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const hostVansEls = vans.map(van => (
        <Link
            to={`/host/vans/${van.id}`}
            key={van.id}
        >
            <div key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div>
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1>Your listed vans</h1>
            <div>
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
    )
}