import apiRequest from "./apiRequest";

const updateTitle = async ({ elements, title, id, setIsLoading }) => {
  setIsLoading(true);
  await apiRequest.patch("/update-drawing", {
    elements,
    title,
    id,
  });
  setIsLoading(false);
};

export default updateTitle;
