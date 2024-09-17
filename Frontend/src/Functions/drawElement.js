const drawElement = (ctx, element) => {
  const {
    start,
    end,
    color,
    thickness,
    dash_length,
    gap_length,
    path,
    control_point,
    position,
    dimensions,
    vertices,
    content,
    font_size,
  } = element;
  ctx.strokeStyle = color;
  ctx.lineWidth = thickness;
  ctx.fillStyle = color;

  if (element.tool_type === "dashed") {
    ctx.setLineDash([dash_length, gap_length]);
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  } else if (element.tool_type === "straight") {
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  } else if (element.tool_type === "freehand") {
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(path[0].x, path[0].y);
    path.forEach((point) => ctx.lineTo(point.x, point.y));
    ctx.stroke();
  } else if (element.tool_type === "curved") {
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.quadraticCurveTo(control_point.x, control_point.y, end.x, end.y);
    ctx.stroke();
  } else if (
    element.tool_type === "rectangle" ||
    element.tool_type === "square"
  ) {
    ctx.fillRect(position.x, position.y, dimensions.width, dimensions.height);
  } else if (element.tool_type === "circle") {
    ctx.beginPath();
    ctx.arc(position.x, position.y, dimensions.radius, 0, Math.PI * 2);
    ctx.fill();
  } else if (element.tool_type === "triangle") {
    ctx.beginPath();
    ctx.moveTo(vertices[0].x, vertices[0].y);
    ctx.lineTo(vertices[1].x, vertices[1].y);
    ctx.lineTo(vertices[2].x, vertices[1].y);
    ctx.closePath();
    ctx.fill();
  } else if (element.tool_type === "text") {
    ctx.font = `${font_size}px Arial`;
    ctx.fillStyle = color;
    ctx.fillText(content, position.x, position.y);
  }
};

export default drawElement;
