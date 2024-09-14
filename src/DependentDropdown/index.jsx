import React, { useState } from 'react';

export default function DependentDropdown() {
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [isSubCategoryEnabled, setIsSubCategoryEnabled] = useState(false);

  const categories = ['India', 'US', 'Canada'];
  const subCategories = {
    India: ['New Delhi', 'Punjab', 'Mumbai', 'Chennai'],
    US: ['Washington DC', 'New Jersey', 'Chicago'],
    Canada: ['Ontario', 'Toronto', 'Ottawa'],
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setSubCategory('');
    setIsSubCategoryEnabled(selectedCategory !== '');
  };

  const handleSubCategoryChange = (selectedSubCategory) => {
    setSubCategory(selectedSubCategory);
  };

  return (
    <>
      <h1>Select your country & state</h1>
      <label htmlFor='category'>Country</label>
      <select
        id='category'
        onChange={(e) => handleCategoryChange(e.target.value)}
        value={category}
      >
        <option value=''>Select</option>
        {categories.map((categoryItem, index) => (
          <option key={index} value={categoryItem}>
            {categoryItem}
          </option>
        ))}
      </select>

      <br />
      <label htmlFor='subCategory'>State</label>
      <select
        id='subCategory'
        onChange={(e) => handleSubCategoryChange(e.target.value)}
        value={subCategory}
        disabled={!isSubCategoryEnabled}
      >
        <option value=''>Select</option>
        {isSubCategoryEnabled &&
          category &&
          subCategories[category] &&
          subCategories[category].map((subCategoryItem, index) => (
            <option key={index} value={subCategoryItem}>
              {subCategoryItem}
            </option>
          ))}
      </select>
    </>
  );
}
