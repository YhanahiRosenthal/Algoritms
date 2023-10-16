interface HashTable {
    [key: string]: any;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export function createHashTable(pointsLength: number = 32): HashTable {
    const points: Array<Array<{ key: string; value: any }>> = new Array(pointsLength);

    function hash(key: string): number {
      return key
        .split("")
        .map((k) => k.charCodeAt(0))
        .reduce((a, b) => a + b, 0) % points.length;
    }

    function set(key: string, value: any) {
      const index = hash(key);
      if (!points[index]) {
        points[index] = [];
      }
      const existingPair = points[index].find((pair) => pair.key === key);
      if (existingPair) {
        existingPair.value = value;
      } else {
        points[index].push({ key, value });
      }
    }

    function get(key: string) {
      const index = hash(key);
      if (!points[index]) {
        return undefined;
      }
      const pair = points[index].find((p) => p.key === key);
      return pair ? pair.value : undefined;
    }

    function remove(key: string) {
      const index = hash(key);
      if (points[index]) {
        points[index] = points[index].filter((pair) => pair.key !== key);
      }
    }

    function getKeys(): string[] {
      return points.reduce((keys, point) => {
        if (point) {
          const pointKeys = point.map((pair) => pair.key);
          keys.push(...pointKeys);
        }
        return keys;
      }, [] as string[]);
    }

    function getValues(): any[] {
      return points.reduce((values, point) => {
        if (point) {
          const pointValues = point.map((pair) => pair.value);
          values.push(...pointValues);
        }
        return values;
      }, []);
    }

    return {
      set,
      get,
      remove,
      getKeys,
      getValues,
    };
  }
