export function getRandomIntervalInRange (min, max, step) {
    return Math.floor( Math.random() * ( ( max - min ) / step ) ) * step + min;
}

export function getRandomNumberInRange (min, max) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}
