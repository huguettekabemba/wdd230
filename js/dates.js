const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last Updated: ${document.lastModified}`;

document.querySelector('#currentyear').textContent = new Date(Date.now()).getFullYear();