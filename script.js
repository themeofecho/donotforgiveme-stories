(() => {
  const grid = document.getElementById('works-grid');
  const works = Array.isArray(window.STORY_WORKS) ? window.STORY_WORKS : [];
  const allowedThemes = new Set(['secrets', 'record', 'closer', 'new']);
  const coverContent = {
    secrets: { top: 'TOP / SECRET LOVE', mark: '05', bottom: 'FIVE SECRETS' },
    record: { top: 'PRIVATE / CAMERA OFF', mark: 'REC', bottom: 'OFF THE RECORD' },
    closer: { top: 'NEXT TO YOU / 02:09', mark: '♡', bottom: 'WHEN YOU COME AROUND' },
    new: { top: 'COMING / SOON', mark: '✳', bottom: 'A NEW STORY' }
  };

  function makeCard(work) {
    const theme = allowedThemes.has(work.theme) ? work.theme : 'new';
    const visual = coverContent[theme];
    const card = document.createElement('a');
    card.className = `work-card theme-${theme}`;
    card.href = work.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.setAttribute('aria-label', `开始游玩《${work.title}》，在新页面打开`);

    const cover = document.createElement('div');
    cover.className = 'work-cover';
    cover.setAttribute('aria-hidden', 'true');
    const top = document.createElement('span');
    top.className = 'cover-top';
    top.textContent = visual.top;
    const mark = document.createElement('span');
    mark.className = 'cover-mark';
    if (theme === 'record') {
      const dot = document.createElement('span');
      dot.textContent = '●';
      mark.append(dot, document.createTextNode(visual.mark));
    } else {
      mark.textContent = visual.mark;
    }
    const bottom = document.createElement('span');
    bottom.className = 'cover-bottom';
    bottom.textContent = visual.bottom;
    cover.append(top, mark, bottom);

    const info = document.createElement('div');
    info.className = 'work-info';
    const title = document.createElement('h2');
    title.textContent = work.title;
    const sub = document.createElement('p');
    sub.className = 'work-subtitle';
    sub.textContent = work.audience || work.english || '';
    const play = document.createElement('span');
    play.className = 'work-play';
    const text = document.createElement('span');
    text.textContent = '立即开始游玩';
    const arrow = document.createElement('span');
    arrow.className = 'arrow';
    arrow.textContent = '↗';
    arrow.setAttribute('aria-hidden', 'true');
    play.append(text, arrow);
    info.append(title, sub, play);
    card.append(cover, info);
    return card;
  }

  if (grid) {
    grid.replaceChildren();
    if (works.length) {
      works.forEach(work => grid.appendChild(makeCard(work)));
    } else {
      grid.textContent = '新故事正在整理中。';
    }
  }
  const count = document.getElementById('works-count');
  if (count) count.textContent = `${String(works.length).padStart(2, '0')} 部作品`;
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
