const o="light",a="dark",r="auto",s=a;function c(){const e=document.getElementById("config-carrier");return Number.parseInt(e?.dataset.hue||"250")}function u(){const e=localStorage.getItem("hue");return e?Number.parseInt(e):c()}function m(e){localStorage.setItem("hue",String(e));const t=document.querySelector(":root");t&&t.style.setProperty("--hue",String(e))}function n(e){switch(e){case o:document.documentElement.classList.remove("dark");break;case a:document.documentElement.classList.add("dark");break;case r:window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}}function d(e){localStorage.setItem("theme",e),n(e)}export{s as D,c as a,d as b,u as g,m as s};