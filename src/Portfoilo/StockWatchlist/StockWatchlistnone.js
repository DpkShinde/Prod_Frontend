import React, { useCallback, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "./StockWatchlistnone.css";
import Navbar from "../../Navbar/Navbar";
import { API_BASE_URL } from "../../config";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { debounce } from "lodash";

const StockWatchlist = () => {
  const [stockName, setStockName] = useState("");
  const [stockDetails, setStockDetails] = useState([]);
  const [watchlists, setWatchlists] = useState([]);
  const [selectedWatchlist, setSelectedWatchlist] = useState(null);
  const [filterData, setFilterData] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigate = useNavigate();
  const getStockData = useSelector((store) => store?.searchData?.searchData);

  // Debounced Search Function
  const debounceSearch = useCallback(
    debounce((searchText) => {
      setFilterData(
        searchText ? getStockData.filter((item) => item.company?.toLowerCase().includes(searchText.toLowerCase())) : []
      );
    }, 300),
    [getStockData]
  );

  // Fetch Watchlists
  const fetchWatchlists = async () => {
    const token = Cookies.get("jwtToken");
    if (!token) return alert("Unauthorized: No token provided");

    try {
      const response = await fetch(`${API_BASE_URL}/Watchlist/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch watchlists");

      const data = await response.json();
      setWatchlists(data);

      // Set only if no watchlist is selected
      setSelectedWatchlist((prev) => prev ?? data[0]?.watchlist_id);
    } catch (error) {
      console.error(error);
      alert(error.message || "Failed to fetch watchlists.");
    }
  };

  // Fetch Watchlist Assets
  const fetchWatchlistAssets = useCallback(async () => {
    if (!selectedWatchlist) return;
    const token = Cookies.get("jwtToken");
    if (!token) return alert("Unauthorized: No token provided");

    try {
      const response = await fetch(`${API_BASE_URL}/Watchlist/getWatchlistAssets?watchlist_id=${selectedWatchlist}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch watchlist assets");
      setStockDetails(await response.json());
    } catch (error) {
      console.error(error);
      alert(error.message || "Failed to fetch watchlist assets.");
    }
  }, [selectedWatchlist]);

  // Handle stock addition
  const handleAddStock = async () => {
    if (!stockName.trim()) return alert("Stock name cannot be empty!");

    const normalizedStockName = stockName.toUpperCase();

    if (stockDetails.some((stock) => stock.asset_symbol === normalizedStockName)) {
      return alert("This stock is already in your watchlist.");
    }

    const token = Cookies.get("jwtToken");
    if (!token) return alert("Unauthorized: No token provided");

    try {
      const response = await fetch(`${API_BASE_URL}/Watchlist/addStockToWatchklist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          asset_symbol: normalizedStockName,
          watchlist_id: selectedWatchlist || null,
          asset_type: "Stock",
        }),
      });

      if (!response.ok) throw new Error(await response.text());

      // Get the new stock details from API response
      const newStock = await response.json();

      // Ensure stock is added with the correct property names
      setStockDetails((prevStocks) => [
        ...prevStocks,
        { ...newStock, asset_symbol: normalizedStockName },
      ]);

      setStockName(""); // Clear input field after adding
    } catch (error) {
      console.error(error);
      alert(error.message || "Failed to add stock.");
    }
  };


  //handle stocks name
  const handleStockNameChange = (event) => {
    setStockName(event.target.value);
  };

  // Handle stock deletion
  const handleDeleteStock = useCallback((index) => {
    if (window.confirm("Are you sure you want to delete this stock?")) {
      setStockDetails((prevStocks) => prevStocks.filter((_, i) => i !== index));
    }
  }, []);

  // Handle watchlist actions
  const handleRenameWatchlist = (index) => {
    const newName = prompt("Enter new watchlist name:");
    if (newName?.trim()) setWatchlists((prev) => prev.map((w, i) => (i === index ? { ...w, name: newName } : w)));
  };

  // Determine the color for the change value
  const getChangeColor = (change) => {
    return change >= 0 ? "green" : "red";
  };

  const handleDeleteWatchlist = async (watchlistId) => {
    if (!window.confirm("Are you sure you want to delete this watchlist?")) return;

    try {
      const token = Cookies.get("jwtToken");
      console.log(watchlistId)
      if (!token) return alert("Unauthorized: No token provided");

      const response = await fetch(`${API_BASE_URL}/watchlist/deleteWatchlist`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ watchlist_id: watchlistId }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to delete watchlist");

      // Filter out the deleted watchlist
      setWatchlists((prev) => prev.filter((watchlist) => watchlist.watchlist_id !== watchlistId));

      // Ensure selected watchlist remains unchanged
      if (watchlistId === selectedWatchlist) {
        setSelectedWatchlist(watchlists[0]?.watchlist_id || null);
      }

      setActiveDropdown(null);
      alert("Watchlist deleted successfully");
    } catch (error) {
      console.error("Error deleting watchlist:", error);
      alert(error.message || "An error occurred while deleting the watchlist");
    }
  };


  const handleCreateWatchlist = async () => {
    const token = Cookies.get("jwtToken");
    if (!token) return alert("Unauthorized: No token provided");

    try {
      const response = await fetch(`${API_BASE_URL}/Watchlist/CreateWatchList`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ name: `My Watchlist ${watchlists.length + 1}` }),
      });

      if (!response.ok) throw new Error("Failed to create watchlist");

      const newWatchlist = await response.json();
      setWatchlists([...watchlists, newWatchlist]);
    } catch (error) {
      alert(error.message || "Error creating watchlist");
    }
  };

  const toggleDropdown = (index) => setActiveDropdown(activeDropdown === index ? null : index);

  useEffect(() => {
    fetchWatchlists();
    debounceSearch(stockName);
    return () => debounceSearch.cancel();
  }, [stockName]);

  useEffect(() => {
    fetchWatchlistAssets();
  }, [selectedWatchlist]);

  return (
    <div>
      <Navbar />
      <h2 className="newwmutual">Stock Watchlist</h2>
      <div className="networth-tabs">
        <Link to="/stockwatchlist">
          <button
            className="networth-tab"
            style={{ background: "#24b676", color: "white" }}
          >
            Stocks
          </button>
        </Link>
        <Link to="/mutualWatchlist">
          <button
            className="networth-tab"
            style={{ background: "white", color: "black" }}
          >
            Mutual Fund
          </button>
        </Link>
        <Link to="/goldWatchlistall">
          <button
            className="networth-tab"
            style={{ background: "white", color: "black" }}
          >
            Gold
          </button>
        </Link>
      </div>
      <div>
        <div className="stock-watchlist">
          {/* Watchlist Section */}
          <div className="watchlist-management">
            {watchlists.map((watchlist, index) => (
              <div className="watchlist-item" key={index}>
                <input
                  type="radio"
                  name="watchlist"
                  checked={selectedWatchlist === watchlist.watchlist_id}
                  onChange={() => setSelectedWatchlist(watchlist.watchlist_id)}
                  style={{
                    width: "14px",
                    height: "14px",
                    accentColor: "#24b676",
                  }}
                />
                <label className="watchlist-label">{watchlist.name}</label>
                <button
                  className="menu-iconwatchlist"
                  onClick={() => toggleDropdown(index)}
                >
                  ⋮
                </button>
                {activeDropdown === index && (
                  <div className="menu-dropdownwatchlist">
                    <button
                      className="menu-itemwatchlist"
                      onClick={() => handleRenameWatchlist(index)}
                    >
                      Rename
                    </button>
                    <button
                      className="menu-itemwatchlist"
                      onClick={() => handleDeleteWatchlist(watchlists[index].watchlist_id)}
                    >
                      Delete
                    </button>

                  </div>
                )}
              </div>
            ))}
            <button
              className="create-watchlist"
              onClick={handleCreateWatchlist}
            >
              + Create Watchlist
            </button>
          </div>
          <h2 style={{ marginLeft: "20px", fontSize: "19px" }}>
            Add Watchlist
          </h2>
          {/* Input Section */}
          <div className="watchlist-header">
            <div className="scheme-exchange-cell">
              <div className="input-groupwatchlist">
                <label htmlFor="stockName">Stock Name</label>
                <input
                  id="stockName"
                  type="text"
                  placeholder="Enter stock name..."
                  value={stockName}
                  onChange={handleStockNameChange}
                />

                {/* display input results  */}
                <div>
                  {filterData.length > 0 ? (
                    <ul>
                      {filterData.map((data) => {
                        return <li key={data.id}>{data.company}</li>;
                      })}
                    </ul>
                  ) : (
                    stockName && <p>No result found</p>
                  )}
                </div>
              </div>

              <div className="input-groupwatchlist">
                <label htmlFor="exchange">Exchange</label>
                <input
                  id="exchange"
                  type="text"
                  value="NSE"
                  readOnly
                  style={{
                    backgroundColor: "#f9f9f9",
                    border: "1px solid #ccc",
                    width: "50px",
                  }} // Optional styling for non-editable input
                />
              </div>
            </div>

            <button className="add-btnwatchlist" onClick={handleAddStock}>
              + Add
            </button>
          </div>
        </div>
        {/* Content Container */}

        <div className="content-containerwatchlist">
          <div className="top-sectionswatchlistsectorr">
            {/* Filters Section */}
            <div className="filters-sectionwatchlist">
              <span className="filter-labelwatchlist">FILTER:</span>
              <button className="filter-buttonwatchlist">All</button>
              <button className="filter-buttonwatchlist">Gainers</button>
              <button className="filter-buttonwatchlist">Losers</button>
            </div>

            {/* Group By Section */}
            <div className="group-by-sectionwatchlist">
              <label style={{ marginRight: "8px" }}>Group By:</label>
              <input
                type="radio"
                name="groupBywatchlist"
                value="nonewatchlist"
                onClick={() => navigate("/stockwatchlistall")}
                defaultChecked
                style={{
                  width: "14px",
                  height: "14px",
                  accentColor: "#24b676",
                }}
              />
              None
              <input
                type="radio"
                name="groupBywatchlist"
                value="sectorwatchlist"
                onClick={() => navigate("/stockwatchlistsector")}
                style={{
                  width: "14px",
                  height: "14px",
                  accentColor: "#24b676",
                }}
              />
              Sector
              <input
                type="radio"
                name="groupBywatchlist"
                value="mcapwatchlist"
                onClick={() => navigate("/stockwatchlistmcap")}
                style={{
                  width: "14px",
                  height: "14px",
                  accentColor: "#24b676",
                }}
              />
              M-Cap
            </div>
          </div>

          {/* Stock Table */}
          <div className="table-containerwatchlist">
            <table className="stock-tablewatchlist">
              <thead>
                <tr>
                  <th>Stock Name</th>
                  <th>Live Price</th>
                  <th>Change</th>
                  <th>Change %</th>
                  <th>Volume</th>
                  <th>Today's High</th>
                  <th>Today's Low</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {stockDetails.length === 0 ? (
                  <tr>
                    <td colSpan="8">No data found</td>
                  </tr>
                ) : (
                  stockDetails.map((stock, index) => (
                    <tr key={index}>
                      <td>{stock.asset_symbol}</td>
                      <td>{stock.livePrice}</td>
                      <td style={{ color: getChangeColor(stock.change) }}>
                        {stock.change >= 0 ? `+${stock.change}` : stock.change}
                      </td>
                      <td>{stock.changePercent}%</td>
                      <td>{stock.volume}</td>
                      <td>{stock.high}</td>
                      <td>{stock.low}</td>
                      <td>
                        <button
                          className="delete-btnwatchlist"
                          onClick={() => handleDeleteStock(index)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockWatchlist;
