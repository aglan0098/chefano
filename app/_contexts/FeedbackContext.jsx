"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { fetchAllFeedbacks } from "../_utils/feedbackService";

const FeedbackContext = createContext();
export const useFeedbackContext = () => useContext(FeedbackContext);

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        setFeedbacks(await fetchAllFeedbacks());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <FeedbackContext.Provider value={{ feedbacks, loading }}>
      {children}
    </FeedbackContext.Provider>
  );
};
