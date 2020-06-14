import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, m as create_component, p as claim_component, r as mount_component, n as noop, w as transition_in, x as transition_out, y as destroy_component } from './client.dfef4259.js';
import './ArtistListing.3e9d5616.js';
import { S as Showcase } from './Showcase.07112355.js';

/* src/routes/saved/albums.svelte generated by Svelte v3.23.0 */

function create_fragment(ctx) {
	let current;

	const albumshowcase = new Showcase({
			props: {
				title: "Saved albums",
				type: "albums",
				observerOptions: { uri: `/api/saved?type=albums` }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(albumshowcase.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(albumshowcase.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(albumshowcase, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(albumshowcase.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(albumshowcase.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(albumshowcase, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Albums> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Albums", $$slots, []);
	$$self.$capture_state = () => ({ AlbumShowcase: Showcase });
	return [];
}

class Albums extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Albums",
			options,
			id: create_fragment.name
		});
	}
}

export default Albums;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxidW1zLjA5OThhYzllLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3NhdmVkL2FsYnVtcy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgQWxidW1TaG93Y2FzZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TaG93Y2FzZS5zdmVsdGVcIjtcbjwvc2NyaXB0PlxuXG48QWxidW1TaG93Y2FzZVxuICAgIHRpdGxlPVwiU2F2ZWQgYWxidW1zXCJcbiAgICB0eXBlPVwiYWxidW1zXCJcbiAgICBvYnNlcnZlck9wdGlvbnM9e3sgdXJpOiBgL2FwaS9zYXZlZD90eXBlPWFsYnVtc2AgfX0gLz5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O3VCQU91QixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
