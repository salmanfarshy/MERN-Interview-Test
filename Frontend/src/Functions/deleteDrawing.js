import apiRequest from "./apiRequest";

const deleteDrawing = async ({ id, setIsLoading, navigate }) => {
  setIsLoading(true);
  await apiRequest.post("/delete-drawing", {
    id,
  });
  setIsLoading(false);
  navigate("/");
};

export default deleteDrawing;
