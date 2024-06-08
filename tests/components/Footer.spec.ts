import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Footer from '~/components/Footer.vue';

describe('Footer', () => {
    test('should be mounted', async () => {
        const wrapper = mount(Footer);

        expect(wrapper.exists()).toBe(true);
    });
});