(() => {
  const tools=window.TOOLKIT_TOOLS||[];
  const list=document.getElementById("tool-list"),docs=document.getElementById("docs-list"),filters=document.getElementById("category-filters"),search=document.getElementById("tool-search"),resultCount=document.getElementById("result-count"),emptyState=document.getElementById("empty-state");
  let activeCategory="All";
  const escapeHtml=(value)=>String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
  const categories=["All",...new Set(tools.map(tool=>tool.category))];

  function toolMarkup(tool,index){
    const steps=tool.steps.map(step=>`<li>${escapeHtml(step)}</li>`).join("");
    const notes=tool.notes.map(note=>`<li>${escapeHtml(note)}</li>`).join("");
    return `<details class="tool-card" id="${escapeHtml(tool.slug)}" data-category="${escapeHtml(tool.category)}">
      <summary><span class="tool-number">${String(index+1).padStart(2,"0")}</span><span><strong class="tool-title">${escapeHtml(tool.title)}</strong><span class="tool-category">${escapeHtml(tool.category)}</span></span><span class="tool-summary">${escapeHtml(tool.summary)}</span><span class="tool-toggle" aria-hidden="true"></span></summary>
      <div class="tool-detail"><div><h4>Where to find it</h4><p class="meta-line"><code>${escapeHtml(tool.menu)}</code></p><h4>Source</h4><p class="meta-line"><code>${escapeHtml(tool.source)}</code></p><a class="pdf-link" href="${escapeHtml(tool.pdf)}" target="_blank" rel="noopener">Open complete PDF guide ↗</a></div><div><h4>Basic workflow</h4><ol>${steps}</ol><h4>Important notes</h4><ul>${notes}</ul></div></div>
    </details>`;
  }

  function openHashTarget(){
    let slug;
    try { slug=decodeURIComponent(location.hash.slice(1)); } catch { return; }
    if(!slug)return;
    const target=document.getElementById(slug);
    if(target&&target.matches("details"))target.open=true;
  }

  function renderTools(){
    const query=search.value.trim().toLowerCase();
    const filtered=tools.filter(tool=>{
      const categoryMatch=activeCategory==="All"||tool.category===activeCategory;
      const text=[tool.title,tool.category,tool.summary,tool.menu,tool.source,...tool.steps,...tool.notes].join(" ").toLowerCase();
      return categoryMatch&&(!query||text.includes(query));
    });
    list.innerHTML=filtered.map(tool=>toolMarkup(tool,tools.indexOf(tool))).join("");
    resultCount.textContent=`${filtered.length} of ${tools.length} tools`;
    emptyState.hidden=filtered.length!==0;
    openHashTarget();
  }

  filters.innerHTML=categories.map(category=>`<button class="filter-button" type="button" data-category="${escapeHtml(category)}" aria-pressed="${category===activeCategory}">${escapeHtml(category)}</button>`).join("");
  filters.addEventListener("click",event=>{
    const button=event.target.closest("button[data-category]");if(!button)return;
    activeCategory=button.dataset.category;
    filters.querySelectorAll("button").forEach(item=>item.setAttribute("aria-pressed",String(item===button)));
    renderTools();
  });
  docs.innerHTML=tools.map(tool=>`<div class="doc-row"><strong>${escapeHtml(tool.title)}</strong><span>${escapeHtml(tool.category)}</span><a href="${escapeHtml(tool.pdf)}" target="_blank" rel="noopener">Open PDF ↗</a></div>`).join("");
  search.addEventListener("input",renderTools);
  window.addEventListener("hashchange",()=>{
    let slug;
    try { slug=decodeURIComponent(location.hash.slice(1)); } catch { return; }
    if(tools.some(tool=>tool.slug===slug)){
      activeCategory="All"; search.value="";
      filters.querySelectorAll("button").forEach(item=>item.setAttribute("aria-pressed",String(item.dataset.category==="All")));
      renderTools();
      document.getElementById(slug)?.scrollIntoView();
    } else openHashTarget();
  });
  document.getElementById("year").textContent=new Date().getFullYear();
  renderTools();
})();
