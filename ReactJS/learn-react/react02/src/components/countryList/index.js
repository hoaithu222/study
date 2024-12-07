import { countryData } from "../../data/country";
import "./Country.scss";
export default function Country() {
  return (
    <>
      <ul className="country">
        {(countryData || []).map((itemCountry) => (
          <li className="country__item" key={itemCountry.id}>
            <span className="country__text">{itemCountry.name}</span>
            <ul className="country__sub">
              {(itemCountry.city || []).map((itemCity) => (
                <li className="country__sub-item" key={itemCity.id}>
                  <span>{itemCity.name}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
