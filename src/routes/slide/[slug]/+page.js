import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		const module = await import(`$slides/${params.slug}.md`);

		return {
			Content: module.default,
			metadata: {
				...module.metadata,
				slug: params.slug
			}
		};
	} catch (e) {
		throw error(404, e);
	}
}
