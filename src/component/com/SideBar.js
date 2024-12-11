import React, { useState } from "react";
import { motion } from "framer-motion";
import { LuHome, LuMail, LuFolderClosed, LuStickyNote, LuBell, LuChevronRight, LuChevronLeft } from "react-icons/lu";
import clsx from "clsx";
import "../css/SideBar.css";

const SIDEBAR_ITEMS = [
  { id: "dashboard", title: "Dashboard", icon: LuHome },
  { id: "mail", title: "Mail", icon: LuMail },
  { id: "projects", title: "Projects", icon: LuFolderClosed },
  { id: "reports", title: "Reports", icon: LuStickyNote },
  { id: "notifications", title: "Notifications", icon: LuBell },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState(SIDEBAR_ITEMS[0].id);

  return (
    <div className="sidebar-wrapper">
      {/* Button outside Sidebar but inside the wrapper */}
      <button
        className="sidebar__collapse-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <LuChevronRight /> : <LuChevronLeft />}
      </button>

      <motion.div
        className="sidebar"
        animate={{ width: isCollapsed ? 80 : 280 }}
        layout
      >
        {SIDEBAR_ITEMS.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isSidebarCollapsed={isCollapsed}
          />
        ))}
      </motion.div>
    </div>
  );
};

const SidebarItem = ({ item, activeTab, setActiveTab, isSidebarCollapsed }) => {
  const IconComponent = item.icon;

  return (
    <motion.div
      layout
      className={clsx("sidebar-item", {
        "sidebar-item__active": activeTab === item.id,
      })}
      onClick={() => setActiveTab(item.id)}
    >
      {activeTab === item.id && (
        <motion.div
          layoutId="sidebar-item-indicator"
          className="sidebar-item__active-bg"
        />
      )}
      <span className="sidebar-item__icon">
        <IconComponent />
      </span>
      <motion.span
        className="sidebar-item__title"
        animate={{
          clipPath: isSidebarCollapsed
            ? "inset(0% 100% 0% 0%)"
            : "inset(0% 0% 0% 0%)",
          opacity: isSidebarCollapsed ? 0 : 1,
        }}
      >
        {item.title}
      </motion.span>
    </motion.div>
  );
};

export default Sidebar;
