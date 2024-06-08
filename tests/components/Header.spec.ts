import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Header from '~/components/Header.vue';

describe('Header', () => {
    test('should be mounted', async () => {
        const wrapper = mount(Header);

        expect(wrapper.exists()).toBe(true);
    });
});