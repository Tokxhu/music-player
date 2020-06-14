import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, F as onMount, e as element, l as space, t as text, m as create_component, c as claim_element, a as children, f as detach_dev, o as claim_space, b as claim_text, p as claim_component, q as attr_dev, g as add_location, G as set_style, h as insert_dev, j as append_dev, r as mount_component, u as set_data_dev, w as transition_in, x as transition_out, y as destroy_component, H as binding_callbacks, k as globals, I as add_render_callback, B as validate_each_argument, J as validate_each_keys, K as empty, C as group_outros, L as update_keyed_each, D as check_outros, M as add_resize_listener, N as listen_dev, O as outro_and_destroy_block } from './client.6bd5ce80.js';
import { A as ArtistListing } from './ArtistListing.18e8f2d2.js';

/* src/components/item/ItemMedium.svelte generated by Svelte v3.23.0 */
const file = "src/components/item/ItemMedium.svelte";

function create_fragment(ctx) {
	let div1;
	let a0;
	let div0;
	let t0;
	let img;
	let img_src_value;
	let img_alt_value;
	let a0_href_value;
	let t1;
	let a1;
	let b;
	let t2_value = /*info*/ ctx[0].name + "";
	let t2;
	let a1_href_value;
	let t3;
	let current;

	const artistlisting = new ArtistListing({
			props: { artists: /*info*/ ctx[0].artists },
			$$inline: true
		});

	const block = {
		c: function create() {
			div1 = element("div");
			a0 = element("a");
			div0 = element("div");
			t0 = space();
			img = element("img");
			t1 = space();
			a1 = element("a");
			b = element("b");
			t2 = text(t2_value);
			t3 = space();
			create_component(artistlisting.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true, id: true, style: true });
			var div1_nodes = children(div1);
			a0 = claim_element(div1_nodes, "A", { class: true, href: true });
			var a0_nodes = children(a0);
			div0 = claim_element(a0_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			t0 = claim_space(a0_nodes);
			img = claim_element(a0_nodes, "IMG", { class: true, src: true, alt: true });
			a0_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			a1 = claim_element(div1_nodes, "A", { class: true, href: true });
			var a1_nodes = children(a1);
			b = claim_element(a1_nodes, "B", { class: true });
			var b_nodes = children(b);
			t2 = claim_text(b_nodes, t2_value);
			b_nodes.forEach(detach_dev);
			a1_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);
			claim_component(artistlisting.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "gray-background svelte-10vlhgr");
			add_location(div0, file, 70, 8, 1631);
			attr_dev(img, "class", "item-cover svelte-10vlhgr");

			if (img.src !== (img_src_value = /*type*/ ctx[2] == "tracks"
			? /*info*/ ctx[0].album.images[1].url
			: /*info*/ ctx[0].images[1].url)) attr_dev(img, "src", img_src_value);

			attr_dev(img, "alt", img_alt_value = /*info*/ ctx[0].id);
			add_location(img, file, 71, 8, 1671);
			attr_dev(a0, "class", "item-cover-container svelte-10vlhgr");

			attr_dev(a0, "href", a0_href_value = "/albums/" + (/*type*/ ctx[2] == "tracks"
			? /*info*/ ctx[0].album.id
			: /*info*/ ctx[0].id));

			add_location(a0, file, 67, 4, 1514);
			attr_dev(b, "class", "svelte-10vlhgr");
			add_location(b, file, 79, 8, 1950);
			attr_dev(a1, "class", "name text-no-overflow svelte-10vlhgr");

			attr_dev(a1, "href", a1_href_value = "/albums/" + (/*type*/ ctx[2] == "tracks"
			? /*info*/ ctx[0].album.id
			: /*info*/ ctx[0].id));

			add_location(a1, file, 76, 4, 1832);
			attr_dev(div1, "class", "item svelte-10vlhgr");
			attr_dev(div1, "id", /*key*/ ctx[3]);
			set_style(div1, "--width", /*width*/ ctx[4] + "px");
			set_style(div1, "--margin", /*marginLeft*/ ctx[1] + "px");
			add_location(div1, file, 62, 0, 1394);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, a0);
			append_dev(a0, div0);
			append_dev(a0, t0);
			append_dev(a0, img);
			append_dev(div1, t1);
			append_dev(div1, a1);
			append_dev(a1, b);
			append_dev(b, t2);
			append_dev(div1, t3);
			mount_component(artistlisting, div1, null);
			/*div1_binding*/ ctx[6](div1);
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

			if ((!current || dirty & /*info*/ 1) && t2_value !== (t2_value = /*info*/ ctx[0].name + "")) set_data_dev(t2, t2_value);

			if (!current || dirty & /*type, info*/ 5 && a1_href_value !== (a1_href_value = "/albums/" + (/*type*/ ctx[2] == "tracks"
			? /*info*/ ctx[0].album.id
			: /*info*/ ctx[0].id))) {
				attr_dev(a1, "href", a1_href_value);
			}

			const artistlisting_changes = {};
			if (dirty & /*info*/ 1) artistlisting_changes.artists = /*info*/ ctx[0].artists;
			artistlisting.$set(artistlisting_changes);

			if (!current || dirty & /*key*/ 8) {
				attr_dev(div1, "id", /*key*/ ctx[3]);
			}

			if (!current || dirty & /*width*/ 16) {
				set_style(div1, "--width", /*width*/ ctx[4] + "px");
			}

			if (!current || dirty & /*marginLeft*/ 2) {
				set_style(div1, "--margin", /*marginLeft*/ ctx[1] + "px");
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
			if (detaching) detach_dev(div1);
			destroy_component(artistlisting);
			/*div1_binding*/ ctx[6](null);
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

	function div1_binding($$value) {
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

	return [info, marginLeft, type, key, width, album, div1_binding];
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

// (102:4) {#if marginLeft}
function create_if_block(ctx) {
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
			if (dirty & /*vwidth, items, wrap, marginLeft, type*/ 1549) {
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
		id: create_if_block.name,
		type: "if",
		source: "(102:4) {#if marginLeft}",
		ctx
	});

	return block;
}

// (103:8) {#each items as item, i (item.id)}
function create_each_block(key_1, ctx) {
	let first;
	let current;

	const itemmedium = new ItemMedium({
			props: {
				width: /*vwidth*/ ctx[10],
				key: /*i*/ ctx[19] + 1,
				marginLeft: /*wrap*/ ctx[3] ? /*marginLeft*/ ctx[9] : 32,
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
			if (dirty & /*wrap, marginLeft*/ 520) itemmedium_changes.marginLeft = /*wrap*/ ctx[3] ? /*marginLeft*/ ctx[9] : 32;
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
		source: "(103:8) {#each items as item, i (item.id)}",
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
	let footer;
	let t3;
	let div_resize_listener;
	let current;
	let mounted;
	let dispose;
	add_render_callback(/*onwindowresize*/ ctx[13]);
	let if_block = /*marginLeft*/ ctx[9] && create_if_block(ctx);

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text(/*title*/ ctx[1]);
			t1 = space();
			div = element("div");
			if (if_block) if_block.c();
			t2 = space();
			footer = element("footer");
			t3 = text("this be da footah");
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
			if (if_block) if_block.l(div_nodes);
			t2 = claim_space(div_nodes);
			footer = claim_element(div_nodes, "FOOTER", { id: true, class: true });
			var footer_nodes = children(footer);
			t3 = claim_text(footer_nodes, "this be da footah");
			footer_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-rhnqca");
			add_location(h1, file$1, 95, 0, 2616);
			attr_dev(footer, "id", "sentinel");
			attr_dev(footer, "class", "svelte-rhnqca");
			add_location(footer, file$1, 112, 4, 3152);
			attr_dev(div, "class", "items svelte-rhnqca");
			set_style(div, "flex-wrap", /*wrap*/ ctx[3] ? "wrap" : "no-wrap");
			set_style(div, "--margin", /*wrap*/ ctx[3] ? /*marginLeft*/ ctx[9] : 32);
			add_render_callback(() => /*div_elementresize_handler*/ ctx[15].call(div));
			add_location(div, file$1, 96, 0, 2633);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, div, anchor);
			if (if_block) if_block.m(div, null);
			append_dev(div, t2);
			append_dev(div, footer);
			append_dev(footer, t3);
			/*footer_binding*/ ctx[14](footer);
			div_resize_listener = add_resize_listener(div, /*div_elementresize_handler*/ ctx[15].bind(div));
			/*div_binding*/ ctx[16](div);
			current = true;

			if (!mounted) {
				dispose = listen_dev(window, "resize", /*onwindowresize*/ ctx[13]);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*title*/ 2) set_data_dev(t0, /*title*/ ctx[1]);

			if (/*marginLeft*/ ctx[9]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*marginLeft*/ 512) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div, t2);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if (!current || dirty & /*wrap*/ 8) {
				set_style(div, "flex-wrap", /*wrap*/ ctx[3] ? "wrap" : "no-wrap");
			}

			if (!current || dirty & /*wrap, marginLeft*/ 520) {
				set_style(div, "--margin", /*wrap*/ ctx[3] ? /*marginLeft*/ ctx[9] : 32);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div);
			if (if_block) if_block.d();
			/*footer_binding*/ ctx[14](null);
			div_resize_listener();
			/*div_binding*/ ctx[16](null);
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
		{
				// rootMargin: "100%",
				threshold: 0
			});

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
		$$invalidate(7, innerWidth = window.innerWidth);
		$$invalidate(8, innerHeight = window.innerHeight);
	}

	function footer_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(6, sentinel = $$value);
		});
	}

	function div_elementresize_handler() {
		clientWidth = this.clientWidth;
		$$invalidate(4, clientWidth);
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(5, container = $$value);
		});
	}

	$$self.$set = $$props => {
		if ("items" in $$props) $$invalidate(0, items = $$props.items);
		if ("title" in $$props) $$invalidate(1, title = $$props.title);
		if ("type" in $$props) $$invalidate(2, type = $$props.type);
		if ("wrap" in $$props) $$invalidate(3, wrap = $$props.wrap);
		if ("observerOptions" in $$props) $$invalidate(11, observerOptions = $$props.observerOptions);
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
		if ("observerOptions" in $$props) $$invalidate(11, observerOptions = $$props.observerOptions);
		if ("clientWidth" in $$props) $$invalidate(4, clientWidth = $$props.clientWidth);
		if ("container" in $$props) $$invalidate(5, container = $$props.container);
		if ("sentinel" in $$props) $$invalidate(6, sentinel = $$props.sentinel);
		if ("innerWidth" in $$props) $$invalidate(7, innerWidth = $$props.innerWidth);
		if ("innerHeight" in $$props) $$invalidate(8, innerHeight = $$props.innerHeight);
		if ("marginLeft" in $$props) $$invalidate(9, marginLeft = $$props.marginLeft);
		if ("minMarginLeft" in $$props) $$invalidate(12, minMarginLeft = $$props.minMarginLeft);
		if ("vwidth" in $$props) $$invalidate(10, vwidth = $$props.vwidth);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*clientWidth*/ 16) {
			 {
				let amountPerRow = Math.floor(clientWidth / (vwidth + minMarginLeft));
				$$invalidate(9, marginLeft = (clientWidth / amountPerRow - vwidth) * ((amountPerRow - 1) / amountPerRow));
			}
		}
	};

	return [
		items,
		title,
		type,
		wrap,
		clientWidth,
		container,
		sentinel,
		innerWidth,
		innerHeight,
		marginLeft,
		vwidth,
		observerOptions,
		minMarginLeft,
		onwindowresize,
		footer_binding,
		div_elementresize_handler,
		div_binding
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
			observerOptions: 11
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

		if (/*observerOptions*/ ctx[11] === undefined && !("observerOptions" in props)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvd2Nhc2UuODJlYzYwMDguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2l0ZW0vSXRlbU1lZGl1bS5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TaG93Y2FzZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBleHBvcnQgbGV0IGluZm87XG4gICAgZXhwb3J0IGxldCBtYXJnaW5MZWZ0O1xuICAgIGV4cG9ydCBsZXQgdHlwZTtcbiAgICBleHBvcnQgbGV0IGtleTtcbiAgICBleHBvcnQgbGV0IHdpZHRoID0gMjU2O1xuXG4gICAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcbiAgICBpbXBvcnQgQXJ0aXN0TGlzdGluZyBmcm9tIFwiLi4vYXJ0aXN0L0FydGlzdExpc3Rpbmcuc3ZlbHRlXCI7XG4gICAgbGV0IGFsYnVtO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICAuaXRlbSB7XG4gICAgICAgIHdpZHRoOiB2YXIoLS13aWR0aCk7XG4gICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS13aWR0aCkgKyA2cmVtKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luKTtcbiAgICB9XG4gICAgLmdyYXktYmFja2dyb3VuZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDM7XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgIH1cbiAgICAuaXRlbS1jb3Zlci1jb250YWluZXI6aG92ZXIgLmdyYXktYmFja2dyb3VuZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB9XG4gICAgLml0ZW0tY292ZXItY29udGFpbmVyLFxuICAgIC5pdGVtLWNvdmVyIHtcbiAgICAgICAgd2lkdGg6IHZhcigtLXdpZHRoKTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS13aWR0aCk7XG4gICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xcztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAuaXRlbS1jb3ZlciB7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTI2LCAxMjYsIDEyNik7XG4gICAgfVxuICAgIC8qIC5uYW1lIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9ICovXG4gICAgLm5hbWU6aG92ZXIsXG4gICAgLml0ZW0tY292ZXItY29udGFpbmVyOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0tbWFyZ2luKTtcbiAgICB9XG48L3N0eWxlPlxuXG48ZGl2XG4gICAgYmluZDp0aGlzPXthbGJ1bX1cbiAgICBjbGFzcz1cIml0ZW1cIlxuICAgIGlkPXtrZXl9XG4gICAgc3R5bGU9XCIgLS13aWR0aDp7d2lkdGh9cHg7IC0tbWFyZ2luOiB7bWFyZ2luTGVmdH1weDtcIj5cbiAgICA8YVxuICAgICAgICBjbGFzcz1cIml0ZW0tY292ZXItY29udGFpbmVyXCJcbiAgICAgICAgaHJlZj1cIi9hbGJ1bXMve3R5cGUgPT0gJ3RyYWNrcycgPyBpbmZvLmFsYnVtLmlkIDogaW5mby5pZH1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyYXktYmFja2dyb3VuZFwiIC8+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzPVwiaXRlbS1jb3ZlclwiXG4gICAgICAgICAgICBzcmM9e3R5cGUgPT0gJ3RyYWNrcycgPyBpbmZvLmFsYnVtLmltYWdlc1sxXS51cmwgOiBpbmZvLmltYWdlc1sxXS51cmx9XG4gICAgICAgICAgICBhbHQ9e2luZm8uaWR9IC8+XG4gICAgPC9hPlxuICAgIDxhXG4gICAgICAgIGNsYXNzPVwibmFtZSB0ZXh0LW5vLW92ZXJmbG93XCJcbiAgICAgICAgaHJlZj1cIi9hbGJ1bXMve3R5cGUgPT0gJ3RyYWNrcycgPyBpbmZvLmFsYnVtLmlkIDogaW5mby5pZH1cIj5cbiAgICAgICAgPGI+e2luZm8ubmFtZX08L2I+XG4gICAgPC9hPlxuICAgIDxBcnRpc3RMaXN0aW5nIGFydGlzdHM9e2luZm8uYXJ0aXN0c30gLz5cbjwvZGl2PlxuIiwiPHNjcmlwdD5cbiAgICBleHBvcnQgbGV0IGl0ZW1zID0gW107XG4gICAgZXhwb3J0IGxldCB0aXRsZTtcbiAgICBleHBvcnQgbGV0IHR5cGU7XG4gICAgZXhwb3J0IGxldCB3cmFwID0gdHJ1ZTtcbiAgICBleHBvcnQgbGV0IG9ic2VydmVyT3B0aW9ucztcblxuICAgIGltcG9ydCBJdGVtTWVkaXVtIGZyb20gXCIuL2l0ZW0vSXRlbU1lZGl1bS5zdmVsdGVcIjtcbiAgICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiO1xuICAgIGxldCBjbGllbnRXaWR0aCwgY29udGFpbmVyLCBzZW50aW5lbDtcbiAgICBsZXQgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQsIG1hcmdpbkxlZnQ7XG4gICAgbGV0IG1pbk1hcmdpbkxlZnQgPSAzMjtcblxuICAgIGxldCB2d2lkdGggPSAxNiAqIDEyO1xuXG4gICAgJDoge1xuICAgICAgICBsZXQgYW1vdW50UGVyUm93ID0gTWF0aC5mbG9vcihjbGllbnRXaWR0aCAvICh2d2lkdGggKyBtaW5NYXJnaW5MZWZ0KSk7XG4gICAgICAgIG1hcmdpbkxlZnQgPVxuICAgICAgICAgICAgKGNsaWVudFdpZHRoIC8gYW1vdW50UGVyUm93IC0gdndpZHRoKSAqXG4gICAgICAgICAgICAoKGFtb3VudFBlclJvdyAtIDEpIC8gYW1vdW50UGVyUm93KTtcbiAgICB9XG5cbiAgICBvbk1vdW50KCgpID0+IHtcbiAgICAgICAgaWYgKG9ic2VydmVyT3B0aW9ucyA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LmNvb2tpZVxuICAgICAgICAgICAgLnNwbGl0KFwiO1wiKVxuICAgICAgICAgICAgLmZpbHRlcihjID0+IGMuc3RhcnRzV2l0aChcInRva2VuXCIpKVswXVxuICAgICAgICAgICAgLnNwbGl0KFwiPVwiKVsxXTtcblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgICAgICAgIGVudHJpZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyaWVzLnNvbWUoZW50cnkgPT4gZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSkge1xuICAgICAgICAgICAgICAgICAgICBnZXROZXh0QWxidW1zKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyByb290TWFyZ2luOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGdldE5leHRBbGJ1bXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW1zLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3AgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgICAgICAgICAgYCR7b2JzZXJ2ZXJPcHRpb25zLnVyaX0mb2Zmc2V0PSR7aXRlbXMubGVuZ3RofWAsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbGV0IGpzb24gPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PSBcImFsYnVtc1wiKVxuICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IGl0ZW1zLmNvbmNhdChqc29uLml0ZW1zLm1hcChpID0+IGkuYWxidW0pKTtcbiAgICAgICAgICAgICAgICBlbHNlIGl0ZW1zID0gaXRlbXMuY29uY2F0KGpzb24uaXRlbXMubWFwKGkgPT4gaS50cmFjaykpO1xuICAgICAgICAgICAgICAgIGlmIChqc29uLmxpbWl0ICsganNvbi5vZmZzZXQgPj0ganNvbi50b3RhbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlbW92ZWQgb2JzZXJ2ZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShzZW50aW5lbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkl0IGRpZWQgbG1hb1wiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2VudGluZWwpO1xuICAgIH0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICBoMSB7XG4gICAgICAgIC8qIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDsgKi9cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICAgIC5pdGVtcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgIC5pdGVtcyA+IDpudGgtbGFzdC1jaGlsZCgyKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0tbWFyZ2luKTtcbiAgICB9XG4gICAgZm9vdGVyIHtcbiAgICAgICAgaGVpZ2h0OiA4ZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6d2luZG93IGJpbmQ6aW5uZXJXaWR0aCBiaW5kOmlubmVySGVpZ2h0IC8+XG5cbjxoMT57dGl0bGV9PC9oMT5cbjxkaXZcbiAgICBjbGFzcz1cIml0ZW1zXCJcbiAgICBiaW5kOmNsaWVudFdpZHRoXG4gICAgYmluZDp0aGlzPXtjb250YWluZXJ9XG4gICAgc3R5bGU9XCJmbGV4LXdyYXA6IHt3cmFwID8gJ3dyYXAnIDogJ25vLXdyYXAnfTsgLS1tYXJnaW46IHt3cmFwID8gbWFyZ2luTGVmdCA6IDMyfVwiPlxuICAgIHsjaWYgbWFyZ2luTGVmdH1cbiAgICAgICAgeyNlYWNoIGl0ZW1zIGFzIGl0ZW0sIGkgKGl0ZW0uaWQpfVxuICAgICAgICAgICAgPCEtLSBUT0RPIG9ubHkgcmVuZGVyIG5ldyBpdGVtcyAsIHRoaW5rIHRoZSBrZXllZCB0aGluZyBkaWQgaXQtLT5cbiAgICAgICAgICAgIDxJdGVtTWVkaXVtXG4gICAgICAgICAgICAgICAgd2lkdGg9e3Z3aWR0aH1cbiAgICAgICAgICAgICAgICBrZXk9e2kgKyAxfVxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9e3dyYXAgPyBtYXJnaW5MZWZ0IDogMzJ9XG4gICAgICAgICAgICAgICAgaW5mbz17aXRlbX1cbiAgICAgICAgICAgICAgICB7dHlwZX0gLz5cbiAgICAgICAgey9lYWNofVxuICAgIHsvaWZ9XG4gICAgPGZvb3RlciBpZD1cInNlbnRpbmVsXCIgYmluZDp0aGlzPXtzZW50aW5lbH0+dGhpcyBiZSBkYSBmb290YWg8L2Zvb3Rlcj5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkErRVksR0FBSSxJQUFDLElBQUk7Ozs7Ozs7OEJBRU8sR0FBSSxJQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZDQVJ2QixHQUFJLE9BQUksUUFBUTtjQUFHLEdBQUksSUFBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHO2NBQUcsR0FBSSxJQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRzs7aURBQ2hFLEdBQUksSUFBQyxFQUFFOzs7OytEQUxELEdBQUksT0FBSSxRQUFRO2NBQUcsR0FBSSxJQUFDLEtBQUssQ0FBQyxFQUFFO2NBQUcsR0FBSSxJQUFDLEVBQUU7Ozs7Ozs7K0RBUzFDLEdBQUksT0FBSSxRQUFRO2NBQUcsR0FBSSxJQUFDLEtBQUssQ0FBQyxFQUFFO2NBQUcsR0FBSSxJQUFDLEVBQUU7Ozs7Z0NBYnpELEdBQUc7d0NBQ1UsR0FBSzs4Q0FBZ0IsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxRkFPbkMsR0FBSSxPQUFJLFFBQVE7Y0FBRyxHQUFJLElBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRztjQUFHLEdBQUksSUFBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUc7Ozs7cUZBQ2hFLEdBQUksSUFBQyxFQUFFOzs7O3lHQUxELEdBQUksT0FBSSxRQUFRO2NBQUcsR0FBSSxJQUFDLEtBQUssQ0FBQyxFQUFFO2NBQUcsR0FBSSxJQUFDLEVBQUU7Ozs7NkVBVXJELEdBQUksSUFBQyxJQUFJOzt5R0FERSxHQUFJLE9BQUksUUFBUTtjQUFHLEdBQUksSUFBQyxLQUFLLENBQUMsRUFBRTtjQUFHLEdBQUksSUFBQyxFQUFFOzs7OztvRUFHckMsR0FBSSxJQUFDLE9BQU87Ozs7aUNBaEJoQyxHQUFHOzs7O3lDQUNVLEdBQUs7Ozs7K0NBQWdCLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FqRXJDLElBQUk7T0FDSixVQUFVO09BQ1YsSUFBSTtPQUNKLEdBQUc7T0FDSCxLQUFLLEdBQUcsR0FBRztLQUlsQixLQUFLOzs7Ozs7Ozs7Ozs7bUJBc0RFLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQ3VDTCxHQUFLOztpQ0FBYSxHQUFJLEtBQUMsRUFBRTs7O2dDQUE5QixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUFDLEdBQUs7Ozs7Ozs7Ozs7O2tDQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBR1MsR0FBTTtlQUNSLEdBQUMsT0FBRyxDQUFDO3lCQUNFLEdBQUkscUJBQUcsR0FBVSxNQUFHLEVBQUU7bUJBQzVCLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJEQUZMLEdBQUMsT0FBRyxDQUFDO2tGQUNFLEdBQUkscUJBQUcsR0FBVSxNQUFHLEVBQUU7K0RBQzVCLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBUGpCLEdBQVU7Ozs7O3VCQU5kLEdBQUs7Ozs7Ozs7Ozs7Ozt1Q0FBTCxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBS2EsR0FBSSxNQUFHLE1BQU0sR0FBRyxTQUFTO3VDQUFjLEdBQUkscUJBQUcsR0FBVSxNQUFHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttRUFML0UsR0FBSzs7c0JBTUQsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQURJLEdBQUksTUFBRyxNQUFNLEdBQUcsU0FBUzs7Ozt3Q0FBYyxHQUFJLHFCQUFHLEdBQVUsTUFBRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BbkdyRSxLQUFLO09BQ0wsS0FBSztPQUNMLElBQUk7T0FDSixJQUFJLEdBQUcsSUFBSTtPQUNYLGVBQWU7S0FJdEIsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRO0tBQ2hDLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVTtLQUNuQyxhQUFhLEdBQUcsRUFBRTtLQUVsQixNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUU7O0NBU3BCLE9BQU87TUFDQyxlQUFlLElBQUksSUFBSTtNQUN2QixLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FDdEIsS0FBSyxDQUFDLEdBQUcsRUFDVCxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsRUFDcEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDOztRQUVYLFFBQVEsT0FBTyxvQkFBb0IsQ0FDckMsT0FBTztRQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxDQUFDO0tBQ2pELGFBQWE7Ozs7O0lBS2pCLFNBQVMsRUFBRSxDQUFDOzs7TUFHaEIsYUFBYTs7SUFFVCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNO1FBQ3BCLElBQUksU0FBUyxLQUFLLElBQ2YsZUFBZSxDQUFDLEdBQUcsV0FBVyxLQUFLLENBQUMsTUFBTSxNQUV6QyxXQUFXLEVBQUUsYUFBYTtRQUc5QixJQUFJLFNBQVMsSUFBSSxDQUFDLElBQUk7UUFDdEIsSUFBSSxJQUFJLFFBQVEsa0JBQ2hCLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSywwQkFDL0MsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLOztRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUs7S0FDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0I7S0FDOUIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFROztXQUUxQixHQUFHO0lBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjO0lBQzVCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRzs7OztFQUd6QixRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBa0RJLFFBQVE7Ozs7Ozs7Ozs7O21CQWI5QixTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQW5GWixZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksTUFBTSxHQUFHLGFBQWE7b0JBQ25FLFVBQVUsSUFDTCxXQUFXLEdBQUcsWUFBWSxHQUFHLE1BQU0sTUFDbEMsWUFBWSxHQUFHLENBQUMsSUFBSSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
