var guestList = ['Angela', 'Trevor', 'Pam', 'James', 'Lara', 'Jason'];
var guestName = prompt('What is your First Name:');

if (guestList.includes(guestName)) {
    alert('Welcome ' + guestName);
} else {
    alert('Sorry, maybe next time :(');
}
