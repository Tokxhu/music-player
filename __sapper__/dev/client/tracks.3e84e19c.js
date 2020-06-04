import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, m as create_component, p as claim_component, r as mount_component, n as noop, w as transition_in, x as transition_out, y as destroy_component } from './client.4925b0ab.js';
import './ArtistListing.5a5b8ad1.js';
import { S as Showcase } from './Showcase.97841dd2.js';

/* src/routes/saved/tracks.svelte generated by Svelte v3.23.0 */

function create_fragment(ctx) {
	let current;

	const trackshowcase = new Showcase({
			props: {
				title: "Saved tracks",
				type: "tracks",
				observerOptions: { uri: `/api/saved?type=tracks` },
				"}": true
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(trackshowcase.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(trackshowcase.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(trackshowcase, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(trackshowcase.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(trackshowcase.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(trackshowcase, detaching);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Tracks> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Tracks", $$slots, []);
	$$self.$capture_state = () => ({ TrackShowcase: Showcase });
	return [];
}

class Tracks extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Tracks",
			options,
			id: create_fragment.name
		});
	}
}

export default Tracks;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tzLjNlODRlMTljLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3NhdmVkL3RyYWNrcy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgVHJhY2tTaG93Y2FzZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TaG93Y2FzZS5zdmVsdGVcIjtcbjwvc2NyaXB0PlxuXG48VHJhY2tTaG93Y2FzZVxuICAgIHRpdGxlPVwiU2F2ZWQgdHJhY2tzXCJcbiAgICB0eXBlPVwidHJhY2tzXCJcbiAgICBvYnNlcnZlck9wdGlvbnM9e3sgdXJpOiBgL2FwaS9zYXZlZD90eXBlPXRyYWNrc2AgfX1cbiAgICB9IC8+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozt1QkFPdUIsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
