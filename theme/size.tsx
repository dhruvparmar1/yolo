import { Dimensions, PixelRatio } from "react-native";

// Get screen dimensions
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");

const BASE_WIDTH = 360; // Your design's base width
const BASE_HEIGHT = 828; // Design base height

const rs = (size: number) => (SCREEN_WIDTH / BASE_WIDTH) * size; // Responsive size
const rh = (size: number) => (SCREEN_HEIGHT / BASE_HEIGHT) * size; // Responsive height
const rf = (size: number) =>
  PixelRatio.roundToNearestPixel((SCREEN_WIDTH / BASE_WIDTH) * size); // Responsive font size

const wp = (percent: number) => (SCREEN_WIDTH * percent) / 100; // Width percentage
const hp = (percent: number) => (SCREEN_HEIGHT * percent) / 100; // Height percentage

export { rs, rh, rf, wp, hp };
