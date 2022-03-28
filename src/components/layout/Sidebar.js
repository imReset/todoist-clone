import React from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li data-testid="inbox" className="inbox">
          <span>
            <FaInbox />
          </span>
          Inbox
        </li>
        <li data-testid="inbox" className="today">
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li data-testid="next_7" className="next_7">
          <span>
            <FaRegCalendarAlt />
          </span>
          Next 7 Days
        </li>
      </ul>
      <div className="sidebar__middle">
        <span>
          <FaChevronDown />
          <h2>Projects</h2>
        </span>
      </div>
      <ul className="sidebar__projects">Projects will be here!</ul>
      Add project components here.
    </div>
  );
};
