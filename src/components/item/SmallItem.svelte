<script>
	export let item;
	export let cover = false;
	export let context = "album";

	import { playbackId } from "../../stores.js";
	import ArtistListing from "../artist/ArtistListing.svelte";

	let albumCover;
</script>

<style>
	.track {
		--height: 3em;
		width: 100%;
		height: var(--height);

		display: grid;

		align-items: center;

		border-bottom: 1px var(--alt-background-color) solid;
	}

	.track.list {
		grid-template-areas: "playbutton name name artist album time";
		grid-template-columns: var(--height) 4fr 6rem 2fr 3fr 3rem;
		padding: 0 0.5rem;
		grid-gap: 0.5rem;
	}

	.track.list.isExplicit {
		grid-template-areas: "playbutton name explicit artist album time";
	}

	.track.album {
		grid-template-areas: "number name . artist explicit time";
		grid-template-columns: var(--height) repeat(3, auto) 6rem 4rem;
		padding-right: 1rem;
	}

	.track > * {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.playbutton {
		visibility: hidden;
		margin: 12.5%;
		width: 75%;
		height: 75%;
		background-color: transparent;
		color: inherit;

		text-align: center;
		line-height: unset;

		border: 1px solid var(--color);
		border-radius: 100%;
	}

	.track:hover .playbutton {
		visibility: visible;
	}

	.playbutton:hover {
		border-width: 2px;
	}
	.name {
		grid-area: name;
	}
	.artist {
		grid-area: artist;
	}
	.album {
		grid-area: album;
	}
	.time {
		grid-area: time;
	}
	.number,
	.name,
	.artist,
	.album,
	.time {
		display: flex;
		align-items: center;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.track.album .artist {
		width: auto;
		overflow: hidden;
		/* width: 40%; */
	}

	.track.album .name {
		max-width: 90%;
		width: auto;
	}

	.track.album .name::after {
		content: "–";
		margin: 0 1rem;
	}
	.explicit {
		grid-area: explicit;
		margin-left: auto;
		min-width: 5rem;
		color: var(--spotify-green);
	}
	.time {
		min-width: 4rem;
	}
	.number {
		height: var(--height);
		width: var(--height);
		justify-content: center;
	}
	a {
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	.number,
	.time,
	.explicit {
		flex-shrink: 0;
	}
</style>

<div
	class="track hover"
	id={item.id}
	class:cover
	class:album={context == 'album'}
	class:list={context == 'list'}
	class:isExplicit={context == 'list' && item.explicit}>
	<button class="playbutton" on:click={() => ($playbackId = item.id)}>
		▶
	</button>
	{#if context == 'album'}
		<p class="number">{item.track_number}</p>
	{/if}
	<div class="name">
		{#if item.album}
			<!-- <a href="/albums/{item.album.id}"> -->
			<b class="text-no-overflow">{item.name}</b>
			<!-- </a> -->
		{:else}<b>{item.name}</b>{/if}
	</div>
	{#if context == 'list' && item.explicit}
		<b class="explicit">EXPLICIT</b>
	{/if}
	<div class="artist">
		<ArtistListing artists={item.artists} />
	</div>

	{#if context == 'list'}
		<a href="/albums/{item.album.id}">
			<p>{item.album.name}</p>
		</a>
	{/if}
	{#if context == 'album'}
		<b
			class="explicit"
			style="visibility: {!item.explicit ? 'hidden' : 'visible'}">
			EXPLICIT
		</b>
	{/if}
	<p class="time">
		{#if typeof item.duration_ms == typeof 'string'}
			{item.duration_ms}
		{:else}
			{Math.floor(item.duration_ms / (60 * 1000))}:{new String(Math.floor((item.duration_ms % 60000) / 1000)).padStart(2, '0')}
		{/if}
	</p>
</div>
