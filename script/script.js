const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response) => response.json())
    .then((json) => displayShow(json.data));
}
loadLessons();
// {id: 101, level_no: 1, lessonName: 'Basic Vocabulary'}
const displayShow = (allLevels) => {

    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    allLevels.forEach(Lesson => {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
            <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson - ${Lesson.level_no}</button>
        `
        levelContainer.appendChild(btnDiv);
    });
    console.log(levelContainer);

}