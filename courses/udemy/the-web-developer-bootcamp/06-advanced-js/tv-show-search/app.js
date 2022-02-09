const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  let searchTerm = this.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  createImage(res.data);
  this.elements.query.value = '';
});

const createImage = shows => {
  for (const result of shows) {
    if (result.show.image) {
      const img = document.createElement('img');
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
