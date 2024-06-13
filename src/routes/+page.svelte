<script>
	import Login from '$lib/components/Login.svelte';
	import LogoutButton from '$lib/components/LogoutButton.svelte';
	import { currentUser } from '$lib/firebase';
</script>

<div>
	<div class="text-lg">Current User</div>
	<pre>{JSON.stringify($currentUser)}</pre>
</div>

<div class="m-10">
	<h1 class="text-2xl mb-8">Login Component</h1>
	<Login />
</div>
<div class="m-10">
	<h1 class="text-2xl mb-8">Logout Button</h1>
	<LogoutButton />
</div>
