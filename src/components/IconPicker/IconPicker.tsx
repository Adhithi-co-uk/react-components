import React, { useState } from 'react';

import { Icons } from "./Icons"
import "./IconPicker.css"

const IconPicker = ({ value, onChange }: { value: string, onChange: Function }) => {
    const [SearchText, setSearchText] = useState("");
    const [CurrentPage, setCurrentPage] = useState(1);
    const [IsOpen, setIsOpen] = useState(false);
    //filter icons by search text
    const perPage = 40;
    const filteredIcons = Icons.filter(icon => icon.description.toLowerCase().includes(SearchText.toLowerCase()));
    const noOfPages = Math.ceil(filteredIcons.length / perPage);
    //previous Page
    const previousPage = () => {
        if (CurrentPage > 1) {
            setCurrentPage(CurrentPage - 1);
        }
    }
    //next Page
    const nextPage = () => {
        if (CurrentPage < noOfPages) {
            setCurrentPage(CurrentPage + 1);
        }
    }
    //select icon
    const selectIcon = (icon: string) => {
        onChange(icon);
        setIsOpen(false);
    }
    //on search
    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        setCurrentPage(1);
    }

    return (
        <div className='icon-picker'>
            <div style={{ position: "relative" }}>
                <i className={value}></i>
                <a href='#' onClick={(e) => { e.preventDefault(); setIsOpen(true); }} style={{ marginLeft: "8px" }}>
                    Change
                </a>
                {IsOpen &&
                    <div className='pick-box-container'>
                        <div className='pick-box'>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <form className="nosubmit">
                                    <input className="nosubmit" type="search" value={SearchText} onChange={onSearch} placeholder="Search..." />
                                </form>
                                <div>
                                    <a href="#" onClick={(e) => { e.preventDefault(); previousPage() }} style={{ marginLeft: "8px" }}>
                                        <i className='fa fa-chevron-left'></i>
                                    </a>
                                    {" " + CurrentPage} of {noOfPages + " "}
                                    <a href="#" onClick={(e) => { e.preventDefault(); nextPage() }} style={{ marginLeft: "8px" }}>
                                        <i className='fa fa-chevron-right'></i>
                                    </a>
                                    <a href='#' onClick={(e) => { e.preventDefault(); setIsOpen(false); }} style={{ marginLeft: "8px" }}>
                                        <i className='fa-solid fa-close' />
                                    </a>
                                </div>
                            </div>
                            <div className='icon-list'>
                                {
                                    filteredIcons.slice((CurrentPage - 1) * perPage, CurrentPage * perPage).map((icon, index) => {
                                        return (
                                            <div key={index} className="icon-item"
                                                onClick={() => selectIcon(icon.title)}>
                                                <div className='icon'>
                                                    <i className={icon.title}></i>
                                                </div>

                                            </div>
                                        )
                                    })

                                }
                            </div>
                        </div>
                    </div>}
            </div>

        </div >

    );
};

export default IconPicker;