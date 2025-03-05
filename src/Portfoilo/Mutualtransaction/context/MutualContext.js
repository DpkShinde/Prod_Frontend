import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { API_BASE_URL } from "../../../config";

// Create the context
export const MutualContext = createContext();

// Provider Component
export const MutualPortfolioProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions data
  const fetchStocks = async () => {
    const token = Cookies.get("jwtToken");
    if (!token) {
      alert("Session expired, Please Login again");
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/myportfolio/mutualTransactions`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch data");

      const data = await res.json();
      setTransactions(data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <MutualContext.Provider value={{ transactions, setTransactions, fetchStocks }}>
      {children}
    </MutualContext.Provider>
  );
};
