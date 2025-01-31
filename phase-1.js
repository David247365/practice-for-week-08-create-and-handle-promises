function stretch(time) {
	return new Promise((resolve, reject) => {
		if (time < 1000) {
			reject("Error: you don't have enough time to stretch");
		} else {
			setTimeout(() => {
				console.log("done stretching");
				resolve();
			}, 1000);
		}
	});
}

function runOnTreadmill(time) {
	return new Promise((resolve, reject) => {
		if (time < 500) {
			reject("Error: you don't have enough time to run on treadmill");
		} else {
			setTimeout(() => {
				console.log("done running on treadmill");
				resolve();
			}, 500);
		}
	});
}

function liftWeights(time) {
	return new Promise((resolve, reject) => {
		if (time < 2000) {
			reject("Error: you don't have enough time to lift weights");
		} else {
			setTimeout(() => {
				console.log("done lifting weights");
				resolve();
			}, 2000);
		}
	});
}

function workout(time) {
	Promise.all([stretch(), runOnTreadmill(), liftWeights()]).then(() =>
		console.log("Done Working out")
	);
}

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout(1000);
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
