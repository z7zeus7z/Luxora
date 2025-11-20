import React, { useState } from 'react'
import ListItem from './ListItem';
import ManageProducts from './ManageProducts';
import style from '../../styles/Admin/Admin.module.css'
const Admin = () => {
    const [activeTab,setActiveTab] = useState("List");
  return (
    <>
        <div className={style.adminContainer}>
            <div className={style.tabs}>
                <div onClick={()=>setActiveTab("List")} className={`${style.tab}  ${activeTab==="List"?style.activeTab:""}`}>List Item</div>
                <div onClick={()=>setActiveTab("Manage")} className={`${style.tab} ${activeTab==="Manage"?style.activeTab:""}`}>Manage Items</div>
            </div>
            {activeTab==="List"&&<ListItem/>}
            {activeTab==="Manage"&&<ManageProducts/>}
        </div>
    </>
  )
}

export default Admin