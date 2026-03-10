import { MinusIcon, SquareIcon, XIcon } from "lucide-react";
import { APP_DISPLAY_NAME } from "../branding";

/**
 * Whether we're running in Electron under WSL2 (WSLg).
 * WSLg's Weston compositor ignores GTK dark theme hints, so we render a
 * fully custom title bar with window controls instead of relying on the OS.
 * Native Linux gets a normal window frame — no custom title bar needed.
 */
export const isWslElectron =
  typeof window !== "undefined" &&
  window.desktopBridge !== undefined &&
  window.desktopBridge.isWsl;

const btnBase =
  "inline-flex size-8 items-center justify-center text-muted-foreground transition-colors cursor-pointer";

/**
 * Full-width custom title bar for WSL2. Sits above all app content so nothing
 * overlaps — no padding hacks needed anywhere else.
 */
export function WslTitleBar() {
  const bridge = window.desktopBridge;
  if (!bridge) return null;

  return (
    <div
      className="flex h-9 shrink-0 items-center border-b border-border bg-background"
      style={{ WebkitAppRegion: "drag" } as React.CSSProperties}
    >
      <span className="flex-1 truncate pl-3 text-xs font-medium text-muted-foreground">
        {APP_DISPLAY_NAME}
      </span>
      <div
        className="flex items-center"
        style={{ WebkitAppRegion: "no-drag" } as React.CSSProperties}
      >
        <button
          type="button"
          aria-label="Minimize"
          className={`${btnBase} hover:bg-muted-foreground/20`}
          onClick={() => bridge.windowMinimize()}
        >
          <MinusIcon className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Maximize"
          className={`${btnBase} hover:bg-muted-foreground/20`}
          onClick={() => bridge.windowMaximize()}
        >
          <SquareIcon className="size-3.5" />
        </button>
        <button
          type="button"
          aria-label="Close"
          className={`${btnBase} hover:bg-red-500 hover:text-white`}
          onClick={() => bridge.windowClose()}
        >
          <XIcon className="size-4" />
        </button>
      </div>
    </div>
  );
}
