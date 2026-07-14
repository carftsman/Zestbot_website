import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "page_view",
      page: location.pathname,
    });
  }, [location]);

  return null;
}