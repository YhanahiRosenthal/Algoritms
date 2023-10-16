import { createGraph } from '../data-structures/graph/Graph';
import { createGraphVertex } from '../components/GraphVertex';
import { createGraphEdge } from '../components/GraphEdge';

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = createGraph(false);
  });

  test('should add vertices and edges correctly', () => {
    const vertexA = createGraphVertex('A');
    const vertexB = createGraphVertex('B');
    const edgeAB = createGraphEdge(vertexA, vertexB);

    graph.addEdge(edgeAB);

    expect(graph.getVertices()).toEqual([vertexA, vertexB]);
    expect(graph.getEdges()).toEqual([edgeAB]);
  });

  test('should find edges correctly', () => {
    const vertexA = createGraphVertex('A');
    const vertexB = createGraphVertex('B');
    const vertexC = createGraphVertex('C');
    const edgeAB = createGraphEdge(vertexA, vertexB);
    const edgeBC = createGraphEdge(vertexB, vertexC);

    graph.addEdge(edgeAB);
    graph.addEdge(edgeBC);

    expect(graph.findEdge(vertexA, vertexB)).toEqual(edgeAB);
    expect(graph.findEdge(vertexB, vertexC)).toEqual(edgeBC);
    expect(graph.findEdge(vertexA, vertexC)).toBeNull();
  });

  test('should get neighbors correctly', () => {
    const vertexA = createGraphVertex('A');
    const vertexB = createGraphVertex('B');
    const vertexC = createGraphVertex('C');
    const edgeAB = createGraphEdge(vertexA, vertexB);
    const edgeBC = createGraphEdge(vertexB, vertexC);

    graph.addEdge(edgeAB);
    graph.addEdge(edgeBC);

    expect(graph.getNeighbors(vertexA)).toEqual([vertexB]);
    expect(graph.getNeighbors(vertexB)).toEqual([vertexA, vertexC]);
  });
});