Create the launch image set for Hunny Farm's Facebook page (facebook.com/TheHunnyFarm) and Instagram (@thehunnyfarm). Save everything as PNG under social/ at the repo root, in the subfolders named below. Do not modify anything under src/ or public/.

BRAND INPUTS — study these before generating anything:
- Logo: the round seal in brand/ (read brand/README.md first). Use brand/seal-gold-2048.png as the primary, brand/seal-ink-transparent-2048.png or brand/seal-cream-transparent-2048.png when stamping onto an illustration or a colored ground, brand/seal-cream-on-ink-2048.png on dark grounds. Use these files exactly, composited in at the size needed; never redraw, retype, recolor, or add words to the seal.
- Illustration style references: illustrations/reference/honey-field-inspection.png and illustrations/reference/tupelo-wetland-harvest.png. Watercolor and fine ink on warm cream paper, ochre / honey gold / straw / olive / sage, cream sky never blue, low warm side light, beekeepers in white suits with faces mostly hidden, bees as small dark strokes.
- Palette hex values from the website: cream #FAF6EC, paper #FFFDF7, ink #2A1A10, clover gold #E9A93B, linden yellow #F0C12E, tupelo amber #C9712B, florida red #7B2912.
- Voice: plain, warm, specific. Four raw honeys, each from where it grows best. Bottled by hand in Lake County, Illinois.

RULES FOR EVERY IMAGE:
- No text anywhere except the seal itself, and where a prompt explicitly asks for a short line of type. When type is asked for, set it in a classic serif (Cormorant Garamond or similar) in ink #2A1A10 or cream, never in a script or display font.
- No jars with labels other than a plain "Hunny Farm" label if a jar must appear; prefer unlabeled glass.
- No people looking at the camera. No stock-photo look. No blue skies. No emoji, no badges, no drop shadows.
- Export at the exact pixel sizes given, sRGB, PNG.

FILES TO PRODUCE:

social/profile/
1. profile-1024.png — 1024 x 1024. The gold seal (brand/seal-gold-2048.png) scaled to 1000 px and centered on a flat linden-yellow #F0C12E square, so the circular crop shows the seal edge to edge with the outer ring fully inside. Used for both the Facebook and Instagram profile pictures.
2. profile-cream-1024.png — 1024 x 1024. The gold seal scaled to 880 px centered on a flat cream #FAF6EC square. Alternate, for when the profile sits on a white page.

social/facebook/
3. facebook-cover-1640x624.png — 1640 x 624. A wide watercolor-and-ink landscape in the house style: a beekeeper in a white suit lifting a frame from a hive at the edge of a clover field, cream sky, low warm light, bees as small strokes. Keep all important content inside the central 1250 x 460 safe zone (Facebook crops the sides on mobile and the top on desktop). Stamp the ink-only seal (seal-ink-transparent) at about 220 px in the lower-right of the safe zone, on a patch of the painting that is light and quiet, with clear space around it. No other text.
4. facebook-cover-alt-1640x624.png — 1640 x 624. Same rules, different scene: four unlabeled one-pound jars in a row on a wooden table by a window, from pale clover gold to deep red, watercolor and ink. Ink-only seal stamped lower-right as above.

social/instagram/
Instagram profile picture uses profile-1024.png above. Instagram has no cover, so the first nine grid posts act as the header. The grid displays 4:5, so every post is 1080 x 1350. Make these nine, designed to read as one set when seen together (same paper, same light, same margins):
5. grid-01-hello.png — Cream #FAF6EC ground, the gold seal centered at about 640 px. Below it one line of serif type: "Raw honey. Four places it grows best." Nothing else.
6. grid-02-clover.png — Watercolor and ink: a field of sweet clover in bloom, one hive at the edge, cream sky. No text.
7. grid-03-linden.png — Watercolor and ink: basswood (linden) trees in flower on a Driftless hillside, hives on a mown strip below. No text.
8. grid-04-tupelo.png — Watercolor and ink: hives at the edge of a cypress swamp, still water, Spanish moss. No text.
9. grid-05-florida-red.png — Watercolor and ink: red titi shrubs in flower along a sandy creek bank in the Florida Panhandle, bees working the blooms. No text.
10. grid-06-comb.png — Watercolor and ink, close: gloved hands holding a frame of capped comb up to the light. No text.
11. grid-07-jars.png — Watercolor and ink: four unlabeled one-pound jars in a row, light through them, pale gold to deep red. No text.
12. grid-08-bottling.png — Watercolor and ink: a bottling bucket with a honey gate filling a glass jar with a slow ribbon of honey, a workroom window behind. No text.
13. grid-09-lake-county.png — Cream ground, one line of serif type centered: "Bottled by hand in Lake County, Illinois." The ink-only seal, about 260 px, beneath it. Nothing else.

social/instagram/stories/
14. story-01-hello.png — 1080 x 1920. Cream ground, the gold seal at about 720 px centered in the middle 60% of the height (keep the top 250 px and bottom 250 px empty for Instagram's UI). Below the seal one serif line: "Coming soon."
15. story-02-field.png — 1080 x 1920. A tall watercolor-and-ink crop of a clover field with a single hive, cream sky filling the top third. The ink-only seal, about 300 px, in the lower middle, above the bottom 250 px.

social/highlights/
16. highlight-honeys.png, highlight-farm.png, highlight-journal.png — each 1080 x 1080, cream ground, a single small ink-line icon centered (a jar; a hive; an open notebook with a pen), drawn in the same fine ink line as the illustrations, no text. These are Instagram highlight covers.

WHEN DONE:
Write social/REPORT.md listing every file with its pixel size, and one line per file on anything that drifted from these rules. Then print the list.
