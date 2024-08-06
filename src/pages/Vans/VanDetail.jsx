import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function VanDetail() {
    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return (
        <div>
            {van ? (
                <div>
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button>Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}