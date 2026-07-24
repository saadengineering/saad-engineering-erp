async function saveData(data){

// Google Sheets
await saveToGoogleSheet(data);

// Firebase
console.log("Firebase Save");

}
