import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CKquQvPm.mjs';
import 'kleur/colors';
import { A as ANIMALESDB, $ as $$Layout } from '../../chunks/Layout_uSMPyNXV.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_XvqxbRKg.mjs';
export { renderers } from '../../renderers.mjs';

const backIcon = new Proxy({"src":"/_astro/back.NUHgcCwm.svg","width":800,"height":800,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macuser/Desktop/Cosas de Roro/proyectos/Astro/mendi-animals/src/assets/icons/back.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const animal = ANIMALESDB.find(
    (animal2) => animal2.nombre.toLowerCase() === slug
  );
  if (!animal) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-dvh w-full bg-secondary flex flex-col"> <div> <a href="/" class="size-15"> ${renderComponent($$result2, "Image", $$Image, { "src": backIcon, "alt": "Back icon", "class": "size-15 ml-4 mt-4" })} </a> </div> <div class="gap-8 items-center py-10 px-4 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-20"> <img class="w-full"${addAttribute(`/fotos/${animal.imagen}`, "src")}${addAttribute(`${animal.nombre} image`, "alt")}> <div class="mt-4 md:mt-0"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-primary">${animal.nombre}</h2> <p class="mb-6 font-light text-gray-300">${animal.descripcion}</p> </div> </div> </div> ` })}`;
}, "/Users/macuser/Desktop/Cosas de Roro/proyectos/Astro/mendi-animals/src/pages/animales/[...slug].astro", void 0);

const $$file = "/Users/macuser/Desktop/Cosas de Roro/proyectos/Astro/mendi-animals/src/pages/animales/[...slug].astro";
const $$url = "/animales/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
