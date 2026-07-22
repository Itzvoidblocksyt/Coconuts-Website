const links = [
  {
    label: "Coconut's Palmtree",
    url: 'https://discord.gg/GquCcubN7D',
    icon: `<img src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png" alt="Discord logo" />`
  },
  {
    label: "Coconut's Youtube Channel",
    url: 'https://www.youtube.com/@Void_Coconut245',
    icon: `<svg viewBox="0 0 576 512" aria-hidden="true" focusable="false"><path fill="#FF0000" d="M549.655 124.083c-6.281-23.715-24.851-42.279-48.565-48.559C458.428 64 288 64 288 64s-170.43 0-213.089 11.524c-23.715 6.28-42.284 24.844-48.565 48.559C16 166.742 16 256 16 256s0 89.257 10.346 131.917c6.28 23.715 24.851 42.279 48.565 48.559C117.57 448 288 448 288 448s170.428 0 213.09-11.524c23.714-6.28 42.284-24.844 48.565-48.559C560 345.257 560 256 560 256s0-89.257-10.345-131.917zm-291.254 213.72V174.2l146.284 96.3-146.284 96.304z"/></svg>`
  }
];

const videos = [
  {
    title: 'Clips: Weekend Highlight Reel',
    url: 'https://www.youtube.com/@Void_Coconut245/videos',
    thumb: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    description: 'Fast-paced moments from the weekend stream, including top plays and surprise wins.',
    tag: 'Weekend highlights'
  },
  {
    title: 'Top PvP Moments & Reactions',
    url: 'https://www.youtube.com/@Void_Coconut245/videos',
    thumb: 'https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg',
    description: 'Edit-packed PvP highlights with live reactions and energy from the chat.',
    tag: 'PvP highlights'
  },
  {
    title: 'Best Fails, Wins, and Surprises',
    url: 'https://www.youtube.com/@Void_Coconut245/videos',
    thumb: 'https://img.youtube.com/vi/aqz-KE-bpKQ/hqdefault.jpg',
    description: 'A mix of chaotic moments, clutch plays, and the funniest fails from recent clips.',
    tag: 'Best of the week'
  }
];

function renderLinks() {
  const container = document.getElementById('links-list');
  if (!container) return;

  container.innerHTML = links
    .map(
      (item) => `
        <a class="link-card" href="${item.url}" target="_blank" rel="noreferrer">
          <span>${item.icon}</span>
          <span>${item.label}</span>
        </a>
      `
    )
    .join('');
}

function renderVideos() {
  const container = document.getElementById('videos');
  if (!container) return;

  container.innerHTML = videos
    .map(
      (video) => `
        <a class="video-card" href="${video.url}" target="_blank" rel="noreferrer">
          <img src="${video.thumb}" alt="${video.title}" />
          <div class="video-info">
            <strong>${video.title}</strong>
            <span>${video.description}</span>
            <span class="video-tag">${video.tag}</span>
          </div>
        </a>
      `
    )
    .join('');
}

renderLinks();
renderVideos();
