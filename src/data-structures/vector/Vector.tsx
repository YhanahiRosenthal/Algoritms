type Vec2 = {
    x: number;
    y: number;
  };

  export function createVec2(x: number, y: number): Vec2 {
    return { x, y };
  }

  export function reset(vector: Vec2): Vec2 {
    return createVec2(0, 0);
  }

  export function copy(vector: Vec2): Vec2 {
    return createVec2(vector.x, vector.y);
  }

  export function negate(vector: Vec2): Vec2 {
    return createVec2(-vector.x, -vector.y);
  }

  export function equals(vector1: Vec2, vector2: Vec2): boolean {
    return vector1.x === vector2.x && vector1.y === vector2.y;
  }

  export function add(vector1: Vec2, vector2: Vec2): Vec2 {
    return createVec2(vector1.x + vector2.x, vector1.y + vector2.y);
  }

  export function subtract(vector1: Vec2, vector2: Vec2): Vec2 {
    return createVec2(vector1.x - vector2.x, vector1.y - vector2.y);
  }

  export function multiply(vector: Vec2, scalar: number): Vec2 {
    return createVec2(vector.x * scalar, vector.y * scalar);
  }

  export function divide(vector: Vec2, divisor: number): Vec2 {
    return createVec2(vector.x / divisor, vector.y / divisor);
  }

  export function normalize(vector: Vec2): Vec2 {
    const length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
    if (length === 0) {
      return createVec2(0, 0);
    }
    return divide(vector, length);
  }

  export function length(vector: Vec2): number {
    return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
  }
