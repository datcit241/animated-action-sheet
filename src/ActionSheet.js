import { useState, useEffect } from "react";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring, config } from "@react-spring/web";
import { defaultSnapPoints } from "./defaultSnapPoints";

function ActionSheet({ snapPoints, children }) {
  const TOOL_BAR_HEIGHT = 44;
  const TAB_BAR_HEIGHT = 50;
  const PADDING = 10;
  const SCREEN_HEIGHT =
    window.innerHeight - TOOL_BAR_HEIGHT - TAB_BAR_HEIGHT - PADDING;

  if (!snapPoints) snapPoints = defaultSnapPoints;
  const snapValues = snapPoints.values
    .sort((p1, p2) => p1 - p2)
    .map((point) => point * SCREEN_HEIGHT);
  console.log(snapValues);

  const [active, setActive] = useState(false);
  const handlePosition = useSpring({
    y: active ? snapValues[snapPoints.initialPoint] : SCREEN_HEIGHT,
    config: config.wobbly,
  });
  useEffect(() => {
    setActive(true);
  }, [snapPoints]);

  const handleGesture = useDrag(({ dragging, xy: [, lastPos] }) => {
    lastPos -= TOOL_BAR_HEIGHT + PADDING;
    if (dragging) {
      if (lastPos >= 0 && lastPos <= SCREEN_HEIGHT) {
        handlePosition.y.set(lastPos);
        console.log(lastPos)
      }
    } else {
      for (let i = 1; i < snapValues.length; i++) {
        if (lastPos < snapValues[i]) {
          if (lastPos < (snapValues[i - 1] + snapValues[i]) / 2) {
            handlePosition.y.start(snapValues[i - 1]);
          } else {
            handlePosition.y.start(snapValues[i]);
            if (i === snapValues.length - 1) setActive(false);
          }
          break;
        }
      }
    }
  });

  return (
    <>
      {active && (
        <animated.div
          className="Action-sheet"
          {...handleGesture()}
          style={{
            y: handlePosition.y,
            height: handlePosition.y.to(
              [0, SCREEN_HEIGHT],
              [SCREEN_HEIGHT, 0]
            ),
            touchAction: "none",
          }}
        >
          {children}
        </animated.div>
      )}
    </>
  );
}

export default ActionSheet;
