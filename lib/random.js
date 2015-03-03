export function getRandomIntervalInRange (min, max, step) {
    return Math.floor( Math.random() * ( ( max - min ) / step ) ) * step + min;
}
