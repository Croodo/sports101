import Post from "~/server/api/models/sports";
export default defineEventHandler(async (event) => {
  const post = await Post.findOne({
    seourl: event.context.params.post,
  });
  return post;
});
