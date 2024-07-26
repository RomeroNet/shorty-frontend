import {describe, expect, it} from "vitest";

describe('GenerateOrigin', () => {
    it('should return a random origin with 5 characters', () => {
        const result = GenerateOrigin();
        expect(result).toBeDefined()
        expect(result.length).toBe(5);
    });
});