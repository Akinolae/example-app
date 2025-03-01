import PropTypes from "prop-types";
import { StatusBar } from "react-native";

export default function CustomStatusBar({ theme, backgroundColor }: any) {
  return (
    <StatusBar
      barStyle={theme === "dark" ? "dark-content" : "light-content"}
      backgroundColor={backgroundColor}
      translucent
    />
  );
}

CustomStatusBar.propTypes = {
  theme: PropTypes.string,
};
CustomStatusBar.defaultProps = {
  theme: "dark",
  backgroundColor: "#00000000",
};
