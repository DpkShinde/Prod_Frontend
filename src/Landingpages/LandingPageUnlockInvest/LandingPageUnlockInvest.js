import React, { useEffect, useState } from "react";
import "./LandingPageUnlockInvest.css";
import landingimg1 from "../../assest/landingimg1.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { setSearchData } from "../../Store/Slices/searchDataSlice";

const LandingPageUnlockInvest = () => {
  const [searchInputText, setSearchInputText] = useState("");
  const [filterData, setFilterData] = useState([]);

  const dispatch = useDispatch();
  // getting data from redux store
  const getDataFromStore = useSelector((store) => store.searchData.searchData);
  console.log(getDataFromStore);

  //Api Call for getAll Data Related search Option
  const getAllData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/allInfo`);
      const data = await response.json();

      //store all data into the redux store
      dispatch(setSearchData(data?.data || []));
    } catch (error) {
      console.log(error);
    }
  };

  //search keyword using redux store
  useEffect(() => {
    // Check if searchInputText is not empty
    if (searchInputText) {
      // Filter the data based on the search input
      const results = getDataFromStore.filter((item) => {
        // Convert company name, scheme name, and sector to lowercase for comparison
        const company = item.company ? item.company.toLowerCase() : "";
        const Scheme_Name = item.Scheme_Name
          ? item.Scheme_Name.toLowerCase()
          : "";
        const sector = item.sector ? item.sector.toLowerCase() : "";
        return (
          // Check if any of the fields include the search input
          company.includes(searchInputText.toLowerCase()) ||
          Scheme_Name.includes(searchInputText.toLowerCase()) ||
          sector.includes(searchInputText.toLowerCase())
        );
      });
      // Update the filtered data state
      setFilterData(results);
      console.log(filterData);
    } else {
      // If search input is empty, clear the filtered data
      setFilterData([]);
    }
  }, [searchInputText, getDataFromStore]);

  useEffect(() => {
    //Function Call for All data
    getAllData();
  }, []);
  return (
    <div className="landingpageunlockinvest-container">
      <div className="landingpageunlockinvest-background">
        {/* Left Side Content */}
        <div className="landingpageunlockinvest-content">
          <div className="landingpageunlockinvestheadingsearchall">
            <h1 className="landingpageunlockinvest-heading">
              Unlock your Investing with <span>Financeshastra.</span>
            </h1>
            <div className="landingpageunlockinvest-searchbar">
              <input
                type="text"
                placeholder="Search for Stocks, Mutual..."
                className="landingpageunlockinvest-input"
                onChange={(e) => setSearchInputText(e.target.value)}
              />
              {/* to display result */}
              <div>
                {filterData.length > 0 ? (
                  <ul>
                    {filterData.map((data) => {
                      return (
                        <li key={data.id}>
                          {data.company} {data.Scheme_Name} {data.sector}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  searchInputText && <p>No result found</p>
                )}
              </div>
            </div>

            <button className="landingpageunlockinvest-button">
              Explore now
            </button>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="landingpageunlockinvest-illustration">
          <img
            src={landingimg1}
            alt="Finance Chart Illustration"
            className="landingpageunlockinvest-image"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPageUnlockInvest;
