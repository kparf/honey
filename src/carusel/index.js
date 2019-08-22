import './carusel.css';


export function caruselInit() {

  const view = document.getElementsByClassName('carusel__view').item(0);
  const list = document.getElementsByClassName('carusel__list').item(0);
  const slides = document.getElementsByClassName('carusel__slide');
  let direction = true;

  const observer = new IntersectionObserver((entries, observer) => {
    const visibleList = Array.from(entries)
    .filter(entry => entry.isIntersecting);
    const lastVisibleEntry = visibleList[visibleList.length - 1];
    let results = null;
    if (lastVisibleEntry) {
      results = getSiblingElement(lastVisibleEntry.target, direction);
    }
    if (results) {
      direction = results.direction;
      const width = results.sibling.getBoundingClientRect().width;
      const listStyle = window.getComputedStyle(list);
      const shift = parseInt(listStyle.getPropertyValue('--shift'));
      const newShift = direction ? shift - width : shift + width;
      list.style.setProperty('--shift', `${newShift}px`);
    }
  }, {
    root: view,
    rootMargin: '0px',
    threshold: 1.0,
  });


  for(let slide of slides) {
    observer.observe(slide);
  }
}

function getNextElement(node) {
  const nextNode = node.nextSibling;
  if( !nextNode || nextNode instanceof Element) {
    return nextNode;
  } else {
    return getNextElement(nextNode);
  }
}

function getPreviousElement(node) {
  const previousNode = node.previousSibling;
  if( !previousNode || previousNode instanceof Element) {
    return previousNode;
  } else {
    return getPreviousElement(previousNode);
  }
}

function getSiblingElement(node, direction) {
  const sibling = direction ? getNextElement(node) : getPreviousElement(node);
  return !!sibling ? { sibling, direction } : getSiblingElement(node, !direction);
}