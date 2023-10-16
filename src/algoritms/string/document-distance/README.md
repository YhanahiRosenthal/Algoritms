# Document distance

This program computes the "distance" between two text lines (files) as the consine similarity between their word frequency vectors.

If x = (x1, x2, ..., xn) is the first vector and y = (y1, y2, ..., yn) is the second vector, then the cosine similarity between them is defined as:
 * d(x,y) = inner_product(x,y) / (norm(x) * norm(y))

where:
 * inner_product(x,y) = x1 * y1 + x2 * y2 + ... xn * yn
 * norm(x) = sqrt(inner_product(x,x))