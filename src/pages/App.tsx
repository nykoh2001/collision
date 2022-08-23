import React, { useState, useEffect, useRef } from "react";

const Canvas = ({
  stageWidth,
  stageHeight,
}: {
  stageWidth: number;
  stageHeight: number;
}) => {
  const canvasRef: any = useRef();
  useEffect(() => {
    const cvs: HTMLCanvasElement = canvasRef.current;
    const ctx: any = cvs.getContext("2d");
    // CanvasRenderingContext2D | null

    const width = stageWidth * 2;
    const height = stageHeight * 2;
    ctx.scale(2, 2);
  }, []);

  return <canvas ref={canvasRef} />;
};

function App() {
  const [stageWidth, setStageWidth] = useState(window.innerWidth);
  const [stageHeight, setStageHeight] = useState(window.innerHeight);

  const onResize = (event: Event): void => {
    setStageWidth(window.innerWidth);
    setStageHeight(window.innerHeight);
  };

  const animate = () => {};

  useEffect(() => {
    window.addEventListener("resize", onResize);
    window.requestAnimationFrame(animate);
  }, []);
  return <Canvas stageWidth={stageWidth} stageHeight={stageHeight} />;
}

export default App;
