/**
  @Author Miguel Ortiz
  @version 1.0.0
*/


let circularDoublyLinkedList = new CircularDoublyLinkedList();

// create image nodes
circularDoublyLinkedList.add(
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'
);
circularDoublyLinkedList.add(
  'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'
);
circularDoublyLinkedList.add(
  'https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'
);
circularDoublyLinkedList.add(
  'https://images.unsplash.com/photo-1421217336522-861978fdf33a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'
);

// Get the head of the LinkList
let head = circularDoublyLinkedList.head;

// controllers
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
//Main image
const bannerImage = document.querySelector('.imageTag');
const imageList = document.querySelector('.imageList');

let subImages = createImageList(head);
setSubimagesOpacity(subImages);
// holds timers id
let timer = 0;
let buttonTimer = 0;

// assign the head of the linkList to the image tag
bannerImage.src = head.value;


// add Event listeners to the buttons.
/**
 * sets the slide to the next image
 */
next.addEventListener('click', (evt) => {
  clearTimeout(timer);
  evt.target.classList.add("shake")
  clearTimeout(buttonTimer)
  buttonTimer = setTimeout(()=>{
    evt.target.classList.remove("shake")
  },500)
  nextItem();
});

/**
 * sets the slide to the previous image
 */
prev.addEventListener('click', (evt) => {
  clearTimeout(timer);
  evt.target.classList.add("shake")
  clearTimeout(buttonTimer)
  buttonTimer = setTimeout(()=>{
    evt.target.classList.remove("shake")
  },500)
  prevItem();
});

/**
 * changes the slides automatically by calling the next function
 */
autoSlide();


