import { GetCurrentYear } from "~/composables/GetCurrentYear";
import { describe, expect, it } from "vitest";
describe('GetCurrentYear', () => {
    it('should return the current year', () => {
        const currentYear = new Date().getFullYear();
        const result = GetCurrentYear();
        expect(result).toBe(currentYear);
    });
});