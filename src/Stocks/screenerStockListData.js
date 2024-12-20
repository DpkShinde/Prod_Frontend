import tcs from '../assest/tcs.png';
import reliance from '../assest/reliance.png';
import hdfc from '../assest/hdfcbank.png';
import bharti from '../assest/bhartiartl.png';
import icici from '../assest/icicibank.png';
import infosys from '../assest/infy.png';
import sbi from '../assest/sbin.png';
import life from '../assest/lici.png';
import itc from '../assest/itc.png';
import hindustan from '../assest/hindunilvr.png';
import larsen from '../assest/Lt.png';
import hcl from '../assest/hcltech.png';
import bajaj from '../assest/bajajhfl.png';
import sun from '../assest/sunteck.png';
import mahindra from '../assest/mahabank.png';
import kotak from '../assest/kotakbank.png';
import axis from '../assest/axisbank.png';
import maruti from '../assest/maruti.png';
import ultratech from '../assest/ultracemco.png';
import ntpc from '../assest/ntpc.png';

export const screenerStockListData = [
    {
      symbol: "RELIANCE INDUSTRIES LTD",
      price: "₹2,500",
      change: "+1.5%",
      volume: "500K",
      marketCap: "8T",
      pToE: "28",
      eps: "100",
      epsDilGrowth: "12%",
      divYield: "2%",
      sector: "Energy",
      index: "Nifty 50", // Nifty 50 index
      icon: reliance,
    },
    {
      symbol: "TATA CONSULTANCY SERVICES LTD",
      price: "₹3,000",
      change: "+2%",
      volume: "1M",
      marketCap: "10T",
      pToE: "25",
      eps: "120",
      epsDilGrowth: "15%",
      divYield: "1.5%",
      sector: "Technology",
      index: "Nifty 50",
      icon: tcs,
    },
    {
      symbol: "HDFC BANK LTD",
      price: "₹1,862.75",
      change: "-0.48%",
      volume: "2.46 M",
      marketCap: "₹14.31T",
      pToE: "25.55",
      eps: "₹90.65",
      epsDilGrowth: "+1.52%",
      divYield: "1.04%",
      sector: "Finance",
      index: "Nifty Bank", // Nifty Bank index
      icon: hdfc,
    },
    {
      symbol: "BHARTI AIRTEL LTD",
      price: "₹1,644.40",
      change: "-1.03%",
      volume: "2.27 M",
      marketCap: "₹9.57T",
      pToE: "23.42",
      eps: "₹20.24",
      epsDilGrowth: "+60.69%",
      divYield: "0.48%",
      sector: "Communications",
      index: "Nifty 50",
      icon: bharti,
    },
    {
      symbol: "ICICI BANK LTD",
      price: "₹1,345.35",
      change: "+0.03%",
      volume: "3.55 M",
      marketCap: "₹9.43T",
      pToE: "22.83",
      eps: "₹66.16",
      epsDilGrowth: "+17.37%",
      divYield: "0.74%",
      sector: "Finance",
      index: "Nifty Bank",
      icon: icici,
    },
    {
      symbol: "INFOSYS LTD",
      price: "₹1,990.50",
      change: "-0.46%",
      volume: "793.91 K",
      marketCap: "₹8.30T",
      pToE: "21.89",
      eps: "₹64.99",
      epsDilGrowth: "+8.66%",
      divYield: "2.05%",
      sector: "Technology services",
      index: "Nifty 50",
      icon: infosys,
    },
    {
      symbol: "STATE BANK OF INDIA",
      price: "₹861.95",
      change: "+0.52%",
      volume: "2.52 M",
      marketCap: "₹5.91T",
      pToE: "12.36",
      eps: "₹10.73",
      epsDilGrowth: "+4.91%",
      divYield: "1.59%",
      sector: "Finance",
      index: "Nifty Bank",
      icon: sbi,
    },
    {
      symbol: "LIFE INSURANCE CORP OF INDIA",
      price: "₹926.05",
      change: "-0.63%",
      volume: "353.24 K",
      marketCap: "₹5.9T",
      pToE: "14.23",
      eps: "₹65.65",
      epsDilGrowth: "+5.91%",
      divYield: "1.07%",
      sector: "Finance",
      index: "Nifty Bank",
      icon: life,
    },
    {
      symbol: "ITC LTD",
      price: "₹468.85",
      change: "-0.24%",
      volume: "3.85 M",
      marketCap: "₹5.88T",
      pToE: "16.78",
      eps: "₹16.42",
      epsDilGrowth: "+1.38%",
      divYield: "2.92%",
      sector: "Consumer non-durables",
      index: "Nifty 50",
      icon: itc,
    },
    {
      symbol: "HINDUSTAN UNILEVER LTD",
      price: "₹2,371.05",
      change: "-0.80%",
      volume: "359.15 K",
      marketCap: "₹5.4T",
      pToE: "43.57",
      eps: "₹243.70",
      epsDilGrowth: "-0.16%",
      divYield: "1.80%",
      sector: "Consumer non-durables",
      index: "Nifty 50",
      icon: hindustan,
    },
    {
      symbol: "LARSEN & TOUBRO LTD",
      price: "₹3,868.65",
      change: "-0.47%",
      volume: "321.52 K",
      marketCap: "₹3.9T",
      pToE: "18.15",
      eps: "₹101.79",
      epsDilGrowth: "+0.81%",
      divYield: "0.72%",
      sector: "Industrial services",
      index: "Nifty 50",
      icon: larsen,
    },
    {
      symbol: "HCL TECHNOLOGIES LTD",
      price: "₹1,621.75",
      change: "-0.31%",
      volume: "408.75 K",
      marketCap: "₹3.6T",
      pToE: "23.22",
      eps: "₹62.02",
      epsDilGrowth: "+8.88%",
      divYield: "2.74%",
      sector: "Technology services",
      index: "Nifty 50",
      icon: hcl,
    },
    {
      symbol: "BAJAJ FINANCE LIMITED",
      price: "₹7,218.00",
      change: "+0.49%",
      volume: "378.77 K",
      marketCap: "₹4.45T",
      pToE: "30.50",
      eps: "₹248.51",
      epsDilGrowth: "+15.04%",
      divYield: "0.50%",
      sector: "Finance",
      index: "Nifty Bank",
      icon: bajaj,
    },
    {
      symbol: "SUN PHARMACEUTICAL IND L",
      price: "₹1,794.90",
      change: "-1.02%",
      volume: "392.85 K",
      marketCap: "₹2.35T",
      pToE: "26.42",
      eps: "246.07",
      epsDilGrowth: "+29.31%",
      divYield: "0.74%",
      sector: "Health technology",
      index: "Nifty 50",
      icon: sun,
    },
    {
      symbol: "MAHINDRA & MAHINDRA LTD.",
      price: "₹3,057.65",
      change: "-0.76%",
      volume: "875.84 K",
      marketCap: "₹2.6T",
      pToE: "18.20",
      eps: "₹106.00",
      epsDilGrowth: "+6.13%",
      divYield: "0.68%",
      sector: "Consumer durables",
      index: "Nifty 50",
      icon: mahindra,
    },
    {
      symbol: "KOTAK MAHINDRA BANK LTD.",
      price: "₹1,797.65",
      change: "-0.44%",
      volume: "1.32 M",
      marketCap: "₹2.2T",
      pToE: "21.75",
      eps: "₹110.94",
      epsDilGrowth: "+28.37%",
      divYield: "0.11%",
      sector: "Finance",
      index: "Nifty Bank",
      icon: kotak,
    },
    {
      symbol: "AXIS BANK LTD",
      price: "₹1,145.80",
      change: "-0.20%",
      volume: "1.03 M",
      marketCap: "₹2.12T",
      pToE: "19.45",
      eps: "₹89.87",
      epsDilGrowth: "+113.11%",
      divYield: "0.09%",
      sector: "Finance",
      index: "Nifty Bank",
      icon: axis,
    },
    {
      symbol: "MARUTI SUZUKI INDIA LTD",
      price: "₹11,255.05",
      change: "-0.16%",
      volume: "78.58 K",
      marketCap: "₹3.5T",
      pToE: "35.25",
      eps: "₹450.13",
      epsDilGrowth: "+19.78%",
      divYield: "1.11%",
      sector: "Consumer durables",
      index: "Nifty 50",
      icon: maruti,
    },
    {
      symbol: "ULTRATECH CEMENT LTD",
      price: "₹11,930.70",
      change: "-1.27%",
      volume: "83.5 K",
      marketCap: "₹2.3T",
      pToE: "28.92",
      eps: "₹227.17",
      epsDilGrowth: "+15.09%",
      divYield: "0.58%",
      sector: "Non-energy minerals",
      index: "Nifty 50",
      icon: ultratech,
    },
    {
      symbol: "NTPC LTD.",
      price: "₹354.15",
      change: "-0.88%",
      volume: "160.57 K",
      marketCap: "₹1.56T",
      pToE: "12.15",
      eps: "₹22.76",
      epsDilGrowth: "+15.41%",
      divYield: "2.24%",
      sector: "Utilities",
      index: "Nifty 50",
      icon: ntpc,
    },
];
