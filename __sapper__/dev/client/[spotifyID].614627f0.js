import { S as SvelteComponentDev, i as init, d as dispatch_dev, k as globals, s as safe_not_equal, v as validate_slots, e as element, l as space, t as text, m as create_component, c as claim_element, a as children, o as claim_space, b as claim_text, f as detach_dev, p as claim_component, q as attr_dev, g as add_location, h as insert_dev, j as append_dev, r as mount_component, u as set_data_dev, w as transition_in, x as transition_out, y as destroy_component } from './client.832f20f7.js';
import './ArtistListing.503aff60.js';
import { S as Showcase } from './Showcase.b014bca7.js';
import { I as ItemListing } from './ItemListing.337037e6.js';

/* src/routes/artists/[spotifyID].svelte generated by Svelte v3.23.0 */

const { console: console_1 } = globals;
const file = "src/routes/artists/[spotifyID].svelte";

function create_fragment(ctx) {
	let div1;
	let div0;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let h1;
	let t1_value = /*info*/ ctx[0].name + "";
	let t1;
	let t2;
	let t3;
	let t4;
	let div1_id_value;
	let current;

	const itemlisting = new ItemListing({
			props: {
				items: /*info*/ ctx[0].topTracks,
				cover: true
			},
			$$inline: true
		});

	const showcase0 = new Showcase({
			props: {
				items: /*info*/ ctx[0].albums.filter(func),
				type: "albums",
				title: "Albums",
				wrap: false
			},
			$$inline: true
		});

	const showcase1 = new Showcase({
			props: {
				items: /*info*/ ctx[0].albums.filter(func_1),
				type: "albums",
				title: "Singles",
				wrap: false
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			img = element("img");
			t0 = space();
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			create_component(itemlisting.$$.fragment);
			t3 = space();
			create_component(showcase0.$$.fragment);
			t4 = space();
			create_component(showcase1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true, id: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			t0 = claim_space(div0_nodes);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			claim_component(itemlisting.$$.fragment, div1_nodes);
			t3 = claim_space(div1_nodes);
			claim_component(showcase0.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			claim_component(showcase1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*info*/ ctx[0].images.shift().url)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = "Picture of " + /*info*/ ctx[0].name);
			attr_dev(img, "class", "svelte-1c4jo3m");
			add_location(img, file, 47, 8, 1016);
			attr_dev(h1, "class", "svelte-1c4jo3m");
			add_location(h1, file, 48, 8, 1091);
			attr_dev(div0, "class", "top svelte-1c4jo3m");
			add_location(div0, file, 46, 4, 990);
			attr_dev(div1, "class", "artist svelte-1c4jo3m");
			attr_dev(div1, "id", div1_id_value = /*info*/ ctx[0].id);
			add_location(div1, file, 45, 0, 952);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, img);
			append_dev(div0, t0);
			append_dev(div0, h1);
			append_dev(h1, t1);
			append_dev(div1, t2);
			mount_component(itemlisting, div1, null);
			append_dev(div1, t3);
			mount_component(showcase0, div1, null);
			append_dev(div1, t4);
			mount_component(showcase1, div1, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*info*/ 1 && img.src !== (img_src_value = /*info*/ ctx[0].images.shift().url)) {
				attr_dev(img, "src", img_src_value);
			}

			if (!current || dirty & /*info*/ 1 && img_alt_value !== (img_alt_value = "Picture of " + /*info*/ ctx[0].name)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if ((!current || dirty & /*info*/ 1) && t1_value !== (t1_value = /*info*/ ctx[0].name + "")) set_data_dev(t1, t1_value);
			const itemlisting_changes = {};
			if (dirty & /*info*/ 1) itemlisting_changes.items = /*info*/ ctx[0].topTracks;
			itemlisting.$set(itemlisting_changes);
			const showcase0_changes = {};
			if (dirty & /*info*/ 1) showcase0_changes.items = /*info*/ ctx[0].albums.filter(func);
			showcase0.$set(showcase0_changes);
			const showcase1_changes = {};
			if (dirty & /*info*/ 1) showcase1_changes.items = /*info*/ ctx[0].albums.filter(func_1);
			showcase1.$set(showcase1_changes);

			if (!current || dirty & /*info*/ 1 && div1_id_value !== (div1_id_value = /*info*/ ctx[0].id)) {
				attr_dev(div1, "id", div1_id_value);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(itemlisting.$$.fragment, local);
			transition_in(showcase0.$$.fragment, local);
			transition_in(showcase1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(itemlisting.$$.fragment, local);
			transition_out(showcase0.$$.fragment, local);
			transition_out(showcase1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			destroy_component(itemlisting);
			destroy_component(showcase0);
			destroy_component(showcase1);
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
	const res = await this.fetch(`/api/artist?id=${spotifyID}`, { credentials: "same-origin" });
	const info = await res.json();
	return { info };
}

const func = a => a.album_group == "album";
const func_1 = a => a.album_group == "single";

function instance($$self, $$props, $$invalidate) {
	let { info } = $$props;
	console.log(info.albums.filter(a => a.album_group == "album").length);
	const writable_props = ["info"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<U5BspotifyIDu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5BspotifyIDu5D", $$slots, []);

	$$self.$set = $$props => {
		if ("info" in $$props) $$invalidate(0, info = $$props.info);
	};

	$$self.$capture_state = () => ({ preload, info, Showcase, ItemListing });

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
			console_1.warn("<U5BspotifyIDu5D> was created without expected prop 'info'");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3Nwb3RpZnlJRF0uNjE0NjI3ZjAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYXJ0aXN0cy9bc3BvdGlmeUlEXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQocGFnZSwgc2Vzc2lvbikge1xuICAgICAgICBjb25zdCB7IHNwb3RpZnlJRCB9ID0gcGFnZS5wYXJhbXM7XG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaChgL2FwaS9hcnRpc3Q/aWQ9JHtzcG90aWZ5SUR9YCwge1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAgICAgcmV0dXJuIHsgaW5mbyB9O1xuICAgIH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgaW5mbztcblxuICAgIGNvbnNvbGUubG9nKGluZm8uYWxidW1zLmZpbHRlcihhID0+IGEuYWxidW1fZ3JvdXAgPT0gXCJhbGJ1bVwiKS5sZW5ndGgpO1xuXG4gICAgaW1wb3J0IFNob3djYXNlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Nob3djYXNlLnN2ZWx0ZVwiO1xuICAgIGltcG9ydCBJdGVtTGlzdGluZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pdGVtL0l0ZW1MaXN0aW5nLnN2ZWx0ZVwiO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICAuYXJ0aXN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMWVtO1xuICAgIH1cbiAgICAudG9wIHtcbiAgICAgICAgaGVpZ2h0OiAxNnJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgZ2FwOiAxcmVtO1xuICAgIH1cbiAgICAudG9wID4gaDEge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB9XG4gICAgLnRvcCA+IGltZyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG48L3N0eWxlPlxuXG48ZGl2IGNsYXNzPVwiYXJ0aXN0XCIgaWQ9e2luZm8uaWR9PlxuICAgIDxkaXYgY2xhc3M9XCJ0b3BcIj5cbiAgICAgICAgPGltZyBzcmM9e2luZm8uaW1hZ2VzLnNoaWZ0KCkudXJsfSBhbHQ9XCJQaWN0dXJlIG9mIHtpbmZvLm5hbWV9XCIgLz5cbiAgICAgICAgPGgxPntpbmZvLm5hbWV9PC9oMT5cbiAgICA8L2Rpdj5cblxuICAgIDxJdGVtTGlzdGluZyBpdGVtcz17aW5mby50b3BUcmFja3N9IGNvdmVyPXt0cnVlfSAvPlxuXG4gICAgPCEtLSB0b2RvIGRlbiBmw6VyIGVuIGRlbCBkdXBlcyBow6RyIC0tPlxuICAgIDxTaG93Y2FzZVxuICAgICAgICBpdGVtcz17aW5mby5hbGJ1bXMuZmlsdGVyKGEgPT4gYS5hbGJ1bV9ncm91cCA9PSAnYWxidW0nKX1cbiAgICAgICAgdHlwZT1cImFsYnVtc1wiXG4gICAgICAgIHRpdGxlPVwiQWxidW1zXCJcbiAgICAgICAgd3JhcD17ZmFsc2V9IC8+XG5cbiAgICA8U2hvd2Nhc2VcbiAgICAgICAgaXRlbXM9e2luZm8uYWxidW1zLmZpbHRlcihhID0+IGEuYWxidW1fZ3JvdXAgPT0gJ3NpbmdsZScpfVxuICAgICAgICB0eXBlPVwiYWxidW1zXCJcbiAgICAgICAgdGl0bGU9XCJTaW5nbGVzXCJcbiAgICAgICAgd3JhcD17ZmFsc2V9IC8+XG5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFnRGEsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7b0JBR0UsR0FBSSxJQUFDLFNBQVM7V0FBUyxJQUFJOzs7Ozs7O29CQUlwQyxHQUFJLElBQUMsTUFBTSxDQUFDLE1BQU07OztVQUduQixLQUFLOzs7Ozs7O29CQUdKLEdBQUksSUFBQyxNQUFNLENBQUMsTUFBTTs7O1VBR25CLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkNBakJELEdBQUksSUFBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUc7aUVBQW1CLEdBQUksSUFBQyxJQUFJOzs7Ozs7OztpREFGN0MsR0FBSSxJQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0VBRWIsR0FBSSxJQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRzs7OztxR0FBbUIsR0FBSSxJQUFDLElBQUk7Ozs7NkVBQ3hELEdBQUksSUFBQyxJQUFJOztnRUFHRSxHQUFJLElBQUMsU0FBUzs7OzhEQUl2QixHQUFJLElBQUMsTUFBTSxDQUFDLE1BQU07Ozs4REFNbEIsR0FBSSxJQUFDLE1BQU0sQ0FBQyxNQUFNOzs7cUZBaEJULEdBQUksSUFBQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUE1Q0wsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPO1NBQy9CLFNBQVMsS0FBSyxJQUFJLENBQUMsTUFBTTtPQUUzQixHQUFHLFNBQVMsSUFBSSxDQUFDLEtBQUssbUJBQW1CLFNBQVMsTUFDcEQsV0FBVyxFQUFFLGFBQWE7T0FFeEIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJO1VBRWxCLElBQUk7OzthQThDYSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsSUFBSSxPQUFPO2VBTTdCLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxJQUFJLFFBQVE7OztPQS9DakQsSUFBSTtDQUVmLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLElBQUksT0FBTyxFQUFFLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9