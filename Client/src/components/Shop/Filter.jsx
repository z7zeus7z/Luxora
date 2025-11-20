import React, { useState } from 'react'
import style from '../../styles/Shop.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Filter = ({ onCategoryChange, onPriceChange, activeCategory, activePrice }) => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openPrices, setOpenPrices] = useState(false);

  const toggleCategoryMenu = () => setOpenCategory(!openCategory);
  const togglePriceMenu = () => setOpenPrices(!openPrices);

  return (
    <div className={style.filters}>

      {/* CATEGORY FILTER */}
      <div className={style.category}>
        <h5>Category</h5>

        <div className={style.dropDownMenu}>
          <div className={style.dopDownContainer}>
            <p>{activeCategory === "all" ? "All Rooms" : activeCategory}</p>

            <FontAwesomeIcon
              onClick={toggleCategoryMenu}
              icon={openCategory ? faChevronUp : faChevronDown}
            />
          </div>

          {openCategory && (
            <div className={style.dropDownOption}>
              {["all", "living room", "bed room", "kitchen"].map((cat) => (
                <p
                  key={cat}
                  className={activeCategory === cat ? style.activeFilter : ""}
                  onClick={() => {
                    onCategoryChange(cat);
                    setOpenCategory(false);
                  }}
                >
                  {cat === "all" ? "All Rooms" : cat}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* PRICE FILTER */}
      <div className={style.priceFilter}>
        <h5>Price</h5>

        <div className={style.dropDownMenu}>
          <div className={style.dopDownContainer}>
            <p>{activePrice === "" ? "All Prices" : activePrice}</p>

            <FontAwesomeIcon
              onClick={togglePriceMenu}
              icon={openPrices ? faChevronUp : faChevronDown}
            />
          </div>

          {openPrices && (
            <div className={style.dropDownOption}>
              <p onClick={() => { onPriceChange(""); setOpenPrices(false); }}>All Prices</p>
              <p onClick={() => { onPriceChange("0-100"); setOpenPrices(false); }}>0–$100</p>
              <p onClick={() => { onPriceChange("100-500"); setOpenPrices(false); }}>$100–$500</p>
              <p onClick={() => { onPriceChange("500-1000"); setOpenPrices(false); }}>$500–$1000</p>
              <p onClick={() => { onPriceChange("1000+"); setOpenPrices(false); }}>$1000+</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Filter;
