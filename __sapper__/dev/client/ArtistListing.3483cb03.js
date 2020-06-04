import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, c as claim_element, a as children, b as claim_text, f as detach_dev, q as attr_dev, g as add_location, h as insert_dev, j as append_dev, u as set_data_dev, n as noop, B as validate_each_argument, m as create_component, l as space, p as claim_component, o as claim_space, r as mount_component, w as transition_in, x as transition_out, y as destroy_component, C as group_outros, D as check_outros, E as destroy_each } from './client.23b09ea4.js';

/* src/components/artist/ArtistLink.svelte generated by Svelte v3.23.0 */

const file = "src/components/artist/ArtistLink.svelte";

function create_fragment(ctx) {
	let a;
	let t_value = /*artist*/ ctx[0].name + "";
	let t;
	let a_href_value;

	const block = {
		c: function create() {
			a = element("a");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, t_value);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "href", a_href_value = "/artists/" + /*artist*/ ctx[0].id);
			attr_dev(a, "class", "svelte-y49154");
			add_location(a, file, 24, 0, 377);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, t);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*artist*/ 1 && t_value !== (t_value = /*artist*/ ctx[0].name + "")) set_data_dev(t, t_value);

			if (dirty & /*artist*/ 1 && a_href_value !== (a_href_value = "/artists/" + /*artist*/ ctx[0].id)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
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
	let { artist } = $$props;
	const writable_props = ["artist"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ArtistLink> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("ArtistLink", $$slots, []);

	$$self.$set = $$props => {
		if ("artist" in $$props) $$invalidate(0, artist = $$props.artist);
	};

	$$self.$capture_state = () => ({ artist });

	$$self.$inject_state = $$props => {
		if ("artist" in $$props) $$invalidate(0, artist = $$props.artist);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [artist];
}

class ArtistLink extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { artist: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ArtistLink",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*artist*/ ctx[0] === undefined && !("artist" in props)) {
			console.warn("<ArtistLink> was created without expected prop 'artist'");
		}
	}

	get artist() {
		throw new Error("<ArtistLink>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set artist(value) {
		throw new Error("<ArtistLink>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/artist/ArtistListing.svelte generated by Svelte v3.23.0 */
const file$1 = "src/components/artist/ArtistListing.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	child_ctx[3] = i;
	return child_ctx;
}

// (14:4) {#each artists as artist, i}
function create_each_block(ctx) {
	let t0;
	let t1_value = (/*i*/ ctx[3] < /*artists*/ ctx[0].length - 1 ? "/ " : "") + "";
	let t1;
	let current;

	const artistlink = new ArtistLink({
			props: { artist: /*artist*/ ctx[1] },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(artistlink.$$.fragment);
			t0 = space();
			t1 = text(t1_value);
		},
		l: function claim(nodes) {
			claim_component(artistlink.$$.fragment, nodes);
			t0 = claim_space(nodes);
			t1 = claim_text(nodes, t1_value);
		},
		m: function mount(target, anchor) {
			mount_component(artistlink, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const artistlink_changes = {};
			if (dirty & /*artists*/ 1) artistlink_changes.artist = /*artist*/ ctx[1];
			artistlink.$set(artistlink_changes);
			if ((!current || dirty & /*artists*/ 1) && t1_value !== (t1_value = (/*i*/ ctx[3] < /*artists*/ ctx[0].length - 1 ? "/ " : "") + "")) set_data_dev(t1, t1_value);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(artistlink.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(artistlink.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(artistlink, detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(14:4) {#each artists as artist, i}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let p;
	let current;
	let each_value = /*artists*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			p = element("p");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(p_nodes);
			}

			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "text-no-overflow svelte-1um2yp2");
			add_location(p, file$1, 12, 0, 148);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(p, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*artists*/ 1) {
				each_value = /*artists*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(p, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { artists } = $$props;
	const writable_props = ["artists"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ArtistListing> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("ArtistListing", $$slots, []);

	$$self.$set = $$props => {
		if ("artists" in $$props) $$invalidate(0, artists = $$props.artists);
	};

	$$self.$capture_state = () => ({ artists, ArtistLink });

	$$self.$inject_state = $$props => {
		if ("artists" in $$props) $$invalidate(0, artists = $$props.artists);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [artists];
}

class ArtistListing extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { artists: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ArtistListing",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*artists*/ ctx[0] === undefined && !("artists" in props)) {
			console.warn("<ArtistListing> was created without expected prop 'artists'");
		}
	}

	get artists() {
		throw new Error("<ArtistListing>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set artists(value) {
		throw new Error("<ArtistListing>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { ArtistListing as A };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJ0aXN0TGlzdGluZy4zNDgzY2IwMy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYXJ0aXN0L0FydGlzdExpbmsuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYXJ0aXN0L0FydGlzdExpc3Rpbmcuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgZXhwb3J0IGxldCBhcnRpc3Q7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIGEge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZ3JpZC1hcmVhOiBhcnRpc3Q7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAvKiBhICsgYTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCIsIFwiO1xuICAgIH0gKi9cblxuICAgIGE6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG48L3N0eWxlPlxuXG48YSBocmVmPVwiL2FydGlzdHMve2FydGlzdC5pZH1cIj57YXJ0aXN0Lm5hbWV9PC9hPlxuIiwiPHNjcmlwdD5cbiAgICBleHBvcnQgbGV0IGFydGlzdHM7XG5cbiAgICBpbXBvcnQgQXJ0aXN0TGluayBmcm9tIFwiLi9BcnRpc3RMaW5rLnN2ZWx0ZVwiO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICBwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuPC9zdHlsZT5cblxuPHAgY2xhc3M9XCJ0ZXh0LW5vLW92ZXJmbG93XCI+XG4gICAgeyNlYWNoIGFydGlzdHMgYXMgYXJ0aXN0LCBpfVxuICAgICAgICA8QXJ0aXN0TGluayB7YXJ0aXN0fSAvPlxuICAgICAgICB7aSA8IGFydGlzdHMubGVuZ3RoIC0gMSA/ICcvICcgOiAnJ31cbiAgICB7L2VhY2h9XG48L3A+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7MEJBd0JnQyxHQUFNLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OytEQUF4QixHQUFNLElBQUMsRUFBRTs7Ozs7Ozs7O2lFQUFJLEdBQU0sSUFBQyxJQUFJOzt5RkFBeEIsR0FBTSxJQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BdkJiLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkNjWixHQUFDLGtCQUFHLEdBQU8sSUFBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEVBQWxDLEdBQUMsa0JBQUcsR0FBTyxJQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUZoQyxHQUFPOzs7O2dDQUFaLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUFDLEdBQU87Ozs7K0JBQVosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFBSixNQUFJOzs7Ozs7Ozs7O2tDQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQVpLLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
