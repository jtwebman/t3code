#!/bin/bash
# Create CLI wrappers that detach from the terminal
APPDIR="/opt/T3 Code (Alpha)"
for name in t3-code t3code; do
  printf '#!/bin/bash\nnohup "%s/t3-code-desktop" --enable-features=UseOzonePlatform,WaylandWindowDecorations --ozone-platform-hint=auto --gtk-version=4 "$@" &>/dev/null &\ndisown\n' "$APPDIR" > "/usr/local/bin/$name"
  chmod +x "/usr/local/bin/$name"
done
