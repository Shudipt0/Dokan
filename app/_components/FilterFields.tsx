"use client";
import { useState } from "react";
import HeroCategory from "./HeroCategory";

const brands = ["nike", "adidas", "puma", "reebok"];
// Define the Products type or interface for props
interface Products {
  data: any; // Replace 'any' with the actual type of 'data' if known
}

interface Filters {
  brand: string[];
  priceRange: [number, number];
}

interface FilterFieldsProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const FilterFields = ({ filters, setFilters }: FilterFieldsProps) => {
 
// for filtering
// const [filters, setFilters] = useState({
//   brand: [] as string[],
//   priceRange: [0, 50000] as [number, number],
// });
  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setFilters((prevFilters: Filters) => {
      const updatedBrands = checked
        ? [...prevFilters.brand, value] // Add
        : prevFilters.brand.filter((brand) => brand !== value); // Remove

      return {
        ...prevFilters,
        brand: updatedBrands,
      };
    });
  };

   const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = parseInt(e.target.value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: [0, newMax],
    }));
  };

  // console.log(data[0].category)
  return (
      <div className="flex flex-col gap-3">
      {/* Price Range Slider */}
      <input
        type="range"
        min="0"
        max="50000"
        value={filters.priceRange[1]}
        onChange={handlePriceChange}
      />
      <span className="text-sm text-gray-600">
        Max Price: ₹{filters.priceRange[1]}
      </span>

      {/* Brand Filters */}
      {brands.map((brand) => (
        <label key={brand} className="text-black">
          <input
            type="checkbox"
            value={brand}
            checked={filters.brand.includes(brand)}
            onChange={handleBrandChange}
          />
          {brand}
        </label>
      ))}
    </div>
  );
};

export default FilterFields;
