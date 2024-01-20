import React from "react";
import "./search.css";
import Dropdown from "./dropdown/Dropdown";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="search">
      <div className="searchs">
        <div className="search_contain">
          <div className="search_inputer">
            <input
              type="text"
              placeholder="Search For A Property"
              className="searcher"
            />
            <div className="search_btn_opt">
              <button>
                <CiSearch className="ci" />
                Find Property
              </button>
            </div>
          </div>
        </div>
        <div className="dropdowns-container">
          <Dropdown
            iconSrc="https://i.imgur.com/dbrgTp0.png"
            title="Location"
            options={["Amudabi", "Saudi", "America"]}
          />{" "}
          <Dropdown
            iconSrc="https://i.imgur.com/yi2M9Ok.png"
            title="Property Type"
            options={["villa", "guest house", "room"]}
          />
          <Dropdown
            iconSrc="https://i.imgur.com/tp8VunY.png"
            title="Pricing Range"
            options={["high to low", "low to high"]}
          />{" "}
          <Dropdown
            iconSrc="https://i.imgur.com/c6wiXo4.png"
            title="Property Size"
            options={["small", "medium", "large"]}
          />{" "}
          <Dropdown
            iconSrc="https://i.imgur.com/f1nxeZf.png"
            title="Build Year"
            options={["since 90", "since 20", "newest"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
