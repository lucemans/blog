import { getCollection } from 'astro:content';

export async function get(context) {
    const posts = await getCollection('p');

    return {
        body: JSON.stringify({
            total: posts.length,
            post_previews: posts.map((post) => ({
                title: post.data.title,
                description: post.data.description,
                pubDate: post.data.pubDate,
                url: `https://luc.blog/p/${post.slug}`,
            })),
        }),
    };
}
