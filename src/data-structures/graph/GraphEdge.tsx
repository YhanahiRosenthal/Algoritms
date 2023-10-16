export function createGraphEdge(startVertex, endVertex, weight = 0) {
  return {
    startVertex,
    endVertex,
    weight,
  };
}
