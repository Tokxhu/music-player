import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, F as onMount, e as element, l as space, t as text, m as create_component, c as claim_element, a as children, f as detach_dev, o as claim_space, b as claim_text, p as claim_component, q as attr_dev, g as add_location, G as set_style, h as insert_dev, j as append_dev, r as mount_component, u as set_data_dev, w as transition_in, x as transition_out, y as destroy_component, H as binding_callbacks, k as globals, I as add_render_callback, B as validate_each_argument, J as validate_each_keys, K as empty, C as group_outros, L as update_keyed_each, D as check_outros, n as noop, M as add_resize_listener, N as listen_dev, O as outro_and_destroy_block } from './client.50193ac3.js';
import { A as ArtistListing } from './ArtistListing.a2e50dd8.js';

/* src/components/item/ItemMedium.svelte generated by Svelte v3.23.0 */
const file = "src/components/item/ItemMedium.svelte";

function create_fragment(ctx) {
	let div;
	let a0;
	let img;
	let img_src_value;
	let img_alt_value;
	let a0_href_value;
	let t0;
	let a1;
	let t1_value = /*info*/ ctx[0].name + "";
	let t1;
	let a1_href_value;
	let t2;
	let current;

	const artistlisting = new ArtistListing({
			props: { artists: /*info*/ ctx[0].artists },
			$$inline: true
		});

	const block = {
		c: function create() {
			div = element("div");
			a0 = element("a");
			img = element("img");
			t0 = space();
			a1 = element("a");
			t1 = text(t1_value);
			t2 = space();
			create_component(artistlisting.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, id: true, style: true });
			var div_nodes = children(div);
			a0 = claim_element(div_nodes, "A", { class: true, href: true });
			var a0_nodes = children(a0);
			img = claim_element(a0_nodes, "IMG", { class: true, src: true, alt: true });
			a0_nodes.forEach(detach_dev);
			t0 = claim_space(div_nodes);
			a1 = claim_element(div_nodes, "A", { class: true, href: true });
			var a1_nodes = children(a1);
			t1 = claim_text(a1_nodes, t1_value);
			a1_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);
			claim_component(artistlisting.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "class", "item-cover svelte-1k0avzo");

			if (img.src !== (img_src_value = /*type*/ ctx[2] == "tracks"
			? /*info*/ ctx[0].album.images[1].url
			: /*info*/ ctx[0].images[1].url)) attr_dev(img, "src", img_src_value);

			attr_dev(img, "alt", img_alt_value = /*info*/ ctx[0].id);
			add_location(img, file, 66, 8, 1621);
			attr_dev(a0, "class", "item-cover-container svelte-1k0avzo");

			attr_dev(a0, "href", a0_href_value = "/albums/" + (/*type*/ ctx[2] == "tracks"
			? /*info*/ ctx[0].album.id
			: /*info*/ ctx[0].id));

			add_location(a0, file, 63, 4, 1504);
			attr_dev(a1, "class", "name text-no-overflow svelte-1k0avzo");

			attr_dev(a1, "href", a1_href_value = "/albums/" + (/*type*/ ctx[2] == "tracks"
			? /*info*/ ctx[0].album.id
			: /*info*/ ctx[0].id));

			add_location(a1, file, 71, 4, 1782);
			attr_dev(div, "class", "item svelte-1k0avzo");
			attr_dev(div, "id", /*key*/ ctx[3]);
			set_style(div, "--width", /*width*/ ctx[4] + "px");
			set_style(div, "--margin", /*marginLeft*/ ctx[1] + "px");
			add_location(div, file, 58, 0, 1384);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, a0);
			append_dev(a0, img);
			append_dev(div, t0);
			append_dev(div, a1);
			append_dev(a1, t1);
			append_dev(div, t2);
			mount_component(artistlisting, div, null);
			/*div_binding*/ ctx[6](div);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*type, info*/ 5 && img.src !== (img_src_value = /*type*/ ctx[2] == "tracks"
			? /*info*/ ctx[0].album.images[1].url
			: /*info*/ ctx[0].images[1].url)) {
				attr_dev(img, "src", img_src_value);
			}

			if (!current || dirty & /*info*/ 1 && img_alt_value !== (img_alt_value = /*info*/ ctx[0].id)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (!current || dirty & /*type, info*/ 5 && a0_href_value !== (a0_href_value = "/albums/" + (/*type*/ ctx[2] == "tracks"
			? /*info*/ ctx[0].album.id
			: /*info*/ ctx[0].id))) {
				attr_dev(a0, "href", a0_href_value);
			}

			if ((!current || dirty & /*info*/ 1) && t1_value !== (t1_value = /*info*/ ctx[0].name + "")) set_data_dev(t1, t1_value);

			if (!current || dirty & /*type, info*/ 5 && a1_href_value !== (a1_href_value = "/albums/" + (/*type*/ ctx[2] == "tracks"
			? /*info*/ ctx[0].album.id
			: /*info*/ ctx[0].id))) {
				attr_dev(a1, "href", a1_href_value);
			}

			const artistlisting_changes = {};
			if (dirty & /*info*/ 1) artistlisting_changes.artists = /*info*/ ctx[0].artists;
			artistlisting.$set(artistlisting_changes);

			if (!current || dirty & /*key*/ 8) {
				attr_dev(div, "id", /*key*/ ctx[3]);
			}

			if (!current || dirty & /*width*/ 16) {
				set_style(div, "--width", /*width*/ ctx[4] + "px");
			}

			if (!current || dirty & /*marginLeft*/ 2) {
				set_style(div, "--margin", /*marginLeft*/ ctx[1] + "px");
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(artistlisting.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(artistlisting.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(artistlisting);
			/*div_binding*/ ctx[6](null);
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
	let { info } = $$props;
	let { marginLeft } = $$props;
	let { type } = $$props;
	let { key } = $$props;
	let { width = 256 } = $$props;
	let album;
	const writable_props = ["info", "marginLeft", "type", "key", "width"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ItemMedium> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("ItemMedium", $$slots, []);

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(5, album = $$value);
		});
	}

	$$self.$set = $$props => {
		if ("info" in $$props) $$invalidate(0, info = $$props.info);
		if ("marginLeft" in $$props) $$invalidate(1, marginLeft = $$props.marginLeft);
		if ("type" in $$props) $$invalidate(2, type = $$props.type);
		if ("key" in $$props) $$invalidate(3, key = $$props.key);
		if ("width" in $$props) $$invalidate(4, width = $$props.width);
	};

	$$self.$capture_state = () => ({
		info,
		marginLeft,
		type,
		key,
		width,
		onMount,
		ArtistListing,
		album
	});

	$$self.$inject_state = $$props => {
		if ("info" in $$props) $$invalidate(0, info = $$props.info);
		if ("marginLeft" in $$props) $$invalidate(1, marginLeft = $$props.marginLeft);
		if ("type" in $$props) $$invalidate(2, type = $$props.type);
		if ("key" in $$props) $$invalidate(3, key = $$props.key);
		if ("width" in $$props) $$invalidate(4, width = $$props.width);
		if ("album" in $$props) $$invalidate(5, album = $$props.album);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [info, marginLeft, type, key, width, album, div_binding];
}

class ItemMedium extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			info: 0,
			marginLeft: 1,
			type: 2,
			key: 3,
			width: 4
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ItemMedium",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*info*/ ctx[0] === undefined && !("info" in props)) {
			console.warn("<ItemMedium> was created without expected prop 'info'");
		}

		if (/*marginLeft*/ ctx[1] === undefined && !("marginLeft" in props)) {
			console.warn("<ItemMedium> was created without expected prop 'marginLeft'");
		}

		if (/*type*/ ctx[2] === undefined && !("type" in props)) {
			console.warn("<ItemMedium> was created without expected prop 'type'");
		}

		if (/*key*/ ctx[3] === undefined && !("key" in props)) {
			console.warn("<ItemMedium> was created without expected prop 'key'");
		}
	}

	get info() {
		throw new Error("<ItemMedium>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set info(value) {
		throw new Error("<ItemMedium>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get marginLeft() {
		throw new Error("<ItemMedium>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set marginLeft(value) {
		throw new Error("<ItemMedium>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get type() {
		throw new Error("<ItemMedium>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set type(value) {
		throw new Error("<ItemMedium>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get key() {
		throw new Error("<ItemMedium>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set key(value) {
		throw new Error("<ItemMedium>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get width() {
		throw new Error("<ItemMedium>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set width(value) {
		throw new Error("<ItemMedium>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/Showcase.svelte generated by Svelte v3.23.0 */

const { console: console_1 } = globals;
const file$1 = "src/components/Showcase.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[17] = list[i];
	child_ctx[19] = i;
	return child_ctx;
}

// (98:4) {#if marginLeft}
function create_if_block_1(ctx) {
	let each_blocks = [];
	let each_1_lookup = new Map();
	let each_1_anchor;
	let current;
	let each_value = /*items*/ ctx[0];
	validate_each_argument(each_value);
	const get_key = ctx => /*item*/ ctx[17].id;
	validate_each_keys(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*vwidth, items, wrap, marginLeft, type*/ 3085) {
				const each_value = /*items*/ ctx[0];
				validate_each_argument(each_value);
				group_outros();
				validate_each_keys(ctx, each_value, get_each_context, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
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
			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d(detaching);
			}

			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(98:4) {#if marginLeft}",
		ctx
	});

	return block;
}

// (99:8) {#each items as item, i (item.id)}
function create_each_block(key_1, ctx) {
	let first;
	let current;

	const itemmedium = new ItemMedium({
			props: {
				width: /*vwidth*/ ctx[11],
				key: /*i*/ ctx[19] + 1,
				marginLeft: /*wrap*/ ctx[3] ? /*marginLeft*/ ctx[10] : 32,
				info: /*item*/ ctx[17],
				type: /*type*/ ctx[2]
			},
			$$inline: true
		});

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			first = empty();
			create_component(itemmedium.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			first = empty();
			claim_component(itemmedium.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			this.first = first;
		},
		m: function mount(target, anchor) {
			insert_dev(target, first, anchor);
			mount_component(itemmedium, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const itemmedium_changes = {};
			if (dirty & /*items*/ 1) itemmedium_changes.key = /*i*/ ctx[19] + 1;
			if (dirty & /*wrap, marginLeft*/ 1032) itemmedium_changes.marginLeft = /*wrap*/ ctx[3] ? /*marginLeft*/ ctx[10] : 32;
			if (dirty & /*items*/ 1) itemmedium_changes.info = /*item*/ ctx[17];
			if (dirty & /*type*/ 4) itemmedium_changes.type = /*type*/ ctx[2];
			itemmedium.$set(itemmedium_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(itemmedium.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(itemmedium.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(first);
			destroy_component(itemmedium, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(99:8) {#each items as item, i (item.id)}",
		ctx
	});

	return block;
}

// (109:4) {#if observerOptions != null}
function create_if_block(ctx) {
	let div;

	const block = {
		c: function create() {
			div = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { id: true, class: true });
			children(div).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "id", "sentinel");
			attr_dev(div, "class", "svelte-10bi96y");
			add_location(div, file$1, 109, 8, 3128);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			/*div_binding*/ ctx[14](div);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			/*div_binding*/ ctx[14](null);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(109:4) {#if observerOptions != null}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let h1;
	let t0;
	let t1;
	let div;
	let t2;
	let div_resize_listener;
	let current;
	let mounted;
	let dispose;
	add_render_callback(/*onwindowresize*/ ctx[13]);
	let if_block0 = /*marginLeft*/ ctx[10] && create_if_block_1(ctx);
	let if_block1 = /*observerOptions*/ ctx[4] != null && create_if_block(ctx);

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text(/*title*/ ctx[1]);
			t1 = space();
			div = element("div");
			if (if_block0) if_block0.c();
			t2 = space();
			if (if_block1) if_block1.c();
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, /*title*/ ctx[1]);
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true, style: true });
			var div_nodes = children(div);
			if (if_block0) if_block0.l(div_nodes);
			t2 = claim_space(div_nodes);
			if (if_block1) if_block1.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-10bi96y");
			add_location(h1, file$1, 91, 0, 2554);
			attr_dev(div, "class", "items svelte-10bi96y");
			set_style(div, "flex-wrap", /*wrap*/ ctx[3] ? "wrap" : "no-wrap");
			set_style(div, "--margin", /*wrap*/ ctx[3] ? /*marginLeft*/ ctx[10] : 32);
			add_render_callback(() => /*div_elementresize_handler*/ ctx[15].call(div));
			add_location(div, file$1, 92, 0, 2571);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, div, anchor);
			if (if_block0) if_block0.m(div, null);
			append_dev(div, t2);
			if (if_block1) if_block1.m(div, null);
			div_resize_listener = add_resize_listener(div, /*div_elementresize_handler*/ ctx[15].bind(div));
			/*div_binding_1*/ ctx[16](div);
			current = true;

			if (!mounted) {
				dispose = listen_dev(window, "resize", /*onwindowresize*/ ctx[13]);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*title*/ 2) set_data_dev(t0, /*title*/ ctx[1]);

			if (/*marginLeft*/ ctx[10]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*marginLeft*/ 1024) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(div, t2);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*observerOptions*/ ctx[4] != null) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(div, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (!current || dirty & /*wrap*/ 8) {
				set_style(div, "flex-wrap", /*wrap*/ ctx[3] ? "wrap" : "no-wrap");
			}

			if (!current || dirty & /*wrap, marginLeft*/ 1032) {
				set_style(div, "--margin", /*wrap*/ ctx[3] ? /*marginLeft*/ ctx[10] : 32);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block0);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			div_resize_listener();
			/*div_binding_1*/ ctx[16](null);
			mounted = false;
			dispose();
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
	let { items = [] } = $$props;
	let { title } = $$props;
	let { type } = $$props;
	let { wrap = true } = $$props;
	let { observerOptions } = $$props;
	let clientWidth, container, sentinel;
	let innerWidth, innerHeight, marginLeft;
	let minMarginLeft = 32;
	let vwidth = 16 * 12;

	onMount(() => {
		if (observerOptions == null) return;
		let token = document.cookie.split(";").filter(c => c.startsWith("token"))[0].split("=")[1];

		const observer = new IntersectionObserver(entries => {
				if (entries.some(entry => entry.intersectionRatio > 0)) {
					getNextAlbums();
				}
			},
		{ rootMargin: "100%", threshold: 0 });

		let getNextAlbums = async () => {
			try {
				console.log(items.length);
				let resp = await fetch(`${observerOptions.uri}&offset=${items.length}`, { credentials: "same-origin" });
				let json = await resp.json();
				if (type == "albums") $$invalidate(0, items = items.concat(json.items.map(i => i.album))); else $$invalidate(0, items = items.concat(json.items.map(i => i.track)));

				if (json.limit + json.offset >= json.total) {
					console.log("Removed observer");
					observer.unobserve(sentinel);
				}
			} catch(err) {
				console.error("It died lmao");
				console.error(err);
			}
		};

		observer.observe(sentinel);
	});

	const writable_props = ["items", "title", "type", "wrap", "observerOptions"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Showcase> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Showcase", $$slots, []);

	function onwindowresize() {
		$$invalidate(8, innerWidth = window.innerWidth);
		$$invalidate(9, innerHeight = window.innerHeight);
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(7, sentinel = $$value);
		});
	}

	function div_elementresize_handler() {
		clientWidth = this.clientWidth;
		$$invalidate(5, clientWidth);
	}

	function div_binding_1($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(6, container = $$value);
		});
	}

	$$self.$set = $$props => {
		if ("items" in $$props) $$invalidate(0, items = $$props.items);
		if ("title" in $$props) $$invalidate(1, title = $$props.title);
		if ("type" in $$props) $$invalidate(2, type = $$props.type);
		if ("wrap" in $$props) $$invalidate(3, wrap = $$props.wrap);
		if ("observerOptions" in $$props) $$invalidate(4, observerOptions = $$props.observerOptions);
	};

	$$self.$capture_state = () => ({
		items,
		title,
		type,
		wrap,
		observerOptions,
		ItemMedium,
		onMount,
		clientWidth,
		container,
		sentinel,
		innerWidth,
		innerHeight,
		marginLeft,
		minMarginLeft,
		vwidth
	});

	$$self.$inject_state = $$props => {
		if ("items" in $$props) $$invalidate(0, items = $$props.items);
		if ("title" in $$props) $$invalidate(1, title = $$props.title);
		if ("type" in $$props) $$invalidate(2, type = $$props.type);
		if ("wrap" in $$props) $$invalidate(3, wrap = $$props.wrap);
		if ("observerOptions" in $$props) $$invalidate(4, observerOptions = $$props.observerOptions);
		if ("clientWidth" in $$props) $$invalidate(5, clientWidth = $$props.clientWidth);
		if ("container" in $$props) $$invalidate(6, container = $$props.container);
		if ("sentinel" in $$props) $$invalidate(7, sentinel = $$props.sentinel);
		if ("innerWidth" in $$props) $$invalidate(8, innerWidth = $$props.innerWidth);
		if ("innerHeight" in $$props) $$invalidate(9, innerHeight = $$props.innerHeight);
		if ("marginLeft" in $$props) $$invalidate(10, marginLeft = $$props.marginLeft);
		if ("minMarginLeft" in $$props) $$invalidate(12, minMarginLeft = $$props.minMarginLeft);
		if ("vwidth" in $$props) $$invalidate(11, vwidth = $$props.vwidth);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*clientWidth*/ 32) {
			 {
				let amountPerRow = Math.floor(clientWidth / (vwidth + minMarginLeft));
				$$invalidate(10, marginLeft = (clientWidth / amountPerRow - vwidth) * ((amountPerRow - 1) / amountPerRow));
			}
		}
	};

	return [
		items,
		title,
		type,
		wrap,
		observerOptions,
		clientWidth,
		container,
		sentinel,
		innerWidth,
		innerHeight,
		marginLeft,
		vwidth,
		minMarginLeft,
		onwindowresize,
		div_binding,
		div_elementresize_handler,
		div_binding_1
	];
}

class Showcase extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
			items: 0,
			title: 1,
			type: 2,
			wrap: 3,
			observerOptions: 4
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Showcase",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*title*/ ctx[1] === undefined && !("title" in props)) {
			console_1.warn("<Showcase> was created without expected prop 'title'");
		}

		if (/*type*/ ctx[2] === undefined && !("type" in props)) {
			console_1.warn("<Showcase> was created without expected prop 'type'");
		}

		if (/*observerOptions*/ ctx[4] === undefined && !("observerOptions" in props)) {
			console_1.warn("<Showcase> was created without expected prop 'observerOptions'");
		}
	}

	get items() {
		throw new Error("<Showcase>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set items(value) {
		throw new Error("<Showcase>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get title() {
		throw new Error("<Showcase>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set title(value) {
		throw new Error("<Showcase>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get type() {
		throw new Error("<Showcase>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set type(value) {
		throw new Error("<Showcase>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get wrap() {
		throw new Error("<Showcase>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set wrap(value) {
		throw new Error("<Showcase>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get observerOptions() {
		throw new Error("<Showcase>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set observerOptions(value) {
		throw new Error("<Showcase>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Showcase as S };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvd2Nhc2UuNGMzOTc4OTcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2l0ZW0vSXRlbU1lZGl1bS5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TaG93Y2FzZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBleHBvcnQgbGV0IGluZm87XG4gICAgZXhwb3J0IGxldCBtYXJnaW5MZWZ0O1xuICAgIGV4cG9ydCBsZXQgdHlwZTtcbiAgICBleHBvcnQgbGV0IGtleTtcbiAgICBleHBvcnQgbGV0IHdpZHRoID0gMjU2O1xuXG4gICAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcbiAgICBpbXBvcnQgQXJ0aXN0TGlzdGluZyBmcm9tIFwiLi4vYXJ0aXN0L0FydGlzdExpc3Rpbmcuc3ZlbHRlXCI7XG4gICAgbGV0IGFsYnVtO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICAuaXRlbSB7XG4gICAgICAgIHdpZHRoOiB2YXIoLS13aWR0aCk7XG4gICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS13aWR0aCkgKyA2cmVtKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luKTtcbiAgICB9XG5cbiAgICAuaXRlbS1jb3Zlci1jb250YWluZXIsXG4gICAgLml0ZW0tY292ZXIge1xuICAgICAgICB3aWR0aDogdmFyKC0td2lkdGgpO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLXdpZHRoKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzO1xuICAgIH1cbiAgICAuaXRlbS1jb3Zlci1jb250YWluZXI6aG92ZXIge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMzJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMzJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDMycHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB9XG4gICAgLml0ZW0tY292ZXIge1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyNiwgMTI2LCAxMjYpO1xuICAgIH1cbiAgICAvKiAubmFtZSB7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH0gKi9cbiAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIC5uYW1lOmhvdmVyLFxuICAgIC5pdGVtLWNvdmVyLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIDpsYXN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLW1hcmdpbik7XG4gICAgfVxuPC9zdHlsZT5cblxuPGRpdlxuICAgIGJpbmQ6dGhpcz17YWxidW19XG4gICAgY2xhc3M9XCJpdGVtXCJcbiAgICBpZD17a2V5fVxuICAgIHN0eWxlPVwiIC0td2lkdGg6e3dpZHRofXB4OyAtLW1hcmdpbjoge21hcmdpbkxlZnR9cHg7XCI+XG4gICAgPGFcbiAgICAgICAgY2xhc3M9XCJpdGVtLWNvdmVyLWNvbnRhaW5lclwiXG4gICAgICAgIGhyZWY9XCIvYWxidW1zL3t0eXBlID09ICd0cmFja3MnID8gaW5mby5hbGJ1bS5pZCA6IGluZm8uaWR9XCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzPVwiaXRlbS1jb3ZlclwiXG4gICAgICAgICAgICBzcmM9e3R5cGUgPT0gJ3RyYWNrcycgPyBpbmZvLmFsYnVtLmltYWdlc1sxXS51cmwgOiBpbmZvLmltYWdlc1sxXS51cmx9XG4gICAgICAgICAgICBhbHQ9e2luZm8uaWR9IC8+XG4gICAgPC9hPlxuICAgIDxhXG4gICAgICAgIGNsYXNzPVwibmFtZSB0ZXh0LW5vLW92ZXJmbG93XCJcbiAgICAgICAgaHJlZj1cIi9hbGJ1bXMve3R5cGUgPT0gJ3RyYWNrcycgPyBpbmZvLmFsYnVtLmlkIDogaW5mby5pZH1cIj5cbiAgICAgICAge2luZm8ubmFtZX1cbiAgICA8L2E+XG4gICAgPEFydGlzdExpc3RpbmcgYXJ0aXN0cz17aW5mby5hcnRpc3RzfSAvPlxuPC9kaXY+XG4iLCI8c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgaXRlbXMgPSBbXTtcbiAgICBleHBvcnQgbGV0IHRpdGxlO1xuICAgIGV4cG9ydCBsZXQgdHlwZTtcbiAgICBleHBvcnQgbGV0IHdyYXAgPSB0cnVlO1xuICAgIGV4cG9ydCBsZXQgb2JzZXJ2ZXJPcHRpb25zO1xuXG4gICAgaW1wb3J0IEl0ZW1NZWRpdW0gZnJvbSBcIi4vaXRlbS9JdGVtTWVkaXVtLnN2ZWx0ZVwiO1xuICAgIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG4gICAgbGV0IGNsaWVudFdpZHRoLCBjb250YWluZXIsIHNlbnRpbmVsO1xuICAgIGxldCBpbm5lcldpZHRoLCBpbm5lckhlaWdodCwgbWFyZ2luTGVmdDtcbiAgICBsZXQgbWluTWFyZ2luTGVmdCA9IDMyO1xuXG4gICAgbGV0IHZ3aWR0aCA9IDE2ICogMTI7XG5cbiAgICAkOiB7XG4gICAgICAgIGxldCBhbW91bnRQZXJSb3cgPSBNYXRoLmZsb29yKGNsaWVudFdpZHRoIC8gKHZ3aWR0aCArIG1pbk1hcmdpbkxlZnQpKTtcbiAgICAgICAgbWFyZ2luTGVmdCA9XG4gICAgICAgICAgICAoY2xpZW50V2lkdGggLyBhbW91bnRQZXJSb3cgLSB2d2lkdGgpICpcbiAgICAgICAgICAgICgoYW1vdW50UGVyUm93IC0gMSkgLyBhbW91bnRQZXJSb3cpO1xuICAgIH1cblxuICAgIG9uTW91bnQoKCkgPT4ge1xuICAgICAgICBpZiAob2JzZXJ2ZXJPcHRpb25zID09IG51bGwpIHJldHVybjtcbiAgICAgICAgbGV0IHRva2VuID0gZG9jdW1lbnQuY29va2llXG4gICAgICAgICAgICAuc3BsaXQoXCI7XCIpXG4gICAgICAgICAgICAuZmlsdGVyKGMgPT4gYy5zdGFydHNXaXRoKFwidG9rZW5cIikpWzBdXG4gICAgICAgICAgICAuc3BsaXQoXCI9XCIpWzFdO1xuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgICAgICAgZW50cmllcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJpZXMuc29tZShlbnRyeSA9PiBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldE5leHRBbGJ1bXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW46IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMC4wXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGxldCBnZXROZXh0QWxidW1zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGxldCByZXNwID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICAgICAgICAgIGAke29ic2VydmVyT3B0aW9ucy51cml9Jm9mZnNldD0ke2l0ZW1zLmxlbmd0aH1gLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxldCBqc29uID0gYXdhaXQgcmVzcC5qc29uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJhbGJ1bXNcIilcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSBpdGVtcy5jb25jYXQoanNvbi5pdGVtcy5tYXAoaSA9PiBpLmFsYnVtKSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpdGVtcyA9IGl0ZW1zLmNvbmNhdChqc29uLml0ZW1zLm1hcChpID0+IGkudHJhY2spKTtcbiAgICAgICAgICAgICAgICBpZiAoanNvbi5saW1pdCArIGpzb24ub2Zmc2V0ID49IGpzb24udG90YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZW1vdmVkIG9ic2VydmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoc2VudGluZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJdCBkaWVkIGxtYW9cIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNlbnRpbmVsKTtcbiAgICB9KTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgaDEge1xuICAgICAgICAvKiBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7ICovXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgICAuaXRlbXMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICAuaXRlbXMgPiA6bnRoLWxhc3QtY2hpbGQoMikge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLW1hcmdpbik7XG4gICAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTp3aW5kb3cgYmluZDppbm5lcldpZHRoIGJpbmQ6aW5uZXJIZWlnaHQgLz5cblxuPGgxPnt0aXRsZX08L2gxPlxuPGRpdlxuICAgIGNsYXNzPVwiaXRlbXNcIlxuICAgIGJpbmQ6Y2xpZW50V2lkdGhcbiAgICBiaW5kOnRoaXM9e2NvbnRhaW5lcn1cbiAgICBzdHlsZT1cImZsZXgtd3JhcDoge3dyYXAgPyAnd3JhcCcgOiAnbm8td3JhcCd9OyAtLW1hcmdpbjoge3dyYXAgPyBtYXJnaW5MZWZ0IDogMzJ9XCI+XG4gICAgeyNpZiBtYXJnaW5MZWZ0fVxuICAgICAgICB7I2VhY2ggaXRlbXMgYXMgaXRlbSwgaSAoaXRlbS5pZCl9XG4gICAgICAgICAgICA8IS0tIFRPRE8gb25seSByZW5kZXIgbmV3IGl0ZW1zICwgdGhpbmsgdGhlIGtleWVkIHRoaW5nIGRpZCBpdC0tPlxuICAgICAgICAgICAgPEl0ZW1NZWRpdW1cbiAgICAgICAgICAgICAgICB3aWR0aD17dndpZHRofVxuICAgICAgICAgICAgICAgIGtleT17aSArIDF9XG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdD17d3JhcCA/IG1hcmdpbkxlZnQgOiAzMn1cbiAgICAgICAgICAgICAgICBpbmZvPXtpdGVtfVxuICAgICAgICAgICAgICAgIHt0eXBlfSAvPlxuICAgICAgICB7L2VhY2h9XG4gICAgey9pZn1cbiAgICB7I2lmIG9ic2VydmVyT3B0aW9ucyAhPSBudWxsfVxuICAgICAgICA8ZGl2IGlkPVwic2VudGluZWxcIiBiaW5kOnRoaXM9e3NlbnRpbmVsfSAvPlxuICAgIHsvaWZ9XG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7eUJBMEVTLEdBQUksSUFBQyxJQUFJOzs7Ozs7OzhCQUVVLEdBQUksSUFBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkNBUnZCLEdBQUksT0FBSSxRQUFRO2NBQUcsR0FBSSxJQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUc7Y0FBRyxHQUFJLElBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHOztpREFDaEUsR0FBSSxJQUFDLEVBQUU7Ozs7K0RBSkQsR0FBSSxPQUFJLFFBQVE7Y0FBRyxHQUFJLElBQUMsS0FBSyxDQUFDLEVBQUU7Y0FBRyxHQUFJLElBQUMsRUFBRTs7Ozs7K0RBUTFDLEdBQUksT0FBSSxRQUFRO2NBQUcsR0FBSSxJQUFDLEtBQUssQ0FBQyxFQUFFO2NBQUcsR0FBSSxJQUFDLEVBQUU7Ozs7K0JBWnpELEdBQUc7dUNBQ1UsR0FBSzs2Q0FBZ0IsR0FBVTs7Ozs7Ozs7Ozs7Ozs7OztxRkFNbkMsR0FBSSxPQUFJLFFBQVE7Y0FBRyxHQUFJLElBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRztjQUFHLEdBQUksSUFBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUc7Ozs7cUZBQ2hFLEdBQUksSUFBQyxFQUFFOzs7O3lHQUpELEdBQUksT0FBSSxRQUFRO2NBQUcsR0FBSSxJQUFDLEtBQUssQ0FBQyxFQUFFO2NBQUcsR0FBSSxJQUFDLEVBQUU7Ozs7NkVBU3hELEdBQUksSUFBQyxJQUFJOzt5R0FESyxHQUFJLE9BQUksUUFBUTtjQUFHLEdBQUksSUFBQyxL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
