# Git Commands


git init - Creates a new git repo
git status - View the changes to your project
git add - Add files to staging area 
git commit -m "" - Creates a new commit with files from staging area and logs a message
git log - View recent commits  

# Firebase Commands

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('child_changed');
//     // console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: "the first expense",
//     amount: 10500,
//     createdAt: ''
// }); 

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (error) => {
//     console.log("Error with fetching data", error);
// });

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 3500);

// Setup data subscription ->  Amaebi is a Senior Software Developer at Amazon Inc.

// Change the data and make sure it reprints.

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const content = snapshot.val();
//     const subscriptionMessage = `${content.author} is a ${content.job.title} at ${content.job.company}`;
//     console.log(subscriptionMessage);
// }, (e) => {
//     console.log('Error fetching data: ', e);
// });

// database.ref().update({
//     'job/company': "Steam Inc.",
//     'job/title': "Senior Manager"
// });

// database.ref().once("value").then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((error) => {
//     console.log('Error fetching data', error);
// });

// database.ref().set({
//     author: "Amaebi Amara",
//     project_name: "main-expensify-app",
//     job: {
//         title: 'Junior Software Developer',
//         company: "Google"
//     },
//     age: 24,
//     stressLevel: 6,
//     location: {
//         city: "Lagos-Mainland",
//         country: "Nigeria"
//     }
// }).then(() => {
//     console.log('Data is saved.'); 
// }).catch((e) => {
//    console.log('This failed.', e); 
// });

// database.ref().update({
//     age: 29,
//     stressLevel: 9,
//     'job/company': "Amazon Inc.",
//     'job/title': "Senior Software Developer",
//     'location/city': 'Seattle',
//     'location/country': "United States"

// });
