var defaultMondrianColors = [
    { color: '#ffffff', weight: 0.675 },
    { color: '#000000', weight: 0.025 },
    { color: '#E24141', weight: 0.1 },
    { color: '#f5f589', weight: 0.1 },
    { color: '#464691', weight: 0.1 }
];

export function getWeightedColor (colors = defaultMondrianColors) {
    var random = Math.random(),
        sum = 0;

    for (let i = 0; i < colors.length; i++) {
        sum += colors[i].weight;
        if (random < sum) {
            return colors[i].color;
        }
    }
}
