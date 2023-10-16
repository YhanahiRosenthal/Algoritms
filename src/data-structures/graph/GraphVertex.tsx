export function createGraphVertex(key) {
  const edges = [];

  function addEdge(edge) {
    edges.push(edge);
  }

  function findEdge(vertex) {
    const edge = edges.find((edge) => {
      return edge.startVertex === vertex || edge.endVertex === vertex;
    });

    return edge || null;
  }

  function getNeighbors() {
    return edges.map((edge) => {
      return edge.startVertex === this ? edge.endVertex : edge.startVertex;
    });
  }

  function getEdges() {
    return edges;
  }

  function getKey() {
    return key;
  }

  return {
    addEdge,
    findEdge,
    getNeighbors,
    getEdges,
    getKey,
  };
}
