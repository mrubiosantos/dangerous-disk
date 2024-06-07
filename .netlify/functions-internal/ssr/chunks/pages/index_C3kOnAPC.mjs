import { e as createComponent, r as renderTemplate, g as addAttribute, i as renderHead, h as createAstro } from '../astro_BfbjThIa.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const text = await fetch("https://randomuser.me/api/?nat=ES&inc=gender,name,nat").then((res) => res.json());
  const pageTitle = text.results[0].name.first + " " + text.results[0].name.last;
  console.log(text.results[0].name.first + " " + text.results[0].name.last);
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body> <h1>${pageTitle}</h1> ${Astro2.url} </body></html>`;
}, "C:/Users/webla/Desktop/ASTROJS/dangerous-disk/src/pages/index.astro", void 0);

const $$file = "C:/Users/webla/Desktop/ASTROJS/dangerous-disk/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
