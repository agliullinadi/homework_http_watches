import React, { useState } from "react";
import FormAddWatch from "../Form/index.js";
import WatchClass from "../Watch/index.js";

export default function Main() {
    let [watches, setWatches] = useState([{ title: "Moscow", gmt: "+03:00" }]);
    const k = Math.pow(10, 16);
    return (
        <>
            <FormAddWatch
                calback={(form) => {
                    setWatches((prev) => ([...prev, form]))
                }}
            />
            <div className="Watches">
                {watches.map((item) => (
                    <WatchClass data={item} key={Math.random() * k}
                        calback={(title) => {
                            setWatches((prev) => (prev.filter((item) => item.title !== title)))
                        }} />
                ))}
            </div>
        </>
    );
}