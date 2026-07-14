import { useEffect, useState } from "react";

const API_URL =
  "https://script.google.com/macros/s/AKfycbwBdxsicJ7z92iF86k-nmXG_fmyIxV24X8ZVF1alyllpEWy9-IsiUdN4G12bYyhHwl6/exec";

export default function useGoogleStats() {
  const [stats, setStats] = useState({
    vendors: 0,
    cities: 0,
    support: "",
  });

  const fetchStats = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setStats(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // fetchStats();

    const interval = setInterval(fetchStats, 1000); // 1 Second

    return () => clearInterval(interval);
  }, []);

  return stats;
}