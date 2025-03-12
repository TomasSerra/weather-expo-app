import React from "react";
import { Image, View } from "react-native";
import { icons, sizes, IconSize, IconsName } from "./icons";

interface WeatherIconProps {
  name: IconsName;
  size?: IconSize;
  isday?: boolean;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({
  name,
  size = IconSize.medium,
  isday = true,
}) => {
  const dayOrNight: string = isday ? "day" : "night";
  const imageUri = icons[dayOrNight][name];
  const sizeNumber = sizes[size];
  const styleSize = { width: sizeNumber, height: sizeNumber };

  return (
    <View style={styleSize}>
      <Image
        source={imageUri}
        style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
      />
    </View>
  );
};

export default WeatherIcon;
