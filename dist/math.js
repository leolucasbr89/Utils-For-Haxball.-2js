export class MathEntity {
    static generateIntegerBetweenMinAndMax(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    static pointDistance(p1, p2) {
        let d1 = p1.x - p2.x;
        let d2 = p1.y - p2.y;
        return Math.sqrt(d1 * d1 + d2 * d2);
    }
}
