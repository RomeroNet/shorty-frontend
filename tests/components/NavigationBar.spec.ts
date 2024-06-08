import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import NavBar from '~/components/NavigationBar.vue';

describe('Footer', () => {
    test('should be mounted', async () => {
        const wrapper = mount(NavBar);

        expect(wrapper.exists()).toBe(true);
    });
});