import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, c as claim_element, q as attr_dev, g as add_location, h as insert_dev, f as detach_dev, l as space, t as text, m as create_component, a as children, o as claim_space, b as claim_text, p as claim_component, z as toggle_class, j as append_dev, r as mount_component, A as prop_dev, u as set_data_dev, w as transition_in, x as transition_out, y as destroy_component, B as validate_each_argument, C as group_outros, D as check_outros, E as destroy_each } from './client.48b24567.js';
import { A as ArtistListing } from './ArtistListing.ed5ba1e1.js';

/* src/components/item/SmallItem.svelte generated by Svelte v3.23.0 */
const file = "src/components/item/SmallItem.svelte";

// (69:4) {#if cover}
function create_if_block_1(ctx) {
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { class: true, src: true, alt: true });
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "class", "track-cover svelte-ie27ii");
			if (img.src !== (img_src_value = /*item*/ ctx[0].album.images.pop().url)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			add_location(img, file, 69, 8, 1314);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*item*/ 1 && img.src !== (img_src_value = /*item*/ ctx[0].album.images.pop().url)) {
				attr_dev(img, "src", img_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(69:4) {#if cover}",
		ctx
	});

	return block;
}

// (77:8) {:else}
function create_else_block(ctx) {
	let b;
	let t_value = /*item*/ ctx[0].name + "";
	let t;

	const block = {
		c: function create() {
			b = element("b");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			b = claim_element(nodes, "B", {});
			var b_nodes = children(b);
			t = claim_text(b_nodes, t_value);
			b_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(b, file, 77, 12, 1568);
		},
		m: function mount(target, anchor) {
			insert_dev(target, b, anchor);
			append_dev(b, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*item*/ 1 && t_value !== (t_value = /*item*/ ctx[0].name + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(b);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(77:8) {:else}",
		ctx
	});

	return block;
}

// (73:8) {#if item.album}
function create_if_block(ctx) {
	let a;
	let b;
	let t_value = /*item*/ ctx[0].name + "";
	let t;
	let a_href_value;

	const block = {
		c: function create() {
			a = element("a");
			b = element("b");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			b = claim_element(a_nodes, "B", {});
			var b_nodes = children(b);
			t = claim_text(b_nodes, t_value);
			b_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(b, file, 74, 16, 1504);
			attr_dev(a, "href", a_href_value = "/albums/" + /*item*/ ctx[0].album.id);
			attr_dev(a, "class", "svelte-ie27ii");
			add_location(a, file, 73, 12, 1453);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, b);
			append_dev(b, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*item*/ 1 && t_value !== (t_value = /*item*/ ctx[0].name + "")) set_data_dev(t, t_value);

			if (dirty & /*item*/ 1 && a_href_value !== (a_href_value = "/albums/" + /*item*/ ctx[0].album.id)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(73:8) {#if item.album}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div2;
	let t0;
	let div0;
	let t1;
	let t2;
	let div1;
	let b;
	let t3;
	let b_hidden_value;
	let t4;
	let p;
	let t5_value = Math.floor(/*item*/ ctx[0].duration_ms / (60 * 1000)) + "";
	let t5;
	let t6;
	let t7_value = Math.floor(/*item*/ ctx[0].duration_ms % 60000 / 1000) + "";
	let t7;
	let div2_id_value;
	let current;
	let if_block0 = /*cover*/ ctx[1] && create_if_block_1(ctx);

	function select_block_type(ctx, dirty) {
		if (/*item*/ ctx[0].album) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block1 = current_block_type(ctx);

	const artistlisting = new ArtistListing({
			props: { artists: /*item*/ ctx[0].artists },
			$$inline: true
		});

	const block = {
		c: function create() {
			div2 = element("div");
			if (if_block0) if_block0.c();
			t0 = space();
			div0 = element("div");
			if_block1.c();
			t1 = text("\n        –\n        ");
			create_component(artistlisting.$$.fragment);
			t2 = space();
			div1 = element("div");
			b = element("b");
			t3 = text("EXPLICIT");
			t4 = space();
			p = element("p");
			t5 = text(t5_value);
			t6 = text(":");
			t7 = text(t7_value);
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true, id: true });
			var div2_nodes = children(div2);
			if (if_block0) if_block0.l(div2_nodes);
			t0 = claim_space(div2_nodes);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			if_block1.l(div0_nodes);
			t1 = claim_text(div0_nodes, "\n        –\n        ");
			claim_component(artistlisting.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			b = claim_element(div1_nodes, "B", { class: true, hidden: true });
			var b_nodes = children(b);
			t3 = claim_text(b_nodes, "EXPLICIT");
			b_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			t5 = claim_text(p_nodes, t5_value);
			t6 = claim_text(p_nodes, ":");
			t7 = claim_text(p_nodes, t7_value);
			p_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "left svelte-ie27ii");
			add_location(div0, file, 71, 4, 1397);
			attr_dev(b, "class", "explicit");
			b.hidden = b_hidden_value = !/*item*/ ctx[0].explicit;
			add_location(b, file, 83, 8, 1703);
			attr_dev(p, "class", "time");
			add_location(p, file, 84, 8, 1768);
			attr_dev(div1, "class", "right svelte-ie27ii");
			add_location(div1, file, 82, 4, 1675);
			attr_dev(div2, "class", "track svelte-ie27ii");
			attr_dev(div2, "id", div2_id_value = /*item*/ ctx[0].id);
			toggle_class(div2, "cover", /*cover*/ ctx[1]);
			add_location(div2, file, 67, 0, 1245);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			if (if_block0) if_block0.m(div2, null);
			append_dev(div2, t0);
			append_dev(div2, div0);
			if_block1.m(div0, null);
			append_dev(div0, t1);
			mount_component(artistlisting, div0, null);
			append_dev(div2, t2);
			append_dev(div2, div1);
			append_dev(div1, b);
			append_dev(b, t3);
			append_dev(div1, t4);
			append_dev(div1, p);
			append_dev(p, t5);
			append_dev(p, t6);
			append_dev(p, t7);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*cover*/ ctx[1]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					if_block0.m(div2, t0);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block1) {
				if_block1.p(ctx, dirty);
			} else {
				if_block1.d(1);
				if_block1 = current_block_type(ctx);

				if (if_block1) {
					if_block1.c();
					if_block1.m(div0, t1);
				}
			}

			const artistlisting_changes = {};
			if (dirty & /*item*/ 1) artistlisting_changes.artists = /*item*/ ctx[0].artists;
			artistlisting.$set(artistlisting_changes);

			if (!current || dirty & /*item*/ 1 && b_hidden_value !== (b_hidden_value = !/*item*/ ctx[0].explicit)) {
				prop_dev(b, "hidden", b_hidden_value);
			}

			if ((!current || dirty & /*item*/ 1) && t5_value !== (t5_value = Math.floor(/*item*/ ctx[0].duration_ms / (60 * 1000)) + "")) set_data_dev(t5, t5_value);
			if ((!current || dirty & /*item*/ 1) && t7_value !== (t7_value = Math.floor(/*item*/ ctx[0].duration_ms % 60000 / 1000) + "")) set_data_dev(t7, t7_value);

			if (!current || dirty & /*item*/ 1 && div2_id_value !== (div2_id_value = /*item*/ ctx[0].id)) {
				attr_dev(div2, "id", div2_id_value);
			}

			if (dirty & /*cover*/ 2) {
				toggle_class(div2, "cover", /*cover*/ ctx[1]);
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
			if (detaching) detach_dev(div2);
			if (if_block0) if_block0.d();
			if_block1.d();
			destroy_component(artistlisting);
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
	let { item } = $$props;
	let { cover = false } = $$props;
	const writable_props = ["item", "cover"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<SmallItem> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("SmallItem", $$slots, []);

	$$self.$set = $$props => {
		if ("item" in $$props) $$invalidate(0, item = $$props.item);
		if ("cover" in $$props) $$invalidate(1, cover = $$props.cover);
	};

	$$self.$capture_state = () => ({ item, cover, ArtistListing });

	$$self.$inject_state = $$props => {
		if ("item" in $$props) $$invalidate(0, item = $$props.item);
		if ("cover" in $$props) $$invalidate(1, cover = $$props.cover);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [item, cover];
}

class SmallItem extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { item: 0, cover: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SmallItem",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*item*/ ctx[0] === undefined && !("item" in props)) {
			console.warn("<SmallItem> was created without expected prop 'item'");
		}
	}

	get item() {
		throw new Error("<SmallItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set item(value) {
		throw new Error("<SmallItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get cover() {
		throw new Error("<SmallItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set cover(value) {
		throw new Error("<SmallItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/item/ItemListing.svelte generated by Svelte v3.23.0 */
const file$1 = "src/components/item/ItemListing.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (21:4) {#each items as item}
function create_each_block(ctx) {
	let current;

	const smallitem = new SmallItem({
			props: {
				item: /*item*/ ctx[2],
				cover: /*cover*/ ctx[1]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(smallitem.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(smallitem.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(smallitem, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const smallitem_changes = {};
			if (dirty & /*items*/ 1) smallitem_changes.item = /*item*/ ctx[2];
			if (dirty & /*cover*/ 2) smallitem_changes.cover = /*cover*/ ctx[1];
			smallitem.$set(smallitem_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(smallitem.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(smallitem.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(smallitem, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(21:4) {#each items as item}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div;
	let current;
	let each_value = /*items*/ ctx[0];
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
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { id: true, class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "id", "trackListing");
			attr_dev(div, "class", "svelte-cmjzs8");
			add_location(div, file$1, 16, 0, 304);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*items, cover*/ 3) {
				each_value = /*items*/ ctx[0];
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
						each_blocks[i].m(div, null);
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
			if (detaching) detach_dev(div);
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
	let { items } = $$props;
	let { cover = false } = $$props;
	const writable_props = ["items", "cover"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ItemListing> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("ItemListing", $$slots, []);

	$$self.$set = $$props => {
		if ("items" in $$props) $$invalidate(0, items = $$props.items);
		if ("cover" in $$props) $$invalidate(1, cover = $$props.cover);
	};

	$$self.$capture_state = () => ({ items, cover, SmallItem });

	$$self.$inject_state = $$props => {
		if ("items" in $$props) $$invalidate(0, items = $$props.items);
		if ("cover" in $$props) $$invalidate(1, cover = $$props.cover);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [items, cover];
}

class ItemListing extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { items: 0, cover: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ItemListing",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*items*/ ctx[0] === undefined && !("items" in props)) {
			console.warn("<ItemListing> was created without expected prop 'items'");
		}
	}

	get items() {
		throw new Error("<ItemListing>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set items(value) {
		throw new Error("<ItemListing>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get cover() {
		throw new Error("<ItemListing>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set cover(value) {
		throw new Error("<ItemListing>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { ItemListing as I };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXRlbUxpc3RpbmcuMWQxNWJjMDUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2l0ZW0vU21hbGxJdGVtLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2l0ZW0vSXRlbUxpc3Rpbmcuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgZXhwb3J0IGxldCBpdGVtO1xuICAgIGV4cG9ydCBsZXQgY292ZXIgPSBmYWxzZTtcblxuICAgIGltcG9ydCBBcnRpc3RMaXN0aW5nIGZyb20gXCIuLi9hcnRpc3QvQXJ0aXN0TGlzdGluZy5zdmVsdGVcIjtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgLnRyYWNrIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogM2VtO1xuXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibGVmdCByaWdodFwiO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMTZlbTtcbiAgICAgICAgZ3JpZC1nYXA6IDFlbTtcblxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcbiAgICB9XG5cbiAgICAudHJhY2s6bm90KC5jb3ZlcikgLmxlZnQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICB9XG5cbiAgICAudHJhY2s6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAyMDksIDIwOSk7XG4gICAgfVxuXG4gICAgLmNvdmVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJjb3ZlciBsZWZ0IHJpZ2h0XCI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2VtIGF1dG8gMTZlbTtcbiAgICB9XG5cbiAgICAudHJhY2sgPiAqIHtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICAgIC5sZWZ0LFxuICAgIC5yaWdodCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMC41cmVtO1xuICAgIH1cbiAgICAubGVmdCB7XG4gICAgICAgIGdyaWQtYXJlYTogbGVmdDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgICAucmlnaHQge1xuICAgICAgICBncmlkLWFyZWE6IHJpZ2h0O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gICAgfVxuICAgIC50cmFjay1jb3ZlciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgIGE6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG48L3N0eWxlPlxuXG48ZGl2IGNsYXNzPVwidHJhY2tcIiBpZD17aXRlbS5pZH0gY2xhc3M6Y292ZXI+XG4gICAgeyNpZiBjb3Zlcn1cbiAgICAgICAgPGltZyBjbGFzcz1cInRyYWNrLWNvdmVyXCIgc3JjPXtpdGVtLmFsYnVtLmltYWdlcy5wb3AoKS51cmx9IGFsdD1cIlwiIC8+XG4gICAgey9pZn1cbiAgICA8ZGl2IGNsYXNzPVwibGVmdFwiPlxuICAgICAgICB7I2lmIGl0ZW0uYWxidW19XG4gICAgICAgICAgICA8YSBocmVmPVwiL2FsYnVtcy97aXRlbS5hbGJ1bS5pZH1cIj5cbiAgICAgICAgICAgICAgICA8Yj57aXRlbS5uYW1lfTwvYj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgPGI+e2l0ZW0ubmFtZX08L2I+XG4gICAgICAgIHsvaWZ9XG4gICAgICAgIOKAk1xuICAgICAgICA8QXJ0aXN0TGlzdGluZyBhcnRpc3RzPXtpdGVtLmFydGlzdHN9IC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJpZ2h0XCI+XG4gICAgICAgIDxiIGNsYXNzPVwiZXhwbGljaXRcIiBoaWRkZW49eyFpdGVtLmV4cGxpY2l0fT5FWFBMSUNJVDwvYj5cbiAgICAgICAgPHAgY2xhc3M9XCJ0aW1lXCI+XG4gICAgICAgICAgICB7TWF0aC5mbG9vcihpdGVtLmR1cmF0aW9uX21zIC8gKDYwICogMTAwMCkpfTp7TWF0aC5mbG9vcigoaXRlbS5kdXJhdGlvbl9tcyAlIDYwMDAwKSAvIDEwMDApfVxuICAgICAgICA8L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiIsIjxzY3JpcHQ+XG4gICAgZXhwb3J0IGxldCBpdGVtcztcbiAgICBleHBvcnQgbGV0IGNvdmVyID0gZmFsc2U7XG4gICAgaW1wb3J0IFNtYWxsSXRlbSBmcm9tIFwiLi9TbWFsbEl0ZW0uc3ZlbHRlXCI7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgICN0cmFja0xpc3Rpbmcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG48L3N0eWxlPlxuXG48ZGl2IGlkPVwidHJhY2tMaXN0aW5nXCI+XG4gICAgPCEtLSB7I2lmIGl0ZW1zIGluc3RhbmNlb2YgT2JqZWN0fVxuICAgICAgICA8U21hbGxJdGVtIHtpdGVtc30ge2NvdmVyfSAvPlxuICAgIHs6ZWxzZX0gLS0+XG4gICAgeyNlYWNoIGl0ZW1zIGFzIGl0ZW19XG4gICAgICAgIDxTbWFsbEl0ZW0ge2l0ZW19IHtjb3Zlcn0gLz5cbiAgICB7L2VhY2h9XG4gICAgPCEtLSB7L2lmfSAtLT5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkNBcUVzQyxHQUFJLElBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRzs7Ozs7Ozs7bUVBQTNCLEdBQUksSUFBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFRakQsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2REFBVCxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFITCxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NERBREMsR0FBSSxJQUFDLEtBQUssQ0FBQyxFQUFFOzs7Ozs7Ozs7OzZEQUN2QixHQUFJLElBQUMsSUFBSTs7b0ZBREMsR0FBSSxJQUFDLEtBQUssQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFZOUIsSUFBSSxDQUFDLEtBQUssVUFBQyxHQUFJLElBQUMsV0FBVyxJQUFJLEVBQUUsR0FBRyxJQUFJOzs7Z0JBQUssSUFBSSxDQUFDLEtBQUssVUFBRSxHQUFJLElBQUMsV0FBVyxHQUFHLEtBQUssR0FBSSxJQUFJOzs7OzJCQWpCN0YsR0FBSzs7O2VBSUQsR0FBSSxJQUFDLEtBQUs7Ozs7Ozs7OzhCQVFTLEdBQUksSUFBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUNBR1AsR0FBSSxJQUFDLFFBQVE7Ozs7Ozs7aURBaEIzQixHQUFJLElBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQUNyQixHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvRUFZa0IsR0FBSSxJQUFDLE9BQU87Ozt3RkFHUCxHQUFJLElBQUMsUUFBUTs7OztvRUFFckMsSUFBSSxDQUFDLEtBQUssVUFBQyxHQUFJLElBQUMsV0FBVyxJQUFJLEVBQUUsR0FBRyxJQUFJO29FQUFLLElBQUksQ0FBQyxLQUFLLFVBQUUsR0FBSSxJQUFDLFdBQVcsR0FBRyxLQUFLLEdBQUksSUFBSTs7cUZBbEIvRSxHQUFJLElBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWxFZixJQUFJO09BQ0osS0FBSyxHQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkNrQmpCLEdBQUs7Ozs7Z0NBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUFDLEdBQUs7Ozs7K0JBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFBSixNQUFJOzs7Ozs7Ozs7O2tDQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW5CSyxLQUFLO09BQ0wsS0FBSyxHQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
