import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const EachCountry = ({ eachCountry }) => {
  const nativeName = eachCountry.name?.nativeName
    ? Object.values(eachCountry.name.nativeName)[0].official
    : "No Native name for this country";

  const languages = eachCountry?.languages
    ? Object.values(eachCountry.languages).join(", ")
    : "No official languages for this country";

  const currencies = eachCountry?.currencies
    ? Object.values(eachCountry.currencies)[0].name
    : "No official currencies for this country";

  const borders = eachCountry?.borders
    ? eachCountry.borders.map((border) => {
        return (
          <div className=" px-3 py-3 rounded-1 shadow bg-elements">
            {border}
          </div>
        );
      })
    : "No borders for this country";

  return (
    <div className="text-start p-5">
      <Link to={"/"} className="text-decoration-none text-dark">
        <div className="shadow d-flex gap-3 align-items-center ps-4 py-2 rounded-2 mb-5 back-btn bg-elements custom-text-color">
          <BsArrowLeft />
          <p className="mb-0">Back</p>
        </div>
      </Link>

      {/* ==================================================================== */}

      <div className="imgcondiv d-flex gap-5 ">
        <img className="cdimg me-5" src={eachCountry.flags?.png} alt="" />

        <div className="eachcountry ms-5 d-flex flex-column gap-4 custom-text-color">
          <h2>{eachCountry.name?.common}</h2>

          <div className="cnames d-flex align-items-start gap-5">
            <div>
              <p className="mb-1">
                {" "}
                <b>Native Name:</b> {nativeName}
              </p>
              <p className="mb-1">
                <b>Population:</b> {eachCountry.population?.toLocaleString()}
              </p>
              <p className="mb-1">
                <b>Region:</b> {eachCountry?.region}
              </p>
              <p className="mb-1">
                {" "}
                <b>Sub Region:</b> {eachCountry?.subregion}
              </p>
              <p className="mb-1">
                {" "}
                <b>Capital:</b> {eachCountry?.capital}
              </p>
            </div>

            <div>
              <p className="mb-1">
                {" "}
                <b>Top Level Domain:</b> {eachCountry?.tld}
              </p>
              <p className="mb-1">
                {" "}
                <b>Currencies:</b> {currencies}
              </p>
              <p className="mb-1">
                {" "}
                <b>Languages:</b> {languages}
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center gap-4">
            <p className="mb-1">
              <b>Border Countries:</b>
            </p>
            <div className="borders gap-3 ">{borders}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCountry;
