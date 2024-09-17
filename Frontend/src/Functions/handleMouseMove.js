import apiRequest from "./apiRequest";

const handleMouseMove = async ({
  event,
  isDrawing,
  currentElement,
  setCurrentElement,
  setElements,
  elements,
  setIsLoading,
  title,
  id,
}) => {
  if (!isDrawing) return;
  setIsLoading(true);
  const { offsetX, offsetY } = event.nativeEvent;

  if (currentElement?.tool_type === "curved") {
    const updatedElement = {
      ...currentElement,
      control_point: {
        x: (currentElement.start.x + offsetX) / 2,
        y: (currentElement.start.y + offsetY) / 2,
      },
      end: { x: offsetX, y: offsetY },
    };
    setCurrentElement(updatedElement);
  } else if (currentElement?.tool_type === "freehand") {
    const updatedElement = {
      ...currentElement,
      path: [...currentElement.path, { x: offsetX, y: offsetY }],
    };
    setCurrentElement(updatedElement);
  } else if (
    currentElement?.tool_type === "straight" ||
    currentElement?.tool_type === "dashed"
  ) {
    const updatedElement = {
      ...currentElement,
      end: { x: offsetX, y: offsetY },
    };
    setCurrentElement(updatedElement);
  } else if (
    currentElement?.tool_type === "rectangle" ||
    currentElement?.tool_type === "square"
  ) {
    const updatedElement = {
      ...currentElement,
      dimensions: {
        width: offsetX - currentElement.position.x,
        height:
          currentElement?.tool_type === "square"
            ? offsetX - currentElement.position.x
            : offsetY - currentElement.position.y,
      },
    };
    setCurrentElement(updatedElement);
  } else if (currentElement?.tool_type === "circle") {
    const radius = Math.sqrt(
      Math.pow(offsetX - currentElement.position.x, 2) +
        Math.pow(offsetY - currentElement.position.y, 2)
    );
    const updatedElement = {
      ...currentElement,
      dimensions: { radius },
    };
    setCurrentElement(updatedElement);
  } else if (currentElement?.tool_type === "triangle") {
    const baseX = currentElement.position.x;
    const baseY = currentElement.position.y;

    const updatedElement = {
      ...currentElement,
      vertices: [
        { x: baseX, y: baseY },
        { x: offsetX, y: offsetY },
        { x: 2 * baseX - offsetX, y: offsetY },
      ],
    };
    setCurrentElement(updatedElement);
  } else if (currentElement?.tool_type === "text") {
    setElements((prevElement) => [
      ...prevElement,
      { ...prevElement[2].texts.push(currentElement) },
    ]);
    setCurrentElement(null);
  }

  await apiRequest.patch("/update-drawing", {
    elements,
    title,
    id,
  });
  setIsLoading(false);
};

export default handleMouseMove;
