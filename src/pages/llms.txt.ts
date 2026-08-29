import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { HONEYS } from '../data/honeys';
import { SITE } from '../data/site';

export const GET: APIRoute = async ({ site }) => {
  const origin = (site ?? new URL('https://hunnyfarm.com')).origin;
  const posts = (await getCollection('journal', ({ data }) => !data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const lines = [
    '# Hunny Farm',
    '',
    '> Hunny Farm is a small-batch raw honey brand. Four single-source honeys — White Clover, Linden, Tupelo and Florida Red — each gathered where its flower grows best, then bottled by hand in Lake County, Illinois. Sold in one-pound (16 oz) glass jars. Raw, unfiltered, unheated. Also from the farm: Buckwheat Honey (South Dakota) and Wisconsin Maple Syrup.',
    '',
    `Contact: ${SITE.email} · Instagram @thehunnyfarm · Facebook /TheHunnyFarm`,
    '',
    '## Products',
    ...HONEYS.map((h) => `- [${h.name} Honey](${origin}/honey/${h.slug}): ${h.notes.join(", ").toLowerCase()}. ${h.origin}, ${h.season.toLowerCase().replace("june","June")}. $${h.price} / 1 lb.`),
    '',
    '## Pages',
    `- [Home](${origin}/): the four honeys, prices, FAQ.`,
    `- [The farm](${origin}/farm): where each honey comes from.`,
    `- [Journal](${origin}/journal): plain-language articles on raw honey.`,
    '',
    '## Journal',
    ...posts.map((p) => `- [${p.data.title}](${origin}/journal/${p.id}): ${p.data.dek}`),
    '',
    '## Facts',
    `- Brand: Hunny Farm ("Specialty Honey"). Bottled in ${SITE.bottledIn}, USA.`,
    '- All honey is raw and unfiltered; it will crystallize over time; a warm-water bath overnight re-liquefies it.',
    '- No honey for babies under 12 months (botulism spores), raw or pasteurized.',
    `- Store status: ${SITE.storeOpen ? 'shipping' : 'not yet shipping (first bottling in progress). Email for notification.'}`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
