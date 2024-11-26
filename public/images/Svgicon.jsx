import React, {  useState, useEffect } from 'react';
// import styles from "./svg.module.css"

const SvgIcon = ({ iconName, size, className, ...props }) => {

    const [svg, setSvg] = useState(null);

    useEffect(() => {
        // Dynamically import the SVG file based on iconName
        import(`./icons/${iconName}.svg`)
            .then((svg) => {
                setSvg(svg.default);
            })
            .catch(err => console.error(`Error loading ${iconName}.svg`, err));
    }, [iconName]);

    if (!svg) {
        return null;
    }

    return (
        <img src={svg} alt={iconName} width={size} height={size}  className={` ${className}`}  {...props} />
    );
};

export default SvgIcon;

