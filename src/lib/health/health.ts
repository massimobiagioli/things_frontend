import { BACKEND_URL } from '$env/static/private';

type HealthResponse = {
	status: string;
};

export const health = async (): Promise<HealthResponse> => {
	const response = await fetch(`${BACKEND_URL}/health`);
	const json = await response.json();
	return json;
};
