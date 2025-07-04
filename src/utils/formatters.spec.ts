import { describe, expect, it, vi } from 'vitest';
import { ref } from 'vue';

import { formattedText, getDate, getHTML, totalExperience } from './formatters';

// Mock experience config
vi.mock('@/config', () => ({
	experience: { joining: 2020 }
}));

describe('formatters', () => {
	it('should calculate totalExperience correctly', () => {
		expect(typeof totalExperience.value).toBe('number');
		expect(totalExperience.value).toBeGreaterThanOrEqual(0);
	});

	it('should return formatted date string', () => {
		expect(getDate('2023-01-01')).toBe('January 1, 2023');
	});

	it('should format text with ellipsis if too long', () => {
		expect(formattedText('Hello World', 5)).toBe('Hello...');
		expect(formattedText('Short', 10)).toBe('Short');
	});

	it('should return HTML string from a Vue component', () => {
		const Dummy = { template: '<div>Test</div>' };
		const html = getHTML(Dummy);
		expect(html).toContain('Test');
	});
});
