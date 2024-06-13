<script>
	import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
	import { firebaseAuth } from '../firebase';

	let email = '';
	let password = '';

	const handleGoogleLogin = () => {
		signInWithPopup(firebaseAuth, new GoogleAuthProvider())
			.then(function (result) {
				console.log(result);
				// The signed-in user info.
				// var firebaseuser = result.user;

				// if (firebaseuser) {
				// 	let { email } = firebaseuser;
				// 	console.log('Google first', $user);
				// 	user.set({ ...$user, loggedIn: true, email });
				// 	console.log('Google then', $user);
				// 	goto('/dashboard');
				// }
				// ...
			})
			.catch(function (error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
			});
	};

	// Destructuring to obtain email and password from form via Event
	const handleLoginForm = () => {
		signInWithEmailAndPassword(firebaseAuth, email, password)
			.then(function (result) {
				console.log(result);
				// let firebaseUser = auth.currentUser;

				// if (firebaseUser) {
				// 	let { email } = firebaseUser;
				// 	console.log('first', $user);
				// 	user.set({ ...$user, loggedIn: true, email });
				// 	console.log('then', $user);
				// 	navigate('/dashboard');
				// }
			})
			.catch((error) => alert(error.message));
	};
</script>

<div class="card card-bordered bg-white">
	<div class="card-body flex flex-col sm:flex-row w-full justify-evenly">
		<div>
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">E-Mail</span>
				</div>
				<input type="text" class="input input-bordered w-full input-sm" />
			</label>
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">Passwort</span>
					<!-- <span class="label-text-alt cursor-pointer">Passwort vergessen?</span> -->
				</div>
				<input type="password" class="input input-bordered w-full input-sm" />
			</label>

			<div class="card-actions mt-4">
				<button class="btn btn-primary btn-block" on:click={handleLoginForm}>Anmelden</button>
			</div>
		</div>
		<div class="divider sm:divider-horizontal">ODER</div>
		<div class="flex flex-col gap-4 min-w-48">
			<button class="btn btn-primary" on:click={handleGoogleLogin}>Google</button>
		</div>
	</div>
</div>
