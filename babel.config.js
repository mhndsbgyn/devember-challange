process.env.EXPO_ROUTER_APP_ROOT = "./src/app/index.tsx";

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["expo-router/babel", "react-native-reanimated/plugin"],
  };
};
