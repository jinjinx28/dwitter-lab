import { useState, useEffect } from 'react';
import Logo from "./header/Logo.jsx";
import ToggleButton from "./header/ToggleButton.jsx";
import MenuList from "./commons/MenuList.jsx";
import { getFetchData } from "../util/fetch.js";

export default function Header() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jsonData = await getFetchData("/header");
                if (jsonData && jsonData.result) {
                    setData(jsonData.result);
                }
            } catch (error) {
                console.error("데이터 로딩 에러:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <header className="header">
            <Logo 
                img={data?.logo?.img || ""} 
                alt="header-logo"
                style="header-logo-img"
                title={data?.logo?.name || "Loading..."}
            />
            <MenuList 
                menus={data?.menus || []} 
                style="header-menu open" 
            />
            <ToggleButton />
        </header>
    );
}