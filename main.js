var pageCounter = 1
var animalContainer = document.getElementById('animal-info')
var btn = document.getElementById('btn')

btn.addEventListener('click', function() {
    var ourRequest = new XMLHttpRequest()
    ourRequest.open('Get', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json')

ourRequest.onload = function() {
   var ourData = JSON.parse(ourRequest.responseText)
   console.log(ourData[0])
   renderHTML(ourData);
 
};
ourRequest.send()
pageCounter++

})

function renderHTML(data) {
    var htmlString = ""
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + "<p>"
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString)
}


