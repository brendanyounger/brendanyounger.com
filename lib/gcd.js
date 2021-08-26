var { log, max, ceil, sqrt, PI } = Math;

function gcd(x, y) {
  var iter = 0;

  if(y > x) {
    var t = x;
    x = y;
    y = t;
  }

  while(y > 0) {
    var t = x;
    x = y;
    y = t % y;
    iter += 1;
  }

  return [x, iter];
}

function gcdIterMax(x, y) {
  var N = max(x, y);
  var maxIter = ceil(log(N * sqrt(5)) / log((1 + sqrt(5)) / 2)) - 2;

  return maxIter;
}

function gcdIterAvg(x, y) {
  var N = max(x, y);
  var avgIter = 12 * log(2) / (PI * PI) * log(N);

  return avgIter;
}

export function iterations(xMin, xMax, yMin, yMax) {
  const surface = [];

  for(let y = yMin; y < yMax; y++) {
    const plane = [];
    surface.push(plane);
    for(let x = xMin; x < xMax; x++) {
      plane.push(gcd(x, y)[1]);
    }
  }

  return surface;
}

export function maxIterations(xMin, xMax, yMin, yMax) {
  const surface = [];

  for(let y = yMin; y < yMax; y++) {
    const plane = [];
    surface.push(plane);
    for(let x = xMin; x < xMax; x++) {
      plane.push(gcdIterMax(x, y));
    }
  }

  return surface;
}

export function avgIterations(xMin, xMax, yMin, yMax) {
  const surface = [];

  for(let y = yMin; y < yMax; y++) {
    const plane = [];
    surface.push(plane);
    for(let x = xMin; x < xMax; x++) {
      plane.push(gcdIterAvg(x, y));
    }
  }

  return surface;
}
