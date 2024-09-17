import apiRequest from "./apiRequest";

const handleMouseUp = async ({
  isDrawing,
  currentElement,
  setIsDrawing,
  setElements,
  elements,
  setCurrentElement,
  setIsLoading,
  title,
  id,
}) => {
  if (isDrawing) setIsDrawing(false);
  setIsLoading(true);

  // Saving element when mouse is released
  if (
    currentElement?.tool_type === "straight" ||
    currentElement?.tool_type === "dashed" ||
    currentElement?.tool_type === "curved" ||
    currentElement?.tool_type === "freehand"
  ) {
    setElements((prevElement) => [
      ...prevElement,
      { ...prevElement[0].lines.push(currentElement) },
    ]);
    await apiRequest.patch("/update-drawing", {
      elements,
      title,
      id,
    });
  } else if (
    currentElement?.tool_type === "rectangle" ||
    currentElement?.tool_type === "square" ||
    currentElement?.tool_type === "triangle" ||
    currentElement?.tool_type === "circle"
  ) {
    setElements((prevElement) => [
      ...prevElement,
      { ...prevElement[1].shapes.push(currentElement) },
    ]);
    await apiRequest.patch("/update-drawing", {
      elements,
      title,
      id,
    });
  }

  setCurrentElement(null);
  setIsLoading(false);
};

export default handleMouseUp;
