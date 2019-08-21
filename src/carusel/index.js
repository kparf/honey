import './carusel.css';


export function caruselInit() {
  const view = document.getElementsByClassName('carusel__view').item(0);
  const list = document.getElementsByClassName('carusel__list').item(0);
  const slides = document.getElementsByClassName('carusel__slide');

  const observer = new IntersectionObserver((entries, observer) => {
    console.log(entries);
    console.log(observer);
    for(let entry of entries) {
      const slide = entry.target;
      addShift(list)(slide);
    }
  }, {
    root: view,
    rootMargin: '0px',
    threshold: 1.0,
  });

  console.log(view);
  console.log(list);
  console.log(slides);


  for(let slide of slides) {
    observer.observe(slide);
  }
}

export function watch() {
}

function addShift(list) {
  return (slide) => {
    console.log(slide.getBoundingClientRect());
    const width = slide.getBoundingClientRect().width;
  }
}