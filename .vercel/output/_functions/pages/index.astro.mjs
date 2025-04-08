import { c as createComponent, m as maybeRenderHead, b as renderTemplate, a as createAstro, d as addAttribute, r as renderComponent } from '../chunks/astro/server_CKquQvPm.mjs';
import 'kleur/colors';
import { A as ANIMALESDB, C as CATEGORIAS, a as CLASESCSSBG, $ as $$Layout } from '../chunks/Layout_uSMPyNXV.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-screen h-dvh flex items-center justify-center flex-col" data-astro-cid-3ef6ksr2> <div class="flex items-center justify-center lg:flex-row flex-col-reverse" data-astro-cid-3ef6ksr2> <div class="flex flex-col items-center lg:items-start" data-astro-cid-3ef6ksr2> <h2 class="lg:text-lg font-bold lg:pl-10 text-sm text-black m-0" data-astro-cid-3ef6ksr2>Ragosorio presents...</h2> <h1 class="text-center font-bold tracking-wider lg:text-9xl text-5xl" data-astro-cid-3ef6ksr2>DARMimals</h1> </div> <img src="/animales/elefantes.webp" alt="Elefantes" class="lg:size-60 size-18 lg:ml-0 -ml-4 mb-2 lg:mb-0 elef" data-astro-cid-3ef6ksr2> </div> <a href="#allAnimals" class="bg-secondary text-primary border border-white rounded-4xl py-3 px-5 lg:text-xl text-sm lg:mt-5 mt-8 hover:bg-secondaryHover tracking-wider" data-astro-cid-3ef6ksr2>View now</a> </header> `;
}, "/Users/macuser/Desktop/Cosas de Roro/proyectos/Astro/mendi-animals/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$AnimalCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AnimalCard;
  const { categoria, palabraUnica, claseCss, nombre, imagen, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="group relative"> <img${addAttribute(`/animales/${imagen}`, "src")}${addAttribute(`${nombre} foto`, "alt")}${addAttribute(`aspect-square w-full rounded-md object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80 ${claseCss}`, "class")}> <div class="mt-4 flex justify-between"> <div> <h3 class="text-sm text-[#f3e7e8]"> <a${addAttribute(`${url}`, "href")}> <span aria-hidden="true" class="absolute inset-0"></span> ${nombre} </a> </h3> <p class="mt-1 text-sm text-gray-400">${categoria}</p> </div> <p class="text-sm font-medium text-gray-400">${palabraUnica}</p> </div> </div>`;
}, "/Users/macuser/Desktop/Cosas de Roro/proyectos/Astro/mendi-animals/src/components/AnimalCard.astro", void 0);

const $$AnimalList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8" id="allAnimals"> <h2 class="text-2xl font-bold tracking-tight text-primary">All animals</h2> <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"> ${ANIMALESDB.map((animal) => renderTemplate`${renderComponent($$result, "AnimalCard", $$AnimalCard, { "nombre": animal.nombre, "categoria": animal.categoria, "palabraUnica": animal.palabraUnica, "imagen": animal.imagen, "claseCss": animal.categoria === CATEGORIAS.CURIOSO ? CLASESCSSBG.CURIOSO : animal.categoria === CATEGORIAS.FAVORITO ? CLASESCSSBG.FAVORITO : animal.categoria === CATEGORIAS.MIEDO ? CLASESCSSBG.MIEDO : CLASESCSSBG.MIEDO, "url": `${animal.url}` })}`)} </div> </div>`;
}, "/Users/macuser/Desktop/Cosas de Roro/proyectos/Astro/mendi-animals/src/components/AnimalList.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="w-full bg-secondary"> ${renderComponent($$result, "AnimalList", $$AnimalList, {})} </main>`;
}, "/Users/macuser/Desktop/Cosas de Roro/proyectos/Astro/mendi-animals/src/components/Main.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, {})} ` })}`;
}, "/Users/macuser/Desktop/Cosas de Roro/proyectos/Astro/mendi-animals/src/pages/index.astro", void 0);

const $$file = "/Users/macuser/Desktop/Cosas de Roro/proyectos/Astro/mendi-animals/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
