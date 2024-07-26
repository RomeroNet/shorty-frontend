import {describe, expect, it} from "vitest";
import {mockNuxtImport} from "@nuxt/test-utils/runtime";

mockNuxtImport('ApiCreateLink', () => {
    return () => {
        return Promise.resolve('createLinkResponse');
    }
});

describe('GenerateLink', () => {
    it('should generate a link', async () => {
        const result = GenerateLink({
            origin: 'origin',
            destination: 'destination'
        });

        expect(result).toBeInstanceOf(Promise);
        expect(await result).toBe('createLinkResponse');
    });
});