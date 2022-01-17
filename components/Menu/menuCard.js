import React from 'react'

const MenuCard = ({item}) => {
    return (
        <div className="menu-card">
            {/* <img src={item?.image["600x600"] || "/images/signage-product-2.jpg"} alt="Menu item"/> */}
            <img src={item?.image["600x600"] || ""} alt="Menu item"/>

            <div className="menu-card-info">
                <p className="item-title">{item?.name || "/"}</p>
                <p className="item-price">{item?.price || "/"}</p>
            </div>
        </div>
    )
}

export default MenuCard
