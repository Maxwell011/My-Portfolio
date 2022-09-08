const data = [
  {
    id: 1,
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: './images/Snapshoot desktop.png',
    githubIcon: './images/github.png',
    liveIcon: './images/Icon - Export.png',
    technologiesMobile: ['Ruby', 'CSS', 'JavaScript'],
    technologiesDesktop: [
      'CodeKit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    sourceLink: 'https://github.com/Maxwell011',
    liveLink: 'https://github.com/Maxwell011/My-Portfolio.git',
  },
];

const myModal = document.getElementById('myModal');
// Get the <span> element that closes the modal

/* eslint-disable no-unused-vars */
const closeModal = () => {
  myModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function modal(event) {
  if (event.target === myModal) {
    myModal.style.display = 'none';
  }
};
/* eslint-disable no-unused-vars */
function viewProjectDetails(projectIndex) {
  const project = data[projectIndex];
  myModal.innerHTML = `<div class="modal-content">
<div class="modal-header">
  <div class="bg-img">
  <span onclick="closeModal()" id="closeBtn" class="close">&times;</span>
  <img class="desktop-bg" src="${project.imageDesktop}" />
  </div>
</div>
<div class="modal-body">
  <div class="title-container">
    <h3 id="title">${project.name}</h3>
  </div>
  <ul class="tags" id="tech">
  ${project.technologiesDesktop.map((ele) => `<li>${ele}</>`)}
  </ul>
  <ul class="tags" id="mobile-ul">
  ${project.technologiesMobile.map((ele) => `<li>${ele}</>`)}
  </ul>
  <p id="description">${project.description}</p>
  <div class="modal-footer">
  <a href="${project.liveLink}">
    <button type="submit" class="project-view-btn">
      <span> See Live</span>
      <img
        src="${project.liveIcon}"
        alt="See Live Project"
      /></button
  ></a>
  <a href="${project.sourceLink}">
    <button type="submit" class="project-view-btn">
      <span>See Source</span>
      <img
        src="${project.githubIcon}"
        alt="See Source Code"
      /></button
  ></a>
</div>
</div>
</div>
`;
  myModal.style.display = 'block';
}

// const body = document.querySelector('.boxes');

(() => {
  const boxes = document.querySelector('.boxes');
  console.log(boxes, 'boxes here');
  const tileArray = Array.from({ length: 6 }, (v, i) => i);

  tileArray.forEach((tile) => {
    const projectTile = document.createElement('div');
    const project = document.createElement('div');
    const boxProjectTile = document.createElement('div');
    const heading = document.createElement('h2');
    const tileUl = document.createElement('ul');
    const button = document.createElement('button');

    projectTile.classList.add('boxes');
    project.classList.add('project-tile');
    boxProjectTile.classList.add('box', 'project-tile');
    heading.classList.add('tile-heading');
    tileUl.classList.add('tile-ul');
    button.classList.add('button');

    project.appendChild(projectTile);
    boxProjectTile.appendChild(heading);
    boxProjectTile.appendChild(tileUl);
    boxProjectTile.appendChild(button);
    projectTile.appendChild(boxProjectTile);
    boxes.appendChild(project);

    heading.textContent = 'Multi-Post Stories Gain+Glory';
    button.textContent = 'See Project';
    tileUl.innerHTML = `<li class="tile-1">Ruby on rails</li>
                <li class="tile-2">CSS</li>
                <li class="tile-3">Javascript</li>
                <li class="tile-4">Html</li>`;

    button.onclick = () => viewProjectDetails(0);
  });
})();
