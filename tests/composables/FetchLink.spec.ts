import {describe, expect, it} from "vitest";
import {mockNuxtImport} from "@nuxt/test-utils/runtime";

mockNuxtImport('ApiFetchLink', () => {
    return () => {
        return {
            uuid: 'uuid',
            origin: 'origin',
            destination: 'destination',
            visit_count: 0,
            created_at: 'created_at',
            updated_at: 'updated_at',
        }
    }
})

describe("FetchLink", () => {
    it('should return a Link object', () => {
        const result = FetchLink('origin');

        expect(result).toEqual({
            uuid: 'uuid',
            origin: 'origin',
            destination: 'destination',
            visit_count: 0,
            created_at: 'created_at',
            updated_at: 'updated_at',
        });
    });
});