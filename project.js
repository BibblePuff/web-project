function openRectangle() {
    document.getElementById('rectangleContainer').style.display = 'block';
}

function closeRectangle() {
    document.getElementById('rectangleContainer').style.display = 'none';
}
    const moodData = {
        happy: { color: '#fdd835', quotes: ["ბედნიერება ადამიანის არსებობის უმთავრესი მიზანი და მნიშვნელობაა - არისტოტელე", "ბედნიერება მისი ხვედრია ,ვინც ბევრს შრომობს - ლეონარდო და ვინჩი", "ადამიანთა უმრავლესობა ბედნიერია იმდენად, რამდენადაც გადაწყვეტენ, რომ ბედნიერები იყვნენ - ლინკოლნი"] },
        sad: { color: '#b5bde8', quotes: ["Quote 1 for Amazing", "Quote 2 for Amazing", "Quote 3 for Amazing"] },
        angry: { color: '#d32f2f', quotes: ["გრძნობდე ვინმეს მიმართ ბრაზს, ნიშნავს სვამდე საწამლავს და ელოდე, როდის მოიწამლება ის ვიღაც - ბუდა", "იყო გაბრაზებული , ნიშნავს  სხვის შეცდომებს მისცე საშუალება , დაგსაჯონ - ბუდა", "როდესაც გაბრაზებული ხარ დაითვალე ათამდე სანამ ილაპარაკებ, თუ ძალიან გაბრაზებული ხარ ასამდე. - თომას ჯეფერსონი"] },
        inLove: { color: '#e91e63', quotes: ["სიყვარული ბრძანებით არ მოდის - ილია ჭავჭავაძე", "ცხოვრების უდიდესი ტრაგედია არა ადამიანის გარდაცვალება, არამედ ისაა, რომ მათ აღარ უყვართ- მოემი", "სიყვარული გიჟს აჭკვიანებს და ჭკვიანს აგიჟებს - სტენდალი", "სიყვარული ვერტიკალურია და თან ბრუნვადი - შერეკილები" , "დედამიწას სიყვარული ატრიალებს - გურამ დოჩანაშვილი"] },
        disappointed: { color: '#b89c94', quotes: ["ყველაფერი, რაც ამ სამყაროში კეთდება, იმედით ხდება. -მარტინ ლუთერი", "Quote 2 for Amazing", "Quote 3 for Amazing"] },
    };
    function trackMood() {
        const selectedMood = document.getElementById('moodSelector').value;
        const quoteDisplay = document.getElementById('quoteDisplay');
        const feelingsList = document.getElementById('feelingsList');

        if (moodData[selectedMood]) {
    
    const randomIndex = Math.floor(Math.random() * moodData[selectedMood].quotes.length);
    const randomQuote = moodData[selectedMood].quotes[randomIndex];

    quoteDisplay.innerHTML = randomQuote;
    document.body.style.backgroundColor = moodData[selectedMood].color;
    }
}

    function saveFeeling() {
        const feelingInput = document.getElementById('feelingInput');
        const feelingsList = document.getElementById('feelingsList');

        const feeling = feelingInput.value.trim();
        if (feeling !== '') {
        
            const savedComments = JSON.parse(localStorage.getItem('comments')) || [];

            savedComments.push(feeling);

            localStorage.setItem('comments', JSON.stringify(savedComments));

            displayComments(savedComments);

            feelingInput.value = '';
        }
    }

    function displayComments(comments) {
        const feelingsList = document.getElementById('feelingsList');
        feelingsList.innerHTML = '';

        comments.forEach(comment => {
            const listItem = document.createElement('li');
            listItem.textContent = comment;
            feelingsList.appendChild(listItem);
        });
    }