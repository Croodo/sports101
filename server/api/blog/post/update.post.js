import Post from "~/server/api/models/sports";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const post = await Post.updateOne(
    { seourl: body.seourl },
    {
      $set: {
        title: body.title,
        headline: body.headline,
        description: body.description,
        body: body.body,
      },
      $currentDate: { lastModified: true },
    }
  );
  return post;
});
