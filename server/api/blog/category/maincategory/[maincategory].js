import Post from "~/server/api/models/sports";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const resultsPerPage = 16;
  let page = query.page >= 1 ? query.page : 1;
  page = page - 1;
  const post = await Post.find(
    {
      $or: [
        { maincategoryurl: event.context.params.maincategory },
        { subcategoryurl: event.context.params.maincategory },
      ],

      // subcategoryurl: event.context.params.maincategory,
    },
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

    .limit(resultsPerPage)
    .skip(resultsPerPage * page);

  const total = await Post.find({
    maincategoryurl: event.context.params.maincategory,
  }).countDocuments();
  return {
    category: post[0].maincategory,
    posts: post,
    total_pages: Math.ceil(total / resultsPerPage),
  };
});
