import type { PageServerLoad } from './$types';
import { health } from '$lib';

export const load: PageServerLoad = async () => {
	return {
		health: health()
	};
};
