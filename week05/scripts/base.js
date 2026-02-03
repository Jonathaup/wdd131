let chaptersArray = getChapterList() || [];

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener('click', function () {
  if (input.value.trim() !== '') {
    
    displayList(input.value);

    chaptersArray.push(input.value);

    setChapterList();

    input.value = '';
    input.focus();
  } 
  else {
    alert('Please enter a chapter name.');
  }
});

function displayList(item) {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');

  li.textContent = item;
  deleteButton.textContent = '❌';

  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });

  li.append(deleteButton);
  list.append(li);
}

function setChapterList() {
  localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('chapters'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);

  chaptersArray = chaptersArray.filter(item => item !== chapter);

  setChapterList();
}
