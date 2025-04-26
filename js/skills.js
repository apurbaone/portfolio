const skillsLeft = [
  { name: "HTML/CSS", score: 95 },
  { name: "Bootstrap", score: 90 },
  { name: "PHP/Laravel", score: 90 },
  { name: "AWS", score: 80 },
  { name: "Azure", score: 70 },
  { name: "Blackbase", score: 80 },
  { name: "VM", score: 75 },
  { name: "BDIX", score: 80 },
  { name: "WHM", score: 100 },
  
  
  
]

const skillsRight = [
  { name: "Git", score: 80 },
  { name: "Docker", score: 70 },
  { name: "Virtualmin", score: 90 },
  { name: "Cpannel", score: 70 },
  { name: "Zimra", score: 80 },
  { name: "SQL", score: 60 },
  { name: "Firebase", score: 60 },
  { name: "Microtic", score: 70 },
]

const columns = document.getElementById("skills").querySelectorAll(".col-lg-6")

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}

function component(name, score) {
  return createElementFromHTML(
    `<div class="progress">
      <span class="skill">${name}<i class="val">${score}%</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" role="progressbar" aria-valuenow="${score}" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    </div>`
  )
}

skillsLeft.map(item => {
  columns[0].append(component(item.name, item.score))
})

skillsRight.map(item => {
  columns[1].append(component(item.name, item.score))
})
