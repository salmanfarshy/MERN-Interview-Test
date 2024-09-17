import apiRequest from "./apiRequest";

const createDrawing = async ({
  setIsLoading,
  id,
  elements,
  title,
  navigate,
}) => {
  setIsLoading(true);
  if (id === "new") {
    const res = await apiRequest.post("/create-drawing", {
      elements,
      title,
    });
    setIsLoading(false);
    navigate(`/${res.data}`);
  }
  setIsLoading(false);
};

export default createDrawing;
