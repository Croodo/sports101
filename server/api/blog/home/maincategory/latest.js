import Post from "~/server/api/models/sports";
export default defineEventHandler(async (event) => {
  const secondLimit = 5;
  const posts = await Post.find(
    {},
    {
      headline: 1,
      _id: 0,
      seourl: 1,
      title: 1,
      heroimg: 1,
      shortdesc: 1,
      maincategory: 1,
      subcategory: 1,
      maincategoryurl: 1,
      subcategoryurl: 1,
      date: 1,
    }
  )
    .sort({ _id: -1 })
    .limit(secondLimit);
  return {
    posts: posts,
  };
});
