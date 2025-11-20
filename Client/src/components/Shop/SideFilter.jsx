import React from 'react'
import style from '../../styles/Shop.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const SideFilter = ({ onCategoryChange, onPriceChange, activeCategory, activePrice }) => {
  return (
    <>
      <div className={style.sideFilterContainer}>
        
        <div className={style.filterIcon}>
          <FontAwesomeIcon icon={faFilter}/>
          <p>Filters</p>
        </div>

        <div className={style.filterCategory}>
          <h3>CATEGORY</h3>
          <div className={style.categoryOptions}>
            <ul>
              {[
                { label: "All Rooms", value: "all" },
                { label: "Living Room", value: "living room" },
                { label: "Bed Room", value: "bed room" },
                { label: "Kitchen", value: "kitchen" }
              ].map((cat) => (
                <li
                  key={cat.value}
                  className={activeCategory === cat.value ? style.activeFilter : ""}
                  onClick={() => onCategoryChange(cat.value)}
                >
                  {cat.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={style.filterPrice}>
          <h3>PRICE</h3>

          <div className={style.priceOptions}>
            <label className={activePrice === "" ? style.activeFilter : ""}>
              All Prices
              <input
                type="radio"
                name="price"
                value=""
                checked={activePrice === ""}
                onChange={() => onPriceChange("")}
              />
            </label>

            {[
              { label: "$0 - $99", value: "0-99" },
              { label: "$100 - $199", value: "100-199" },
              { label: "$200 - $299", value: "200-299" },
              { label: "$300 - $399", value: "300-399" },
              { label: "$400+", value: "400+" }
            ].map((p) => (
              <label key={p.value} className={activePrice === p.value ? style.activeFilter : ""}>
                {p.label}
                <input
                  type="radio"
                  name="price"
                  value={p.value}
                  checked={activePrice === p.value}
                  onChange={(e) => onPriceChange(e.target.value)}
                />
              </label>
            ))}
          </div>
        </div>

        <button
          className={style.clearBtn}
          onClick={() => {
            onCategoryChange("all");
            onPriceChange("");
          }}
        >
          Clear Filters
        </button>

      </div>
    </>
  );
};

export default SideFilter;
