import React from 'react';

export const SimpleDropdown= ({
  dropdownOpen,
  setDropdownOpen,
  item,
}) => {
  return (
    <div>
      <div onClick={() => setDropdownOpen(!dropdownOpen)}>
        {/* <span>{item.titleKey}</span> */}
      </div>

      <ul style={{ display: dropdownOpen ? 'block' : 'none' }}>
        {/* {item.dropdown.map((subItem) => (
          <li key={subItem.id}>
            <a href={subItem.path}>{subItem.titleKey}</a>
          </li>
        ))} */}
      </ul>
    </div>
  );
};
