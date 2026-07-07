/* 
    Disclosure on the use of AI/LLM:
    - AI was used to help separate the referenced East Asia map SVG (Due to large size) into individual country paths.

    References:
    https://commons.wikimedia.org/wiki/File:East_Asia_location_map.svg - SVG Map of East Asia for specific and better looking countries to be displayed on the website.
    ^ VAULTED - Will look for a better SVG map of East Asia over the weeks, will just have placeholder country borders for now.
*/

import { useState } from "react";
import "../styles/made-in-asia.css";

// Country Data with contributions and other future information if changes are needed
// Contributions are taken from Country Information and more will be added soon.
const countryData = {
    china: {
        name: "China",
        contribution:(
            <ul>
                <li> Developed the Sunway TaihuLight supercomputer using entirely native SW26010 processors (many-core architecture) to break reliance on Western silicon.</li>
                <li> Leading the global adoption and development of RISC-V (an open-source Instruction Set Architecture) to build processors independent of proprietary x86 or ARM standards.</li>
            </ul>
        ),
    },

    japan: {
        name: "Japan",
        contribution: (
            <ul>
                <li>Co-designed the Intel 4004 (1971), shifting the computing paradigm from multi-chip systems to single-chip logic architecture.</li>
                <li>Invented NAND Flash Memory in the 1980s (Toshiba), changing the memory hierarchy and paving the way for modern Solid State Drives (SSDs).</li>
                <li>Pioneered custom processing engines for entertainment (Nintendo 64's 64-bit architecture, Sony's Cell engine) and supercomputing (Fugaku's ARM-based A64FX processor).</li>
            </ul>
        ),
    },

    southkorea: {
        name: "South Korea",
        contribution: (
            <ul>
                <li>Dominates global memory architecture (Samsung, SK Hynix), pushing the boundaries of DRAM and NAND Flash limits.</li>
                <li>Pioneered High-Bandwidth Memory (HBM) architecture, allowing data to move between memory and processors at the massive speeds required for modern AI.</li>
                <li>Led the transition to System-on-Chip (SoC) designs, integrating CPUs, GPUs, and cellular modems into single, power-efficient mobile footprints.</li>
            </ul>
        ),
    },

    taiwan: {
        name: "Taiwan",
        contribution: (
            <ul>
                <li>Revolutionized chip manufacturing (TSMC) by separating design from fabrication, allowing global companies to architect complex silicon without owning factories.</li>
                <li>Perfected and standardized PC motherboard architecture in the 1990s (ASUS, Gigabyte, Acer), defining how CPUs communicate with peripherals via PCIe and chipsets.</li>
            </ul>
        ),
    },
}

export default function Map() {
    const [selected, setSelected] = useState(null);

    const active = selected ? countryData[selected] : null;

    const select = (id) => () => setSelected(id);
    const selectOnKey = (id) => (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setSelected(id);
        }
    };

    const shapeProps = (id) => ({
        className: `country ${selected === id ? 'country-active' : ''}`,
        onClick: select(id),
        onKeyDown: selectOnKey(id),
        role: "button",
        tabIndex: 0,
        'aria-label' : countryData[id].name,
        'aria-pressed' : selected === id,
    });

    return (
        <section className="exhibit-grid">
            <div className="map-container">
                <svg
                    className="map-svg"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Map of East Asia"
                >
                    {/* China */}
                    <polygon
                        points="150,105 220,138 300,132 340,145 375,175 390,225 372,275 335,310 275,330 210,325 165,300 122,255 112,195 122,145"
                        {...shapeProps('china')}
                    >
                        <title>China</title>
                    </polygon>

                    {/* Japan */}
                    <ellipse
                        cx="470" cy="140" rx="17" ry="12"
                        {...shapeProps('japan')}
                    >
                    <title>Japan</title>
                    </ellipse>
                    <path
                        d="M448,168 Q478,160 502,180 Q518,200 502,222 Q480,234 458,220 Q444,198 448,168 Z"
                        {...shapeProps('japan')}
                    >
                    <title>Japan</title>
                    </path>
                    <ellipse
                        cx="448" cy="238" rx="13" ry="10"
                        {...shapeProps('japan')}
                    >
                    <title>Japan</title>
                    </ellipse>

                    {/* South Korea */}
                    <polygon
                        points="385,178 412,172 426,188 421,210 398,216 383,200"
                    >
                    <title>North Korea</title>
                    </polygon>
                    <polygon
                        points="398,216 421,210 432,232 423,251 402,249 392,230"
                        {...shapeProps('southkorea')}
                    >
                    <title>South Korea</title>
                    </polygon>

                    {/* Taiwan */}
                    <ellipse
                        cx="395" cy="298" rx="10" ry="17"
                        {...shapeProps('taiwan')}
                    >
                    <title>Taiwan</title>
                    </ellipse>

                </svg>
            </div>

            <div className="country-info-panel">
                {active ? (
                    <div className="country-info">
                        <h3>{active.name}</h3>
                        <p>{active.contribution}</p>
                    </div>
                ) : (
                    <div className="placeholder">
                        Click a country on the map to see its contribution
                    </div>
                )}
            </div>
        </section>
    );
}