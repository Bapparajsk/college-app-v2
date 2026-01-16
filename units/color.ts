export const getGradientColors = (color: string) => {
    const colors: string[] = [];

    for (let i = 2; i >= 0; i--) {
        const opacity = i === 0 ? "00" : i * 10;
        colors.push(`${color}${opacity}`);
    }

    return colors;
};

console.log(getGradientColors("#ACD8E6FF"));
