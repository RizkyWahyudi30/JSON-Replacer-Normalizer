function getPublishedArticles(response) {
  let dataApi = response.data;

  let filterPublisedArticle = dataApi.filter(
    (article) => article.status === "published",
  );
  return filterPublisedArticle;
}

function toArticleSummary(article) {
  return {
    id: article.id,
    title: article.title,
    authorName: article.author.name,
    views: article.stats.views,
  };
}

function normalizeArticles(response) {
  let dataApi = response.data;

  let articlePubslihed = dataApi
    .filter((article) => article.status === "published")
    .map((article) => {
      return {
        id: article.id,
        title: article.title,
        authorName: article.author.name,
        views: article.stats.views,
      };
    });

  return articlePubslihed;
}

const apiResponse = {
  data: [
    {
      id: "a1",
      title: "Learning JavaScript",
      status: "published",
      author: { name: "Ava Stone" },
      stats: { views: 1200 },
    },
    {
      id: "a2",
      title: "Draft Notes",
      status: "draft",
      author: { name: "Noah Kim" },
      stats: { views: 50 },
    },
    {
      id: "a3",
      title: "Async Basics",
      status: "published",
      author: { name: "Mina Patel" },
      stats: { views: 900 },
    },
  ],
  meta: {
    total: 3,
  },
};

console.log(normalizeArticles(apiResponse));
console.log(getPublishedArticles(apiResponse).length);
console.log(toArticleSummary(apiResponse.data[0]));
