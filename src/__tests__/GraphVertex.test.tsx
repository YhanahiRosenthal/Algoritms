import { createGraphVertex } from '../components/GraphVertex';
import { createGraphEdge } from '../components/GraphEdge';

describe('GraphVertex', () => {
  test('should add edges correctly', () => {
    const vertexA = createGraphVertex('A');
    const vertexB = createGraphVertex('B');
    const edgeAB = createGraphEdge(vertexA, vertexB);
    const edgeBA = createGraphEdge(vertexB, vertexA);

    vertexA.addEdge(edgeAB);
    vertexB.addEdge(edgeBA);

    expect(vertexA.getEdges()).toEqual([edgeAB]);
    expect(vertexB.getEdges()).toEqual([edgeBA]);
  });

  test('should find edge correctly', () => {
    const vertexA = createGraphVertex('A');
    const vertexB = createGraphVertex('B');
    const vertexC = createGraphVertex('C');
    const edgeAB = createGraphEdge(vertexA, vertexB);

    vertexA.addEdge(edgeAB);

    expect(vertexA.findEdge(vertexB)).toEqual(edgeAB);
    expect(vertexA.findEdge(vertexC)).toBeNull();
  });

  test('should get neighbors correctly', () => {
    const vertexA = createGraphVertex('A');
    const vertexB = createGraphVertex('B');
    const vertexC = createGraphVertex('C');
    const edgeAB = createGraphEdge(vertexA, vertexB);
    const edgeAC = createGraphEdge(vertexA, vertexC);

    vertexA.addEdge(edgeAB);
    vertexA.addEdge(edgeAC);

    expect(vertexA.getNeighbors()).toEqual([vertexB, vertexC]);
  });

  test('should get key correctly', () => {
    const vertex = createGraphVertex('A');
    expect(vertex.getKey()).toEqual('A');
  });
});