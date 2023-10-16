export function createGraph(directed) {
  const vertices = {};
  const edges = [];

  function addVertex(vertex) {
    vertices[vertex.getKey()] = vertex;
  }

  function addEdge(edge) {
    const start = edge.startVertex;
    const end = edge.endVertex;

    if (!vertices[start.getKey()]) {
      addVertex(start);
    }

    if (!vertices[end.getKey()]) {
      addVertex(end);
    }

    edges.push(edge);

    if (directed) {
      start.addEdge(edge);
    } else {
      start.addEdge(edge);
      end.addEdge(edge);
    }
  }

  function getVertex(vertex) {
    return vertices[vertex.getKey()] || null;
  }

  function getVertices() {
    return Object.keys(vertices).map((k) => vertices[k]);
  }

  function getEdges() {
    return edges;
  }

  function getNeighbors(vertex) {
    return getVertex(vertex).getNeighbors();
  }

  function findEdge(start, end) {
    const vertex = getVertex(start);
    if (!vertex) {
      return null;
    }
    return vertex.findEdge(end);
  }

  function toString() {
    return Object.keys(vertices).toString();
  }

  return {
    addVertex,
    addEdge,
    getVertex,
    getVertices,
    getEdges,
    getNeighbors,
    findEdge,
    toString,
  };
}
