function stretch(time) {
	return new Promise((resolve, reject) => {
		if (time < 1000) {
			reject("Error: you don't have enough time to stretch");
		} else {
			setTimeout(() => {
				console.log("done stretching");
				resolve(time - 1000);
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
				resolve(time - 500);
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
				resolve(time - 2000);
			}, 2000);
		}
	});
}

function workout(totalTime) {
	let timeLeft = totalTime;

	stretch(timeLeft)
		.then((timeRemaining) => {
			timeLeft = timeRemaining;
			return runOnTreadmill(timeLeft);
		})
		.then((timeRemaining) => {
			timeLeft = timeRemaining;
			return liftWeights(timeLeft);
		})
		.then((timeRemaining) => {
			console.log(`done working out with ${timeRemaining / 1000} seconds left`);
		})
		.catch((error) => {
			console.log(error);
		});
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/

// workout(500);
// should print out the following:
// Error:  you dont have enough time to stretch

// workout(1000);
// should print out the following:
// done stretching
// Error:  you dont have enough time to run on treadmill

// workout(2000);
// should print out the following:
// done stretching
// done running on treadmill
// Error:  you dont have enough time to lift weights

workout(4000);
// should print out the following:
//   done stretching
//   done running on treadmill
//   done lifting weights
//   done working out with 0.5 seconds left
