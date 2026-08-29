# Codex task: journal illustrations for hunnyfarm.com

Generate one illustration per journal post listed below, in the house style, and save each as a PNG into `illustrations/` at the repo root (create it if missing). Do not touch anything under `src/` or `public/` — a human converts and places the images.

Run from the repo root:

```
codex exec --full-auto "$(cat tasks/codex-journal-illustrations.md)"
```

## House style (match `illustrations/reference/*.png`)

Two reference images ship with this task: `honey-field-inspection.png` and `tupelo-wetland-harvest.png`. Every new image must read as a sibling of those two.

- Medium: watercolor and fine ink line on warm cream paper. Visible paper tooth. Soft washes, no hard digital gradients, no photo-realism, no 3D render look.
- Palette: ochre, honey gold, straw yellow, olive and sage green, warm grey-brown ink. Sky is pale cream, never blue. No saturated reds or blues anywhere except a small accent (a wildflower, a red hive strap).
- Light: late-afternoon, low and warm, coming from one side. Long soft shadows.
- Subject treatment: quiet, observational, unposed. Beekeepers in white or cream suits with mesh veils, faces mostly hidden. Hands doing something specific — lifting a frame, working a smoker, uncapping. Bees drawn as small dark strokes in the air, never cartoon bees.
- Composition: landscape 3:2 (1536 × 1024). Horizon in the upper third. Foreground plant detail drawn precisely, background loosely. Generous negative space at the top for a page title if needed.
- Nothing in the frame that reads as a logo, label, text, or brand. No jars with labels. No people looking at the camera.
- One image per prompt, no collages, no borders, no captions.

## Prompts

### 1. `your-honey-turned-solid.png` — post "Your honey turned solid. That's the good news."

A wooden kitchen counter by a window in warm afternoon light. A one-pound glass jar of honey that has crystallized, opaque and pale butter-colored, sits in a shallow pan of warm water, steam barely visible. Next to it a second jar, clear and liquid gold. A spoon with set honey on it rests on a folded linen cloth. Through the window, an out-of-focus field. Watercolor and ink, cream paper. No labels on the jars.

### 2. `three-weeks-in-june.png` — post "Three weeks in June: chasing the linden bloom in the Driftless"

A steep wooded hillside in the Driftless region of Wisconsin in early summer. Tall basswood (linden) trees in full bloom, their pale yellow-green flower clusters drawn with care. A row of six hives on a mown strip at the base of the slope, a beekeeper in a white suit walking the row carrying a smoker. A pickup truck with an empty flatbed parked at the far end. Bees as small strokes around the treetops. Watercolor and ink, cream paper, warm light from the left.

### 3. `field-guide-to-buckwheat.png` — post "A field guide to buckwheat honey, for people who think they don't like it"

A flat field of buckwheat in flower, a dense carpet of tiny white blossoms on reddish stems, drawn precisely in the foreground and loosely toward the horizon. A single hive at the field edge, dark from weather. In the very foreground, a wooden board with a cut piece of dark, nearly black honeycomb and a slice of rye bread. Watercolor and ink, cream paper, late light.

### 4. `what-is-in-a-jar-of-honey.png` — post "What's actually in a jar of honey"

Interior of a hive, seen close: a beekeeper's gloved hands hold a frame of comb up to the light, half of it capped in pale wax, half still open and glistening with nectar. Bees crawling on the comb, drawn as small dark shapes. Behind, soft-focus clover field and the edge of a white suit. Emphasis on the texture of the comb. Watercolor and ink, cream paper.

### 5. `bottling-day.png` — spare, for a future post about bottling in Lake County, Illinois

A small clean workroom with a wide window. A stainless extractor and a bottling bucket with a honey gate on a wooden stand, a row of empty one-pound glass jars waiting on a table, one being filled with a slow ribbon of gold. A person in an apron, seen from the side, hand on the gate. Cardboard boxes, a roll of unmarked labels. Watercolor and ink, cream paper, morning light. No text on anything.

## Output

- `illustrations/<name>.png`, 1536 × 1024, one per prompt above.
- After generating, write `illustrations/REPORT.md` listing each file and one line on anything that drifted from the house style.
