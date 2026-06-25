"use client";

import { useMemo } from "react";
import {
  Alignment,
  Fit,
  Layout,
  useRive,
} from "@rive-app/react-canvas";

type RiveCanvasProps = {
  src: string;
  stateMachine?: string;
  artboard?: string;
  fit?: Fit;
  alignment?: Alignment;
  className?: string;
  interactive?: boolean;
};

export default function RiveCanvas({
  src,
  stateMachine = "State Machine 1",
  artboard = "Artboard",
  fit = Fit.Contain,
  alignment = Alignment.Center,
  className = "",
  interactive = true,
}: RiveCanvasProps) {
  const layout = useMemo(
    () => new Layout({ fit, alignment }),
    [fit, alignment]
  );

  const { RiveComponent, setContainerRef } = useRive(
    {
      src,
      stateMachines: stateMachine,
      artboard,
      autoplay: true,
      layout,
      isTouchScrollEnabled: !interactive,
    },
    {
      shouldResizeCanvasToContainer: true,
      useDevicePixelRatio: true,
    }
  );

  return (
    <div
      ref={setContainerRef}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        touchAction: interactive ? "pan-y" : undefined,
      }}
    >
      <RiveComponent
        className="rive-canvas"
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
}
