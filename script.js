const projects = [
  { title: 'Спортивный комплекс в г. Бердск', category: 'exterior', type: 'Экстерьер', area: '750 м²', location: 'Бердск, улица Солнечная', desc: 'Коммерческий проект спортивного комплекса. Серия визуализаций раскрывает архитектуру, масштаб объекта и его взаимодействие с городской средой.', cover: 'assets/visualizations/Бердск, солнечная - реально солнечная.jpg', layout: 'project--wide', images: ['assets/visualizations/Бердск, солнечная - реально солнечная.jpg', 'assets/visualizations/Бердск, солнечная- визуал - финал.jpg', 'assets/visualizations/Визуализация_солнечная_вечерняя.jpg'] },
  { title: 'АЗС по Чемальскому тракту', category: 'exterior', type: 'Экстерьер', area: '520 м²', location: 'с. Чемал', desc: 'Архитектурная визуализация коммерческого объекта в природном контексте. Кадры показывают проект в разном дневном освещении.', cover: 'assets/visualizations/Кадр 1 - утренний.jpg', layout: 'project--tall', images: ['assets/visualizations/Кадр 1 - утренний.jpg', 'assets/visualizations/Кадр 2 -дневной.jpg', 'assets/visualizations/Кадр 4 -дневной.jpg'] },
  { title: 'Магазин в пгт. Шерегеш', category: 'exterior', type: 'Экстерьер', area: 'Визуализация', location: 'Кемеровская область, пгт. Шерегеш', desc: 'Выразительная подача магазина в горном ландшафте: архитектура, атмосфера и работа с окружением в одном кадре.', cover: 'assets/projects/exterior-sheregesh/Шерегеш - вид1.jpg', layout: 'project--standard', images: ['assets/projects/exterior-sheregesh/Шерегеш - вид1.jpg', 'assets/projects/exterior-sheregesh/Шерегеш - вид2.jpg', 'assets/projects/exterior-sheregesh/Шерегеш - вид3.jpg'] },
  { title: 'Магазин в Новосибирской области', category: 'exterior', type: 'Экстерьер', area: '510 м²', location: 'п. Октябрьский, Новосибирская область', desc: 'Проект магазина с акцентом на выразительную современную архитектуру и ясную подачу объекта в окружающей среде.', cover: 'assets/projects/exterior-oktyabrsky/Визуализация - 1 ракурс без людей.jpg', layout: 'project--standard', images: ['assets/projects/exterior-oktyabrsky/Визуализация - 1 ракурс без людей.jpg', 'assets/projects/exterior-oktyabrsky/Визуализация - 2 ракурс без людей.jpg'] },
  { title: 'Офисное здание по ул. Владимировская', category: 'exterior', type: 'Экстерьер', area: '6 000 м²', location: 'Новосибирск, ул. Владимировская', desc: 'Серия визуализаций офисного здания, передающая масштаб архитектуры и характер городской среды.', cover: 'assets/projects/exterior-vladimirovskaya/1.jpg', layout: 'project--wide', images: ['assets/projects/exterior-vladimirovskaya/1.jpg', 'assets/projects/exterior-vladimirovskaya/2.jpg', 'assets/projects/exterior-vladimirovskaya/3.jpg', 'assets/projects/exterior-vladimirovskaya/4.jpg'] },
  { title: 'Апартаменты по улице Мясниковой', category: 'exterior', type: 'Экстерьер', area: '62 000 м²', location: 'Новосибирск, ул. Мясниковой', desc: 'Архитектурная визуализация крупного комплекса апартаментов с вниманием к масштабу и деталям фасада.', cover: 'assets/projects/exterior-myasnikova/1.jpg', layout: 'project--tall', images: ['assets/projects/exterior-myasnikova/1.jpg', 'assets/projects/exterior-myasnikova/2.jpg', 'assets/projects/exterior-myasnikova/3.jpg', 'assets/projects/exterior-myasnikova/4.jpg', 'assets/projects/exterior-myasnikova/5.jpg'] },
  { title: 'Магазин в г. Ярославль', category: 'exterior', type: 'Экстерьер', area: '1 350 м²', location: 'Ярославль, ул. Тутаевское шоссе', desc: 'Магазин в Ярославле: серия объединяет горизонтальные и вертикальные ракурсы для полноценной презентации объекта.', cover: 'assets/projects/exterior-yaroslavl/Ярославль,_Тутаевское_шоссе_кадр1,_солнечная_погода.jpg', layout: 'project--wide', images: ['assets/projects/exterior-yaroslavl/Ярославль,_Тутаевское_шоссе_кадр1,_солнечная_погода.jpg', 'assets/projects/exterior-yaroslavl/Ярославль,_Тутаевское_шоссе_кадр2,_солнечная_погода.jpg', 'assets/projects/exterior-yaroslavl/Ярославль,_Тутаевское_шоссе_кадр3,_солнечная_погода.jpg'] },
  { title: 'Магазин на Алтае', category: 'exterior', type: 'Экстерьер', area: '520 м²', location: 'Алтайский край, вблизи посёлка Усть-Сема', desc: 'Магазин в природном окружении Алтая — визуальная подача архитектуры, вписанной в ландшафт.', cover: 'assets/projects/exterior-ustsema/Чемал - кадр1.jpg', layout: 'project--standard', images: ['assets/projects/exterior-ustsema/Чемал - кадр1.jpg', 'assets/projects/exterior-ustsema/Чемал - кадр2.jpg'] },
  { title: 'Двухэтажный офисный центр', category: 'exterior', type: 'Экстерьер', area: '1 500 м²', location: 'Романова, 113', desc: 'Двухэтажный офисный центр: серия изображений демонстрирует архитектуру объекта с нескольких ключевых ракурсов.', cover: 'assets/projects/exterior-romanova/1.jpeg', layout: 'project--standard', images: ['assets/projects/exterior-romanova/1.jpeg', 'assets/projects/exterior-romanova/2.jpeg', 'assets/projects/exterior-romanova/3.jpg', 'assets/projects/exterior-romanova/4.jpeg'] },
  { title: 'Интерьер в экостиле', category: 'interior', type: 'Интерьер', area: '46 м²', location: 'Краснообск, 108', desc: 'Интерьерный проект квартиры с ясной композицией, светлой палитрой и вниманием к природным материалам.', cover: 'assets/projects/interior-ekostyle/1.jpg', layout: 'project--tall', images: ['assets/projects/interior-ekostyle/1.jpg', 'assets/projects/interior-ekostyle/2.jpg', 'assets/projects/interior-ekostyle/3.jpg', 'assets/projects/interior-ekostyle/4.jpg', 'assets/projects/interior-ekostyle/5.jpg', 'assets/projects/interior-ekostyle/6.jpg'] },
  { title: 'Офис на Державина, 28', category: 'interior', type: 'Интерьер', area: '500 м²', location: 'Новосибирск, Державина, 28', desc: 'Интерьер офиса, в котором рабочие сценарии и выразительная атмосфера собраны в единое пространство.', cover: 'assets/projects/interior-derzhavina/1.jpg', layout: 'project--wide', images: ['assets/projects/interior-derzhavina/1.jpg', 'assets/projects/interior-derzhavina/2.jpg', 'assets/projects/interior-derzhavina/3.jpg', 'assets/projects/interior-derzhavina/4.png', 'assets/projects/interior-derzhavina/5.jpg', 'assets/projects/interior-derzhavina/6.jpg', 'assets/projects/interior-derzhavina/7.jpg', 'assets/projects/interior-derzhavina/8.jpg', 'assets/projects/interior-derzhavina/9.jpg'] },
  { title: 'Интерьер однокомнатной квартиры', category: 'interior', type: 'Интерьер', area: '37 м²', location: 'Краснообск, 212', desc: 'Компактная однокомнатная квартира, где выразительность интерьера сочетается с удобством повседневной жизни.', cover: 'assets/projects/interior-krasnoobsk212/1.jpg', layout: 'project--standard', images: ['assets/projects/interior-krasnoobsk212/1.jpg', 'assets/projects/interior-krasnoobsk212/2.jpg', 'assets/projects/interior-krasnoobsk212/3.jpg', 'assets/projects/interior-krasnoobsk212/4.jpg', 'assets/projects/interior-krasnoobsk212/5.jpg', 'assets/projects/interior-krasnoobsk212/6.jpg', 'assets/projects/interior-krasnoobsk212/7.jpg', 'assets/projects/interior-krasnoobsk212/8.jpg'] }
];

const projectGrid = document.querySelector('#projectGrid');
const workCount = document.querySelector('#workCount');
const modal = document.querySelector('#projectModal');
const modalImage = document.querySelector('#modalImage');
const dots = document.querySelector('.gallery-dots');
let activeProject = null;
let activeImage = 0;

workCount.textContent = `(${String(projects.length).padStart(2, '0')})`;
projectGrid.innerHTML = projects.map((project, index) => `<article class="project ${project.layout}" data-category="${project.category}" data-project="${index}"><button class="project-card"><img src="${project.cover}" alt="${project.title}" loading="lazy" /><div class="project-meta"><span>${String(index + 1).padStart(2, '0')}</span><h3>${project.title}</h3><span>${project.type} · ${project.area}</span></div></button></article>`).join('');

function renderGalleryImage() {
  const project = projects[activeProject];
  modalImage.src = project.images[activeImage];
  modalImage.alt = `${project.title} — изображение ${activeImage + 1}`;
  dots.innerHTML = project.images.map((_, index) => `<button class="${index === activeImage ? 'active' : ''}" data-image-index="${index}" aria-label="Изображение ${index + 1}"></button>`).join('');
  document.querySelector('.previous').disabled = activeImage === 0;
  document.querySelector('.next').disabled = activeImage === project.images.length - 1;
}

function openProject(index) {
  const project = projects[index];
  activeProject = index;
  activeImage = 0;
  document.querySelector('#modalCategory').textContent = project.category === 'interior' ? 'ИНТЕРЬЕР' : 'ЭКСТЕРЬЕР';
  document.querySelector('#modalTitle').textContent = project.title;
  document.querySelector('#modalDescription').textContent = project.desc;
  document.querySelector('#modalType').textContent = project.type;
  document.querySelector('#modalArea').textContent = project.area;
  document.querySelector('#modalLocation').textContent = project.location;
  renderGalleryImage();
  modal.showModal();
}

projectGrid.addEventListener('click', event => {
  const card = event.target.closest('.project');
  if (card) openProject(Number(card.dataset.project));
});

document.querySelector('.previous').addEventListener('click', () => { if (activeImage > 0) { activeImage -= 1; renderGalleryImage(); } });
document.querySelector('.next').addEventListener('click', () => { if (activeImage < projects[activeProject].images.length - 1) { activeImage += 1; renderGalleryImage(); } });
dots.addEventListener('click', event => { const dot = event.target.closest('[data-image-index]'); if (dot) { activeImage = Number(dot.dataset.imageIndex); renderGalleryImage(); } });

document.querySelectorAll('.filters button').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filters .active').classList.remove('active');
  button.classList.add('active');
  document.querySelectorAll('.project').forEach(project => project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter);
}));

const docModal = document.querySelector('#documentModal');
document.querySelectorAll('.document').forEach(doc => doc.addEventListener('click', () => {
  document.querySelector('#docTitle').textContent = doc.dataset.doc;
  document.querySelector('#docImage').src = doc.dataset.image;
  document.querySelector('#docImage').alt = doc.dataset.doc;
  docModal.showModal();
}));

document.querySelectorAll('.modal-close').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); }));
document.addEventListener('keydown', event => {
  if (!modal.open) return;
  if (event.key === 'ArrowLeft') document.querySelector('.previous').click();
  if (event.key === 'ArrowRight') document.querySelector('.next').click();
});
