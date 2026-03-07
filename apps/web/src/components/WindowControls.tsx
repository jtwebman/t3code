export const isLinuxElectron =
  typeof navigator !== "undefined" &&
  /Linux/i.test(navigator.platform) &&
  typeof window !== "undefined" &&
  window.desktopBridge !== undefined;

// Set a CSS custom property so any header can reserve space for the window controls.
if (isLinuxElectron) {
  document.documentElement.style.setProperty("--window-controls-width", "100px");
} else {
  document.documentElement.style.setProperty("--window-controls-width", "0px");
}
