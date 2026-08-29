# Codex task: illustrations for twelve journal posts (September set)

Generate one illustration per post listed below, in the house style, and save each as a PNG into `illustrations/` at the repo root. Do not touch anything under `src/` or `public/` — a human converts and places the images.

Run from the repo root:

```
codex exec --full-auto "$(cat tasks/codex-journal-illustrations-2.md)"
```

## House style (match `illustrations/reference/*.png` and the five PNGs already in `illustrations/`)

Every new image must read as a sibling of the existing set.

- Medium: watercolor and fine ink line on warm cream paper. Visible paper tooth. Soft washes, no hard digital gradients, no photo-realism, no 3D render look.
- Palette: ochre, honey gold, straw yellow, olive and sage green, warm grey-brown ink. Sky is pale cream, never blue. No saturated reds or blues except a small accent.
- Light: late-afternoon or morning, low and warm, from one side. Long soft shadows.
- Subject treatment: quiet, observational, unposed. People, when present, in white or cream suits or plain aprons, faces mostly hidden or turned away. Bees as small dark strokes, never cartoon bees.
- Composition: landscape 3:2, exactly 1536 × 1024. Horizon in the upper third where there is one. Foreground detail drawn precisely, background loosely. Generous quiet space at the top.
- Nothing that reads as a logo, label, text, or brand. No jars with labels. No people looking at the camera. No children's faces.
- One image per prompt, no collages, no borders, no captions.

## Prompts

### 1. `how-to-store-honey.png`
A pantry shelf in dim, warm side light. A row of five one-pound glass jars of honey in different shades from pale straw to deep red-amber, lids on, unlabeled. A folded linen cloth and a wooden honey dipper beside them. A window edge at the far side with light falling across the shelf. Watercolor and ink, cream paper.

### 2. `raw-vs-pasteurized-honey.png`
A wooden table by a window. Two glass jars side by side: the left one cloudy, pale, beginning to crystallize; the right one perfectly clear amber, catching the light. A coarse mesh strainer and a few wax cappings on a plate behind. Watercolor and ink, cream paper, low light from the window.

### 3. `what-clover-honey-tastes-like.png`
Close view of sweet clover and white clover in bloom, small white and pale yellow flowers on loose stems drawn precisely in the foreground, one honeybee working a blossom. Behind, loosely, a summer field fading to a cream sky and a single hive at the field edge. Watercolor and ink, cream paper.

### 4. `linden-honey-basswood-guide.png`
A branch of American basswood (linden) in flower drawn close at the top of the frame: pale yellow-green blossom clusters hanging beneath the wing-shaped bract and broad heart-shaped leaves. Below and behind, a wooded Driftless hillside and a row of hives on a mown strip, loosely painted. Bees as small strokes around the blossoms. Watercolor and ink, cream paper, warm light from the left.

### 5. `florida-red-titi-honey.png`
A sandy creek bank in the Florida Panhandle lined with black titi shrubs in white bloom, glossy evergreen leaves, flower spikes drawn precisely in the foreground. Still tea-colored water at the left, slash pines beyond, a single hive on a rise at the right. Bees working the flowers. Cream sky, warm low light. Watercolor and ink, cream paper.

### 6. `honey-in-hot-tea.png`
A kitchen table in morning light. A ceramic cup of tea with a thin curl of steam, an open one-pound jar of pale honey beside it, a wooden dipper resting on a saucer with a thread of honey. A folded newspaper and a window with a field beyond, out of focus. Watercolor and ink, cream paper. No text on the newspaper.

### 7. `how-bees-make-a-pound-of-honey.png`
A wide clover field at golden hour, one hive in the foreground with its entrance facing the viewer, and a stream of bees drawn as small dark strokes leaving the hive and spreading out low over the flowers toward a far tree line. Cream sky, long soft shadows. Watercolor and ink, cream paper.

### 8. `baking-with-honey-instead-of-sugar.png`
A farmhouse kitchen counter, warm side light. A mixing bowl with a wooden spoon, a glass measuring cup half full of honey, two eggs, a dusting of flour on a board, and a finished loaf cooling on a wire rack. A jar of dark red-amber honey with the lid off. Watercolor and ink, cream paper. No text on anything.

### 9. `honey-and-babies-under-one.png`
A calm kitchen scene: a high shelf with three jars of honey placed well out of reach, and below, a small wooden child's chair, a low table with a bowl of fruit, and a soft toy. No people, no faces. Morning light from a window. Watercolor and ink, cream paper.

### 10. `local-honey-and-allergies.png`
A late-summer roadside: tall ragweed and goldenrod drawn precisely in the foreground, a wooden fence, and beyond it a clover field with a single hive, loosely painted in hazy warm light. A few bees over the clover, none on the ragweed. Cream sky. Watercolor and ink, cream paper.

### 11. `how-to-read-a-honey-label.png`
A shop shelf seen straight on: seven or eight honey jars of different shapes and sizes, each with a plain blank paper label (no writing, no logos), honey in shades from water-white to dark. Fine ink line, warm washes, a little shadow under each jar. Watercolor and ink, cream paper.

### 12. `honey-and-cheese-pairings.png`
A wooden board in warm evening light: three wedges of cheese (one soft and white, one hard and golden, one veined blue), a small ceramic dish of honey with a dipper, sliced pears, a few walnuts, and a torn piece of bread. A glass jar of honey to one side, unlabeled. Watercolor and ink, cream paper.

## Output

- `illustrations/<name>.png`, 1536 × 1024, one per prompt above, twelve files.
- After generating, append a section to `illustrations/REPORT.md` listing each new file and one line on anything that drifted from the house style.
