import { getCollection } from 'astro:content';

export async function get(context) {
    const raw_posts = await getCollection('p');

    // Sort by latest first
    const sorted_posts = raw_posts.sort((a, b) => {
        const a_date = new Date(a.data.pubDate);
        const b_date = new Date(b.data.pubDate);

        return b_date - a_date;
    });

    // Let sliced_posts be the first 5 posts
    const sliced_posts = sorted_posts.slice(0, 5);

    return {
        body: JSON.stringify({
            total: sliced_posts.length,
            post_previews: sliced_posts.map((post) => ({
                title: post.data.title,
                description: post.data.description,
                pubDate: post.data.pubDate,
                url: `https://luc.blog/p/${post.slug}`,
            })),
        }),
    };
}
