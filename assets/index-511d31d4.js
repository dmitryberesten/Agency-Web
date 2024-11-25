(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const L=[{name:"Dima Beresten",role:"Project Manager",jobs:"Project Management",skillsResponsibilities:{general:{tasks:["Project management and task allocation","Team coordination","Workflow optimization","Quality control of completed tasks"]}},githubProfile:"https://github.com/dmitryberesten",photo:"../../../img/section5/dima.jpg"},{name:"Anton Honcharenko",role:"Tech Lead, Frontend Developer",jobs:"Tech Management, Frontend Development",skillsResponsibilities:{general:{tasks:["Quick error correction","Adaptability and mobility","Team collaboration and interaction"]},frontendDevelopment:{tasks:["HTML and SCSS layout for the Header","Developed a functional burger menu","Added hover animations"]}},githubProfile:"https://github.com/Gaondarech726",photo:"../../../img/section5/anton.jpg"},{name:"Khrystyna Stepenko",role:"Scrum Master, Frontend Developer",jobs:"Scrum Management, Frontend Development",skillsResponsibilities:{general:{tasks:["Creating tasks, structured them and added to the Trello","Managing team workflows","Organizing team meetings, helped solve development problems"]},frontendDevelopment:{tasks:["HTML, SCSS and JS layout for Section 1 and Section 5 of a project","","Developing adaptive layouts on Figma","Designing and implementing logo, loader and modal windows"]}},githubProfile:"https://github.com/madparrot69",photo:"../../../img/section5/khrystyna.jpg"},{name:"Serhii Zamorylo",role:"Frontend Developer",jobs:"Team Management, Frontend Development",skillsResponsibilities:{general:{tasks:["Project architecture and technical decisions","-","-"]},frontendDevelopment:{tasks:["HTML and SCSS layout for Section 5","Integrated fonts and styles","Added hover animations","Created animation for the bell icon"]}},githubProfile:"https://github.com/Serhii-Zamorylo23",photo:"../../../img/section5/serhii.jpg"},{name:"Yaroslav Suntsev",role:"Frontend Developer",jobs:"Frontend Development",skillsResponsibilities:{frontendDevelopment:{tasks:["HTML and SCSS layout for the Footer","Added hover animations"]}},githubProfile:"https://github.com/cargo9",photo:"../../../img/section5/yaroslav.jpg"},{name:"Maria Kalinichenko",role:"Frontend Developer",jobs:"Frontend Development",skillsResponsibilities:{frontendDevelopment:{tasks:["HTML and SCSS layout for the Modal window contact us","Create favicon icons"]}},githubProfile:"https://github.com/Mkqupy",photo:"../../../img/section5/maria.jpg"},{name:"Igor Krasylnikov",role:"Frontend Developer",jobs:"Frontend Development",skillsResponsibilities:{frontendDevelopment:{tasks:["HTML and SCSS layout for the Section 2","Developed a functional adaptive layout","Added SVG icons"]}},githubProfile:"https://github.com/Javus-Scriptus",photo:"../../../img/section5/igor.jpg"},{name:"Eduard Kazyuk",role:"Frontend Developer",jobs:"Frontend Development",skillsResponsibilities:{frontendDevelopment:{tasks:["HTML and SCSS","Developed Section 7"]}},githubProfile:"https://github.com/GraceFeel1",photo:"../../../img/section5/eduard.jpg"},{name:"Margarita Muminova",role:"Frontend Developer",jobs:"Frontend Development",skillsResponsibilities:{frontendDevelopment:{tasks:["HTML and SCSS layout for the Section 6","Developed a functional adaptive layout","Added SVG icons"]}},githubProfile:"https://github.com/m4ggiee",photo:"../../../img/section5/margarita.jpg"},{name:"Dmytro Terletskyy",role:"Frontend Developer",jobs:"Frontend Development",skillsResponsibilities:{frontendDevelopment:{tasks:["HTML and SCSS layout for the Section 9"]}},githubProfile:"https://github.com/Dremeret",photo:"../../../img/section5/dmytro.jpg"},{name:"Taras Shevchuk",role:"Frontend Developer",jobs:"Frontend Development",skillsResponsibilities:{frontendDevelopment:{tasks:["HTML and SCSS layout for Section 8","Created a slider","Responsive layout for Section 8"]}},githubProfile:"https://github.com/Taras405",photo:"../../../img/section5/taras.jpg"},{name:"Svyatoslav Bykovets",role:"Frontend Developer",jobs:"Frontend Development",skillsResponsibilities:{frontendDevelopment:{tasks:["HTML, CSS, SCSS, JavaScript, React","Worked on Section 4, including adaptive design"]}},githubProfile:"https://github.com/byebaji",photo:"../../../img/section5/svyatoslav.jpg"}],D=document.querySelector("#team-members-container");function j(n){var k,C;const e=document.createElement("div");e.classList.add("team-member-card-active");const i=document.createElement("img");i.src=n.photo,i.alt=`${n.name} photo`,i.classList.add("img-card-active");const s=document.createElement("h1");s.textContent="Name: ";const t=document.createElement("span");t.textContent=n.name,t.id="section-5-name",t.classList.add("name-card-active"),s.appendChild(t);const o=document.createElement("h1");o.textContent="Role: ";const a=document.createElement("span");a.textContent=n.role,a.id="section-5-role",a.classList.add("role-card-active"),o.appendChild(a);const h=document.createElement("h1");h.textContent="GitHub Profile: ";const v=n.githubProfile,y=v.split("/").pop(),p=document.createElement("a");p.textContent=`@${y}`,p.href=v,p.target="_blank",p.id="section-5-github",h.appendChild(p);const f=document.createElement("div");f.id="divLine";const b=document.createElement("h1");b.textContent="Skills & Responsibilities:";const m=document.createElement("ul");m.id="section-5-skills";const u=(k=n.jobs.split(",")[0])==null?void 0:k.trim();if(u&&n.skillsResponsibilities.general){const r=document.createElement("h3");r.id="jobTitle",r.textContent=u,m.appendChild(r);const l=n.skillsResponsibilities.general.tasks;if(l&&l.length>0){const d=document.createElement("ul");d.id="generalTasksList",l.forEach(g=>{const c=document.createElement("li");c.textContent=`● ${g}`,c.className="taskItem",d.appendChild(c)}),m.appendChild(d)}}const S=((C=n.role.split(",")[1])==null?void 0:C.trim())||u;if(S&&n.skillsResponsibilities.frontendDevelopment){const r=document.createElement("h3");r.id="secondaryTitle",r.textContent=S,m.appendChild(r);const l=n.skillsResponsibilities.frontendDevelopment.tasks;if(l&&l.length>0){const d=document.createElement("ul");d.id="frontendTasksList",l.forEach(g=>{const c=document.createElement("li");c.className="taskItem",c.textContent=`● ${g}`,d.appendChild(c)}),m.appendChild(d)}}return e.appendChild(i),e.appendChild(a),e.appendChild(t),e.addEventListener("click",()=>{e.classList.contains("team-member-card")?(e.classList.remove("team-member-card"),e.classList.add("team-member-card-active"),i.classList.remove("img-card"),i.classList.add("img-card-active"),s.classList.remove("name-card"),s.classList.add("name-card-active"),o.classList.remove("role-card"),o.classList.add("role-card-active"),e.innerHTML="",e.appendChild(i),e.appendChild(a),e.appendChild(t)):(e.classList.remove("team-member-card-active"),e.classList.add("team-member-card"),i.classList.remove("img-card-active"),i.classList.add("img-card"),s.classList.remove("name-card-active"),s.classList.add("name-card"),o.classList.remove("role-card-active"),o.classList.add("role-card"),s.appendChild(t),o.appendChild(a),e.innerHTML="",e.appendChild(s),e.appendChild(o),e.appendChild(h),e.appendChild(f),e.appendChild(b),e.appendChild(i),e.appendChild(m))}),e}L.forEach(n=>{const e=j(n);D.appendChild(e)});
