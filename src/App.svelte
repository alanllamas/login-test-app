<script>
  import { auth } from './firebase';
  import { authState } from 'rxfire/auth';

  let user;
  let profile;
  let username, password;

  const unsubscribe = authState(auth).subscribe(u => user = u);
  const login = () => {
    auth.signInWithEmailAndPassword(username, password);
  };
</script>

<main>
  <h1>Hello World!</h1>
</main>
<div>
  {#if user}
    <!-- <Profile {...user} /> -->
    <button on:click={ () => auth.signOut() }>Logout</button>
    <code>{JSON.stringify(user)}</code>
  {:else}
    <h2>No esta logeado</h2>
    <label for="username">
      Username:
      <input type="text" name="username" id="username" bind:value={username}>
    </label>
    <label for="password">
      Password:
      <input type="password" name="password" id="password" bind:value={password}>
    </label>
    <button on:click={login}>Signin with Email and Password</button>
  {/if}
</div>


<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>