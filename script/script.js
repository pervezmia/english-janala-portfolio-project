const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((response) => response.json())
        .then((json) => displayShow(json.data));
}
loadLessons();

// id kothai theke asse 

const loadLevelWord = (id) => {
    // console.log(id)
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayLevelWord(data.data));
}


const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    //Handle Errors , empty lessons for Better UX
    
    if (words.length === 0) {
       
        wordContainer.innerHTML = `
            <div id="" class="font-bangla col-span-full text-center py-10 space-y-3">
                
                <img class="mx-auto" src="./assets/alert-error.png" alt="">
                
                <p class="text-xl text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <h2 class="text-4xl font-bold  text-[#292524]">নেক্সট Lesson এ যান</h2>
            </div>
        `;
        return;
    }
    /* 
    {id: 78, level: 1, word: 'Hot', meaning: 'গরম', pronunciation: 'হট'}
    */
    words.forEach((word) => {
        // console.log(word);
        
        const card = document.createElement("div");
        card.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm text-center py-10 py-5 space-y-2">
                <h2 class="font-bold text-xl">${word.word ? word.word: "কোন শব্দ পাওয়া যাইনি"} </h2>
                <p class="font-semibold">Meaning / Pronounciation</p>
                <div class="font-bagla text-2xl font-medium">${word.meaning ? word.meaning: "কোন অর্থ পাওয়া যাইনি"}  / ${word.pronunciation ? word.pronunciation: "কোন pronunciation পাওয়া যাইনি"}</div>
                <div class="flex justify-between items-center px-4 mt-5">
                    <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF60] p-2 rounded-xl"><i class="fa-solid fa-circle-info "></i></button>
                    <button class="btn bg-[#1A91FF10]  hover:bg-[#1A91FF60] p-2 rounded-xl"><i class="fa-solid fa-volume-low"></i></button>
                </div>
            </div>
        `;
        wordContainer.append(card);
    });
}

// {id: 101, level_no: 1, lessonName: 'Basic Vocabulary'}

// display lesson function 
const displayShow = (allLevels) => {

    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    allLevels.forEach(Lesson => {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
            <button onclick = "loadLevelWord(${Lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson - ${Lesson.level_no}</button>
        `
        levelContainer.appendChild(btnDiv);
    });
    // console.log(levelContainer);

}

