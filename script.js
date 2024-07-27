document.addEventListener('DOMContentLoaded', function() {
    const timetableBtn = document.getElementById('timetable-btn');
    const dropdown = document.getElementById('dropdown');
    const contentDiv = document.getElementById('content'); // Get the content div here

    timetableBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
            contentDiv.innerHTML = ''; // Clear the content div when the dropdown is hidden
        }
    });
});

function optionSelected(option) {
    const contentDiv = document.getElementById('content');
    switch (option) {
        case 'Option 1':
            contentDiv.innerHTML = `
                <h2>Hey CHAMP!!</h2>
                <p>On Monday, we start the week with a big smile and a new adventure</p>
                <table border="1">
                    <tr>
                        <th>Subject</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td>Math</td>
                        <td>09:00 - 10:00</td>
                    </tr>
                    <tr>
                        <td>Science</td>
                        <td>10:00 - 11:00</td>
                    </tr>
                </table>`;
            break;
        case 'Option 2':
            contentDiv.innerHTML = `
                <h2>Hey CHAMP!!</h2>
                <p>Tuesday is a day to try something new and make new friends.</p>
                <table border="1">
                    <tr>
                        <th>Subject</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td>English</td>
                        <td>09:00 - 10:00</td>
                    </tr>
                    <tr>
                        <td>Art</td>
                        <td>10:00 - 11:00</td>
                    </tr>
                </table>`;
            break;
        case 'Option 3':
            contentDiv.innerHTML = `
                <h2>Hey CHAMP!!</h2>
                <p>Wednesday is hump day, and we’re halfway to the weekend!</p>
                <table border="1">
                    <tr>
                        <th>Subject</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td>Chemistry</td>
                        <td>09:00 - 10:00</td>
                    </tr>
                    <tr>
                        <td>Music</td>
                        <td>10:00 - 11:00</td>
                    </tr>
                </table>`;
            break;
        case 'Option 4':
            contentDiv.innerHTML = `
                <h2>Hey CHAMP!!</h2>
                <p>On Thursday, we have fun learning and getting ready for Friday.</p>
                <table border="1">
                    <tr>
                        <th>Subject</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td>Physics</td>
                        <td>09:00 - 10:00</td>
                    </tr>
                    <tr>
                        <td>Biology</td>
                        <td>10:00 - 11:00</td>
                    </tr>
                </table>`;
            break;
        case 'Option 5':
            contentDiv.innerHTML = `
                <h2>Hey CHAMP!!</h2>
                <p>Friday means it's almost time for the weekend, so let’s have extra fun!</p>
                <table border="1">
                    <tr>
                        <th>Subject</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td>Computer Science</td>
                        <td>09:00 - 10:00</td>
                    </tr>
                    <tr>
                        <td>Economics</td>
                        <td>10:00 - 11:00</td>
                    </tr>
                </table>`;
            break;
        case 'Option 6':
            contentDiv.innerHTML = `
                <h2>Hey CHAMP!!</h2>
                <p>Saturday is for playing outside and enjoying family time!! Cause here comes the WeekEnd after this-"SUNDAY OUR FUNDAY" </p>
                <table border="1">
                    <tr>
                        <th>Subject</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td>French</td>
                        <td>09:00 - 10:00</td>
                    </tr>
                    <tr>
                        <td>Physical Education</td>
                        <td>10:00 - 11:00</td>
                    </tr>
                </table>`;
            break;
        default:
            contentDiv.innerHTML = '<p>Select an option to see the content.</p>';
    }
}

// JavaScript to animate text appearance
const welcomeText = document.getElementById('welcome-text');
const introductionSection = document.getElementById('introduction');

// Animate welcome text
welcomeText.style.opacity = '0';
setTimeout(() => {
    welcomeText.style.transition = 'opacity 2s ease-in-out';
    welcomeText.style.opacity = '1';
}, 500);

// Animate introduction section after delay
setTimeout(() => {
    introductionSection.style.transition = 'opacity 1s ease-in-out';
    introductionSection.style.opacity = '1';
}, 2500);
