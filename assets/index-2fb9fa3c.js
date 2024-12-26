(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const h=document.querySelector(".menu__btn"),b=document.querySelector(".backdrop"),f=document.querySelector(".mobile-version");function T(){const s=window.innerWidth;if(b.getAttribute("class")=="backdrop active")if(s>1024)f.setAttribute("class","mobile-version"),b.setAttribute("class","backdrop"),h.setAttribute("class","menu__btn open");else return;else return}T();window.addEventListener("resize",T);document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll(".nav-link");s.forEach(e=>{e.addEventListener("click",o=>{o.preventDefault(),s.forEach(n=>n.classList.remove("active")),o.target.classList.add("active");const i=o.target.getAttribute("href").replace(" mobile",""),t=document.getElementById(i);t&&(t.scrollIntoView({behavior:"smooth"}),b.setAttribute("class","backdrop"),f.setAttribute("class","backdrop"),h.setAttribute("class","menu__btn open"))})})});h.addEventListener("click",()=>{h.getAttribute("class")=="menu__btn open"?(h.setAttribute("class","menu__btn close"),b.setAttribute("class","backdrop active"),f.setAttribute("class","mobile-version open")):h.getAttribute("class")=="menu__btn close"&&(h.setAttribute("class","menu__btn open"),b.setAttribute("class","backdrop"),f.setAttribute("class","mobile-version"))});document.addEventListener("DOMContentLoaded",function(){const s=document.querySelectorAll(".nav-link");let o=document.querySelector(".nav-link.active");const i=document.createElement("span");i.classList.add("ball"),document.querySelector(".categories").appendChild(i),t(o),s.forEach(n=>{n.addEventListener("mouseenter",()=>{t(n)}),n.addEventListener("mouseleave",()=>{t(o)}),n.addEventListener("click",()=>{o=n,t(o)})}),window.addEventListener("resize",()=>{o&&t(o)});function t(n){const a=n.getBoundingClientRect(),l=document.querySelector(".categories").getBoundingClientRect(),r=a.top-l.top+a.height/2-i.offsetHeight/2,v=a.left-l.left;v>=0&&v+i.offsetWidth<=l.width&&(i.style.top=`${r}px`,i.style.left=`${v-10}px`)}});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll(".contact-us"),e=document.querySelector("#close"),o=document.querySelector("#send-us"),i=document.querySelector("#name"),t=document.querySelector("#phoneNumber"),n=document.querySelector("#message"),a=document.querySelector("#pop-up-section");s.forEach(r=>{r.addEventListener("click",()=>{a.style.display="flex",a.scrollIntoView({behavior:"smooth"})})});const l=()=>{let r=!0;return[i,t,n].forEach(c=>{c.value.trim()?c.style.border="":(c.style.border="2px solid red",r=!1)}),r};e.addEventListener("click",()=>{a.style.display="none"}),o.addEventListener("click",r=>{r.preventDefault(),l()&&(alert("Form submitted successfully!"),a.style.display="none")})});const j=[{name:"Dima Beresten",role:"Project Manager",jobs:"Project Management",skillsResponsibilities:{general:{tasks:["Project management and task allocation","Team coordination","Workflow optimization","Quality control of completed tasks"]}},githubProfile:"https://github.com/dmitryberesten",photo:"../src/img/section5/dima.jpg"},{name:"Anton Honcharenko",role:"Tech Lead, Frontend Developer",jobs:"Tech Management, Frontend Development",skillsResponsibilities:{general:{tasks:["Quick error correction","Adaptability and mobility","Team collaboration and interaction"]},frontendDevelopment:{tasks:["HTML and SCSS layout for the Header","Developed a functional burger menu","Added hover animations"]}},githubProfile:"https://github.com/Gaondarech726",photo:"../src/img/section5/anton.jpg"},{name:"Khrystyna Stepenko",role:"Scrum Master, Frontend Developer",jobs:"Scrum Management, Frontend Development",skillsResponsibilities:{general:{tasks:["Creating tasks, structured them and added to the Trello","Managing team workflows","Organizing team meetings, helped solve development problems"]},frontendDevelopment:{tasks:["HTML, SCSS and JS layout for Section 1 and Section 5 of a project","","Developing adaptive layouts on Figma","Designing and implementing logo, loader and modal windows"]}},githubProfile:"https://github.com/madparrot69",photo:"../src/img/section5/khrystyna.jpg"},{name:"Serhii Zamorylo",role:"Team Lead, Frontend Developer",jobs:"Team Management, Frontend Development",skillsResponsibilities:{general:{tasks:["Project architecture and technical decisions","-","-"]},frontendDevelopment:{tasks:["HTML and SCSS layout for Section 5","Integrated fonts and styles","Added hover animations","Created animation for the bell icon"]}},githubProfile:"https://github.com/Serhii-Zamorylo23",photo:"../src/img/section5/serhii.jpg"},{name:"Yaroslav Suntsev",role:"Frontend Developer",jobs:"Frontend Development",skillsResponsibilities:{frontendDevelopment:{tasks:["HTML and SCSS layout for the Footer","Added hover animations"]}},githubProfile:"https://github.com/cargo9",photo:"../src../src/img/section5/yaroslav.jpg"},{name:"Maria Kalinichenko",role:"Frontend Developer",jobs:"Frontend Development",skillsResponsibilities:{frontendDevelopment:{tasks:["HTML and SCSS layout for the Modal window contact us","Create favicon icons"]}},githubProfile:"https://github.com/Mkqupy",photo:"../src/img/section5/maria.jpg"},{name:"Igor Krasylnikov",role:"Frontend Developer",jobs:"Frontend Development",skillsResponsibilities:{frontendDevelopment:{tasks:["HTML and SCSS layout for the Section 2","Developed a functional adaptive layout","Added SVG icons"]}},githubProfile:"https://github.com/Javus-Scriptus",photo:"../src/img/section5/igor.jpg"},{name:"Eduard Kazyuk",role:"Frontend Developer",jobs:"Frontend Development",skillsResponsibilities:{frontendDevelopment:{tasks:["HTML and SCSS","Developed Section 7"]}},githubProfile:"https://github.com/GraceFeel1",photo:"../src/img/section5/eduard.jpg"},{name:"Margarita Muminova",role:"Frontend Developer",jobs:"Frontend Development",skillsResponsibilities:{frontendDevelopment:{tasks:["HTML and SCSS layout for the Section 6","Developed a functional adaptive layout","Added SVG icons"]}},githubProfile:"https://github.com/m4ggiee",photo:"../src/img/section5/margarita.jpg"},{name:"Dmytro Terletskyy",role:"Frontend Developer",jobs:"Frontend Development",skillsResponsibilities:{frontendDevelopment:{tasks:["HTML and SCSS layout for the Section 9"]}},githubProfile:"https://github.com/Dremeret",photo:"../src/img/section5/dmytro.jpg"},{name:"Taras Shevchuk",role:"Frontend Developer, Christmas DJ",jobs:"Frontend Development",skillsResponsibilities:{frontendDevelopment:{tasks:["HTML and SCSS layout for Section 8","Created a slider","Responsive layout for Section 8"]}},githubProfile:"https://github.com/Taras405",photo:"../src/img/section5/taras.jpg"},{name:"Svyatoslav Ivah",role:"Frontend Developer",jobs:"Frontend Development",skillsResponsibilities:{frontendDevelopment:{tasks:["HTML, CSS, SCSS, JavaScript, React","Worked on Section 4, including adaptive design"]}},githubProfile:"https://github.com/byebaji",photo:"../src/img/section5/svyatoslav.jpg"}],F=document.querySelector("#team-members-container");function M(s){var D,E;const e=document.createElement("div");e.classList.add("team-member-card-active");const o=document.createElement("img");o.src=s.photo,o.alt=`${s.name} photo`,o.classList.add("img-card-active");const i=document.createElement("h1");i.textContent="Name: ";const t=document.createElement("span");t.textContent=s.name,t.id="section-5-name",t.classList.add("name-card-active"),i.appendChild(t);const n=document.createElement("h1");n.textContent="Role: ";const a=document.createElement("span");a.textContent=s.role,a.id="section-5-role",a.classList.add("role-card-active"),n.appendChild(a);const l=document.createElement("h1");l.textContent="GitHub Profile: ";const r=s.githubProfile,v=r.split("/").pop(),c=document.createElement("a");c.textContent=`@${v}`,c.href=r,c.target="_blank",c.id="section-5-github",l.appendChild(c);const y=document.createElement("div");y.id="divLine";const L=document.createElement("h1");L.textContent="Skills & Responsibilities:";const g=document.createElement("ul");g.id="section-5-skills";const S=(D=s.jobs.split(",")[0])==null?void 0:D.trim();if(S&&s.skillsResponsibilities.general){const d=document.createElement("h3");d.id="jobTitle",d.textContent=S,g.appendChild(d);const m=s.skillsResponsibilities.general.tasks;if(m&&m.length>0){const p=document.createElement("ul");p.id="generalTasksList",m.forEach(k=>{const u=document.createElement("li");u.textContent=`● ${k}`,u.className="taskItem",p.appendChild(u)}),g.appendChild(p)}}const C=((E=s.role.split(",")[1])==null?void 0:E.trim())||S;if(C&&s.skillsResponsibilities.frontendDevelopment){const d=document.createElement("h3");d.id="secondaryTitle",d.textContent=C,g.appendChild(d);const m=s.skillsResponsibilities.frontendDevelopment.tasks;if(m&&m.length>0){const p=document.createElement("ul");p.id="frontendTasksList",m.forEach(k=>{const u=document.createElement("li");u.className="taskItem",u.textContent=`● ${k}`,p.appendChild(u)}),g.appendChild(p)}}return e.appendChild(o),e.appendChild(a),e.appendChild(t),e.addEventListener("click",()=>{e.classList.contains("team-member-card")?(e.classList.remove("team-member-card"),e.classList.add("team-member-card-active"),e.classList.add("flip-animation"),o.classList.remove("img-card"),o.classList.add("img-card-active"),i.classList.remove("name-card"),i.classList.add("name-card-active"),n.classList.remove("role-card"),n.classList.add("role-card-active"),e.innerHTML="",e.appendChild(o),e.appendChild(a),e.appendChild(t)):(e.classList.remove("team-member-card-active"),e.classList.add("team-member-card"),e.classList.remove("flip-animation"),o.classList.remove("img-card-active"),o.classList.add("img-card"),i.classList.remove("name-card-active"),i.classList.add("name-card"),n.classList.remove("role-card-active"),n.classList.add("role-card"),i.appendChild(t),n.appendChild(a),e.innerHTML="",e.appendChild(i),e.appendChild(n),e.appendChild(l),e.appendChild(y),e.appendChild(L),e.appendChild(o),e.appendChild(g))}),e}j.forEach(s=>{const e=M(s);F.appendChild(e)});AOS.init();