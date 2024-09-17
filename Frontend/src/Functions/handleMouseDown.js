const handleMouseDown = ({
  event,
  tool,
  setCurrentElement,
  setIsDrawing,
  color,
}) => {
  console.log(event);
  const { offsetX, offsetY } = event.nativeEvent;

  setIsDrawing(true);

  switch (tool) {
    case "straight":
    case "dashed":
      setCurrentElement({
        tool_type: tool,
        start: { x: offsetX, y: offsetY },
        end: { x: offsetX, y: offsetY },
        color,
        thickness: 2,
        ...(tool === "dashed" && { dash_length: 6, gap_length: 3 }),
      });
      break;
    case "curved":
      setCurrentElement({
        tool_type: tool,
        start: { x: offsetX, y: offsetY },
        control_point: { x: offsetX, y: offsetY },
        end: { x: offsetX, y: offsetY },
        color,
        thickness: 2,
      });
      break;
    case "freehand":
      setCurrentElement({
        tool_type: tool,
        path: [{ x: offsetX, y: offsetY }],
        color,
        thickness: 2,
      });
      break;
    case "rectangle":
    case "square":
      setCurrentElement({
        tool_type: tool,
        position: { x: offsetX, y: offsetY },
        dimensions: { width: 0, height: 0 },
        color,
      });
      break;
    case "circle":
      setCurrentElement({
        tool_type: tool,
        position: { x: offsetX, y: offsetY },
        dimensions: { radius: 0 },
        color,
      });
      break;
    case "triangle":
      setCurrentElement({
        tool_type: tool,
        position: { x: offsetX, y: offsetY },
        vertices: [
          { x: offsetX, y: offsetY },
          { x: offsetX, y: offsetY },
          { x: offsetX, y: offsetY },
        ],
        color,
      });
      break;
    case "text":
      const text = prompt("Enter the text:");
      if (text) {
        setCurrentElement({
          tool_type: tool,
          position: { x: offsetX, y: offsetY },
          content: text,
          font_size: 20,
          color,
        });
      }
      break;
    default:
      break;
  }
};

export default handleMouseDown;
