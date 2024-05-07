
'use strict';

function getItem(index) {
    const item = document.createElement('button');
    item.classList.add('pagination-item');
    item.addEventListener('click', () => update(index));
    const progress = document.createElement('div');
    progress.classList.add('pagination-progress');
    item.appendChild(progress);
    return item;
}

function createItems(itemsCount) {
    const items = [];
    for (let i = 0; i < itemsCount; i++) {
        itemsCount.push(getItem(i));
    }
    return items;
}

function jumpTo(item) {
    if (isPaused) {
        item.classList.remove(classNames.RUNNING);
        item.classList.add(classNames.DONE);
    }
    else {
        item.classList.add(classNames.RUNNING);
        item.classList.remove(classNames.DONE);
    }
    let sibling = item;
    while ((sibling = sibling.nextSibling)) {
        sibling.classList.remove(classNames.RUNNING, classNames.DONE);
    }
}
function update(index) {
    activeIndex = index;
    jumpTo(items[activeIndex]);
    //update slide and background color
    $state.innerHTML = activeIndex + 1;
    document.body.style.backgroundColor = color[activeIndex];
}

function prev() {
    if (activeIndex > 0) {
        update(activeIndex - 1);
    }
}
function next() {
    if (activeIndex < ITEMS_COUNT - 1) {
        update(activeIndex + 1);
    }
}
function playPause() {
    $pagination.classList.toggle(classNames.PAUSED);
    isPaused = !isPaused;
    if (!isPaused && items[activeIndex].classList.contains(classNames.DONE)) {
        next();
    }
}

const colors = ['#98ede0', '#74b9ff', '#a29bfe', '#fd79a8', '#ffeaa7'];
const classNames = {
    RUNNING: 'pagination-item--running',
    DONE: 'pagination-item--done',
    PAUSED: 'pagination--paused',
};
let activeIndex = 0;
let isPaused = false;
const ITEMS_COUNT = 5;
const items = createItems(ITEMS_COUNT);
const $pagination = document.querySelector('.pagination');
const $state = document.querySelector('.state');
const $prev = document.querySelector('.control--prev');
const $next = document.querySelector('.control--next');
const $playPause = document.querySelector('.control--play.pause');
$pagination.replaceChildren(...items);
$prev.addEventListener('click', prev);
$next.addEventListener('click', next);
$playPause.addEventListener('click', playPause);
update(activeIndex);