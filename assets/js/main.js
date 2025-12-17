async function loadPosts() {
  const cardsContainer = document.getElementById('cards');
  const filters = document.querySelectorAll('.filter');

  const renderCards = (posts) => {
    cardsContainer.innerHTML = posts.map(post => {
      const tags = post.tags.map(tag => `<span class="pill">${tag}</span>`).join(' ');
      const links = [];
      links.push(`<a class="btn ghost" href="post.html?slug=${post.slug}">Leer</a>`);
      if (post.repo) links.push(`<a class="btn ghost" href="${post.repo}" target="_blank" rel="noreferrer">Repo</a>`);
      if (post.pdf) links.push(`<a class="btn ghost" href="${post.pdf}" target="_blank" rel="noreferrer">PDF</a>`);

      const thumb = post.heroImage
        ? `<img src="${post.heroImage}" alt="${post.title}">`
        : '';

      return `
        <article class="card" data-tags="${post.tags.join(',')}">
          <div class="card__thumb">${thumb}</div>
          <div class="card__body">
            <h3 class="card__title">${post.title}</h3>
            <p class="card__excerpt">${post.excerpt}</p>
            <div class="card__meta">
              <span>${tags}</span>
            </div>
            <div class="card__links">${links.join('')}</div>
          </div>
        </article>
      `;
    }).join('');
  };

  try {
    const res = await fetch('assets/data/posts.json');
    const posts = await res.json();
    renderCards(posts);

    filters.forEach(btn => {
      btn.addEventListener('click', () => {
        filters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tag = btn.dataset.tag;
        const filtered = tag === 'all' ? posts : posts.filter(p => p.tags.includes(tag));
        renderCards(filtered);
      });
    });
  } catch (err) {
    cardsContainer.innerHTML = `<p style="color:#f87171">No se pudieron cargar los proyectos.</p>`;
    console.error(err);
  }
}

document.addEventListener('DOMContentLoaded', loadPosts);

