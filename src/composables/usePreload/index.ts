export function usePreload() {
	async function preloadImage(url: string): Promise<string> {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.src = url;
			img.onload = () => resolve(url);
			img.onerror = reject;
		});
	}

	return {
		preloadImage
	};
}
