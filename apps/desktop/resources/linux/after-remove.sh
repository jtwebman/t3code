#!/bin/bash
rm -f /usr/local/bin/t3-code /usr/local/bin/t3code

# Remove installed icon sizes
for sz in 16x16 24x24 32x32 48x48 64x64 128x128 256x256 512x512 1024x1024; do
  rm -f "/usr/share/icons/hicolor/$sz/apps/t3-code-desktop.png"
done
gtk-update-icon-cache /usr/share/icons/hicolor/ 2>/dev/null || true
