import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, l as space, t as text, m as create_component, c as claim_element, a as children, o as claim_space, b as claim_text, f as detach_dev, p as claim_component, q as attr_dev, g as add_location, h as insert_dev, j as append_dev, r as mount_component, u as set_data_dev, w as transition_in, x as transition_out, y as destroy_component } from './client.aa4ac9b2.js';
import { A as ArtistListing } from './ArtistListing.2286491b.js';
import { I as ItemListing } from './ItemListing.8a3db5d7.js';

/* src/routes/albums/[spotifyID].svelte generated by Svelte v3.23.0 */
const file = "src/routes/albums/[spotifyID].svelte";

function create_fragment(ctx) {
	let div1;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let div0;
	let h1;
	let t1_value = /*info*/ ctx[0].name + "";
	let t1;
	let t2;
	let t3;
	let h4;
	let t4_value = /*info*/ ctx[0].genres.join(", ") + "";
	let t4;
	let t5;
	let current;

	const artistlisting = new ArtistListing({
			props: { artists: /*info*/ ctx[0].artists },
			$$inline: true
		});

	const itemlisting = new ItemListing({
			props: { items: /*info*/ ctx[0].tracks.items },
			$$inline: true
		});

	const block = {
		c: function create() {
			div1 = element("div");
			img = element("img");
			t0 = space();
			div0 = element("div");
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			create_component(artistlisting.$$.fragment);
			t3 = space();
			h4 = element("h4");
			t4 = text(t4_value);
			t5 = space();
			create_component(itemlisting.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { id: true, class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { id: true, class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			claim_component(artistlisting.$$.fragment, div0_nodes);
			t3 = claim_space(div0_nodes);
			h4 = claim_element(div0_nodes, "H4", {});
			var h4_nodes = children(h4);
			t4 = claim_text(h4_nodes, t4_value);
			h4_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			claim_component(itemlisting.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*info*/ ctx[0].images[0].url)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = "" + (/*info*/ ctx[0].name + " cover"));
			attr_dev(img, "class", "svelte-wxh8sc");
			add_location(img, file, 43, 4, 995);
			add_location(h1, file, 45, 8, 1080);
			add_location(h4, file, 47, 8, 1158);
			attr_dev(div0, "id", "text");
			attr_dev(div0, "class", "svelte-wxh8sc");
			add_location(div0, file, 44, 4, 1056);
			attr_dev(div1, "id", "info");
			attr_dev(div1, "class", "svelte-wxh8sc");
			add_location(div1, file, 42, 0, 975);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, img);
			append_dev(div1, t0);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t1);
			append_dev(div0, t2);
			mount_component(artistlisting, div0, null);
			append_dev(div0, t3);
			append_dev(div0, h4);
			append_dev(h4, t4);
			insert_dev(target, t5, anchor);
			mount_component(itemlisting, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*info*/ 1 && img.src !== (img_src_value = /*info*/ ctx[0].images[0].url)) {
				attr_dev(img, "src", img_src_value);
			}

			if (!current || dirty & /*info*/ 1 && img_alt_value !== (img_alt_value = "" + (/*info*/ ctx[0].name + " cover"))) {
				attr_dev(img, "alt", img_alt_value);
			}

			if ((!current || dirty & /*info*/ 1) && t1_value !== (t1_value = /*info*/ ctx[0].name + "")) set_data_dev(t1, t1_value);
			const artistlisting_changes = {};
			if (dirty & /*info*/ 1) artistlisting_changes.artists = /*info*/ ctx[0].artists;
			artistlisting.$set(artistlisting_changes);
			if ((!current || dirty & /*info*/ 1) && t4_value !== (t4_value = /*info*/ ctx[0].genres.join(", ") + "")) set_data_dev(t4, t4_value);
			const itemlisting_changes = {};
			if (dirty & /*info*/ 1) itemlisting_changes.items = /*info*/ ctx[0].tracks.items;
			itemlisting.$set(itemlisting_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(artistlisting.$$.fragment, local);
			transition_in(itemlisting.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(artistlisting.$$.fragment, local);
			transition_out(itemlisting.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			destroy_component(artistlisting);
			if (detaching) detach_dev(t5);
			destroy_component(itemlisting, detaching);
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

async function preload(page, session) {
	const { spotifyID } = page.params;
	const res = await this.fetch(`/api/album?id=${spotifyID}`, { credentials: "same-origin" });
	const info = await res.json();
	return { info };
}

function instance($$self, $$props, $$invalidate) {
	let { info } = $$props;
	const writable_props = ["info"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5BspotifyIDu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5BspotifyIDu5D", $$slots, []);

	$$self.$set = $$props => {
		if ("info" in $$props) $$invalidate(0, info = $$props.info);
	};

	$$self.$capture_state = () => ({
		preload,
		info,
		ItemListing,
		ArtistListing
	});

	$$self.$inject_state = $$props => {
		if ("info" in $$props) $$invalidate(0, info = $$props.info);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [info];
}

class U5BspotifyIDu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { info: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5BspotifyIDu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*info*/ ctx[0] === undefined && !("info" in props)) {
			console.warn("<U5BspotifyIDu5D> was created without expected prop 'info'");
		}
	}

	get info() {
		throw new Error("<U5BspotifyIDu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set info(value) {
		throw new Error("<U5BspotifyIDu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5BspotifyIDu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3Nwb3RpZnlJRF0uMGJmNDE5M2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWxidW1zL1tzcG90aWZ5SURdLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XG4gICAgICAgIGNvbnN0IHsgc3BvdGlmeUlEIH0gPSBwYWdlLnBhcmFtcztcblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGAvYXBpL2FsYnVtP2lkPSR7c3BvdGlmeUlEfWAsIHtcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICAgIHJldHVybiB7IGluZm8gfTtcbiAgICB9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgbGV0IGluZm87XG5cbiAgICBpbXBvcnQgSXRlbUxpc3RpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaXRlbS9JdGVtTGlzdGluZy5zdmVsdGVcIjtcbiAgICBpbXBvcnQgQXJ0aXN0TGlzdGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hcnRpc3QvQXJ0aXN0TGlzdGluZy5zdmVsdGVcIjtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgI2luZm8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMGVtO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImFsYnVtY292ZXIgdGV4dFwiO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwZW0gMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICB9XG4gICAgI2luZm8gPiBpbWcge1xuICAgICAgICBncmlkLWFyZWE6IGFsYnVtY292ZXI7XG4gICAgICAgIG1hcmdpbjogNSUgMDtcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgfVxuICAgICN0ZXh0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuPC9zdHlsZT5cblxuPGRpdiBpZD1cImluZm9cIj5cbiAgICA8aW1nIHNyYz17aW5mby5pbWFnZXNbMF0udXJsfSBhbHQ9XCJ7aW5mby5uYW1lfSBjb3ZlclwiIC8+XG4gICAgPGRpdiBpZD1cInRleHRcIj5cbiAgICAgICAgPGgxPntpbmZvLm5hbWV9PC9oMT5cbiAgICAgICAgPEFydGlzdExpc3RpbmcgYXJ0aXN0cz17aW5mby5hcnRpc3RzfSAvPlxuICAgICAgICA8aDQ+e2luZm8uZ2VucmVzLmpvaW4oJywgJyl9PC9oND5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPEl0ZW1MaXN0aW5nIGl0ZW1zPXtpbmZvLnRyYWNrcy5pdGVtc30gLz5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7eUJBNkNhLEdBQUksSUFBQyxJQUFJOzs7Ozt5QkFFVCxHQUFJLElBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJOzs7Ozs7OEJBREYsR0FBSSxJQUFDLE9BQU87Ozs7OzRCQUl4QixHQUFJLElBQUMsTUFBTSxDQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkNBUHZCLEdBQUksSUFBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUc7dURBQVEsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytFQUFuQyxHQUFJLElBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHOzs7OzJGQUFRLEdBQUksSUFBQyxJQUFJOzs7OzZFQUVwQyxHQUFJLElBQUMsSUFBSTs7b0VBQ1UsR0FBSSxJQUFDLE9BQU87OzZFQUMvQixHQUFJLElBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJOztnRUFHZCxHQUFJLElBQUMsTUFBTSxDQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQWpEWCxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU87U0FDL0IsU0FBUyxLQUFLLElBQUksQ0FBQyxNQUFNO09BRTNCLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxrQkFBa0IsU0FBUyxNQUNuRCxXQUFXLEVBQUUsYUFBYTtPQUV4QixJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUk7VUFFbEIsSUFBSTs7OztPQUtOLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
