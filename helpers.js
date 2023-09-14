//==============Functions===============
//sets the next image
function nextItem() {
    clearInterval(timer);
    head = head.next;
    setSubimagesOpacity(subImages);
    bannerImage.src = head.value;
  }
  
  // sets the previous image
  function prevItem() {
    if (head.prev) {
      head = head.prev;
      setSubimagesOpacity(subImages);
      bannerImage.src = head.value;
    }
  }
  
  /**
   * Responsible for auto changing the slides
   */
  function autoSlide() {
    clearInterval(timer);
    timer = setInterval(() => {
      head = head.next;
      setSubimagesOpacity(subImages);
      bannerImage.src = head.value;
    }, 10000);
  }
  
  /**
   * 
   * @param {Node} head - the current node
   * @returns an array of image tags
   */
  function createImageList(head) {
    let temp = head;
    let counter = 0;
  
    const images = [];
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'row');
  
    // creates the slide subimages
    while (counter <= circularDoublyLinkedList.getSize - 1) {
      const imageTag = document.createElement('img');
      imageTag.style.opacity = temp.value == head.value ? '1' : '0.5';
      imageTag.src = temp.value;
      wrapper.appendChild(imageTag);
      temp = temp.next;
      counter += 1;
    }
  
    // add the images to the subimages container 
    imageList.appendChild(wrapper);
  
    return Array.from(wrapper.children);
  }
  
  /**
   * sets the current image opacity to 1 and the rest to 0.5
   * @param {Array} images
   */
  function setSubimagesOpacity(images) {
    images.forEach((element) => {
      element.src === head.value ? (element.style.opacity = '1') : (element.style.opacity = '0.5');
      
      // controls the banner image when user clicks on the subimages
      element.addEventListener('click', (evt) => {
        const outcome = circularDoublyLinkedList.search(evt.currentTarget.src);
  
        if (outcome) {
          head = outcome;
          autoSlide();
          bannerImage.src = outcome.value;
          setSubimagesOpacity(images);
        }
      });
    });
  }