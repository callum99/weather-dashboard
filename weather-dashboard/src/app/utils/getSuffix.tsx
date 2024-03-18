export const getSuffix = (metric) => {
    let suffix = "";
    if (metric === "unitGroup=uk") suffix = "°C";
    if (metric === "unitGroup=us") suffix = "°F";

    return suffix;
}
