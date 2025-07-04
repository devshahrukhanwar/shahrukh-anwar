import axios from 'axios';

export interface Contact {
	name: string;
	email: string;
	message?: string;
}

export function useNotification() {
	async function sendNotification(contact: Contact): Promise<void> {
		try {
			const formData = new FormData();
			Object.entries(contact).forEach(([key, value]) => {
				if (value !== undefined && value !== null) {
					formData.append(key, value);
				}
			});

			await axios.post(
				`${import.meta.env.VITE_API_URL}/notifications`,
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			);
		} catch (error) {
			console.error('Error fetching social data:', error);
		}
	}

	return { sendNotification };
}
