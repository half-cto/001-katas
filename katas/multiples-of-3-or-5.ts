// quick n dirty

export class Challenge {
    static solution(number: number): number {
        if (number < 0) return 0;
        let result = 0;

        const times5 = Math.floor((number - 1) / 5);
        for (let i = 1; i <= times5; i++) {
            result += 5 * i;
        }
        const times3 = Math.floor((number - 1) / 3);
        for (let i = 1; i <= times3; i++) {
            if ((i * 3) % 5 !== 0) result += 3 * i;
        }
        return result;
    }
}
