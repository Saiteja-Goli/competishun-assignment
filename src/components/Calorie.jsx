import React, { useEffect, useState } from 'react'

const Calorie = () => {
    const [foodItem, setFoodItem] = useState([]);
    const fetchData = () => {
        fetch('https://api.edamam.com/api/recipes/v2?type=public&q=india&app_id=36a74292&app_key=%202958d0f9ade962bfbca287275412364c')
            .then(res => res.json())
            .then(data => {
                console.log(data.hits)
                setFoodItem(data.hits)
            })
            .catch(err => console.error(err));
    }
    useEffect(() => {
        fetchData();
    }, [])
const handleOrderNow=()=>{
    alert("Order Palced")
}
    return (
        <div>
            <h1>Calorie</h1>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "10px",
            }}>
                {
                    foodItem.map((ele, index) => {
                        const fatDigest = ele.recipe.digest.find(digestItem => digestItem.tag === "FAT" || digestItem.schemaOrgTag === "fatContent");
                        const protienDigest = ele.recipe.digest.find(digestItem => digestItem.tag === "PROCNT" || digestItem.schemaOrgTag ===
                            "proteinContent");
                        return <div key={index} style={{
                            border: "0px solid black",
                            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                            padding: "50px 0 50px 0px",
                            margin: "0 0px",
                            borderRadius: "20px"
                        }}>
                            <img src={ele.recipe.images.SMALL.url} alt={Calorie} />
                            <h3>{ele.recipe.label}</h3>
                            <h5>Calorie : {ele.recipe.calories} g</h5>
                            <p>FAT : {fatDigest.total} g</p>
                            <p>PROTIEN : {protienDigest.total} g</p>
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default Calorie
