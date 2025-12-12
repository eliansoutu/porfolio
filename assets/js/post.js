function getSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get('slug');
}

function updateMeta(post) {
  document.title = `${post.title} · Portafolio`;
  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-excerpt').textContent = post.excerpt;
  document.getElementById('post-date').textContent = post.date;
  document.getElementById('post-tags').textContent = post.tags.join(' · ');

  const repo = document.getElementById('post-repo');
  if (post.repo) {
    repo.href = post.repo;
    repo.textContent = 'Repositorio';
  } else {
    repo.remove();
  }

  const links = document.getElementById('post-links');
  links.innerHTML = '';
  if (post.pdf) links.innerHTML += `<a class="btn ghost" href="${post.pdf}" target="_blank" rel="noreferrer">PDF</a>`;
  if (post.images && post.images.length) {
    links.innerHTML += `<a class="btn ghost" href="${post.images[0]}" target="_blank" rel="noreferrer">Imagen</a>`;
  }
}

async function loadPost() {
  const slug = getSlug();
  const body = document.getElementById('post-body');
  if (!slug) {
    body.textContent = 'No se encontró el proyecto.';
    return;
  }

  try {
    const posts = await fetch('assets/data/posts.json').then(r => r.json());
    const post = posts.find(p => p.slug === slug);
    if (!post) throw new Error('No encontrado');
    updateMeta(post);

    const markdown = await fetch(`content/${slug}.md`).then(r => r.text());
    body.innerHTML = marked.parse(markdown);
  } catch (err) {
    body.textContent = 'Error al cargar el proyecto.';
    console.error(err);
  }
}

document.addEventListener('DOMContentLoaded', loadPost);

