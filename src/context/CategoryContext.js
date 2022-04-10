import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react";
import { InitialSharedState, SharedReducer } from "../utils";

const CategoryContext = createContext(InitialSharedState);

const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SharedReducer, InitialSharedState);
  const { data: categoryData, loading: chipLoading, error: chipError } = state;

  const [selectedCategory, setSelectedCategory] = useState("All");

  const getCategories = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get("/api/categories");
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data.categories });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        getCategories,
        categoryData,
        chipLoading,
        chipError,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
