import Post from "~/server/api/models/sports";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const resultsPerPage = 4;
  let id = query.id;
  const post = await Post.find(
    {
      maincategoryurl: event.context.params.related,
      _id: { $lt: id },
    },
    {
      headline: 1,
      _id: 0,
      seourl: 1,
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
    .limit(resultsPerPage);

  const catpost = await Post.find(
    {
      maincategoryurl: event.context.params.related,
    },
    {
      headline: 1,
      _id: 0,
      seourl: 1,
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
    .limit(resultsPerPage);
  if (post.length < 3) {
    return catpost;
  } else {
    return post;
  }
});
