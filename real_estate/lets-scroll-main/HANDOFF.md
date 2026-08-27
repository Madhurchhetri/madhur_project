# Asset Handoff Specification: Aetheria Residences (Architecture A)

Since this project uses **Architecture A (One continuous walkthrough)**, the camera moves forward sequentially from scene to scene.
There are **no connectors**. The camera legs themselves form the unbroken flight:
* **Leg 0** starts on **Still 0** (Entrance).
* **Leg 1** starts on the **actual last frame of Leg 0**.
* **Leg 2** starts on the **actual last frame of Leg 1**.
* **Leg 3** starts on the **actual last frame of Leg 2**.

---

## 1. Scene Stills

Render these 3:2 landscape images first to establish the visual aesthetic. Save them directly to the `web/public/assets/` directory. (If your tool outputs `.png`, save it as `.png` and I will convert it to `.webp` for you).

| Scene Still | Prompt File | Dimensions | Target Filename | Status |
|---|---|---|---|---|
| **Still 0: Entrance** | [`prompts/still_0_entrance.txt`](file:///e:/Projects/real_estate/lets-scroll-main/prompts/still_0_entrance.txt) | 3:2 (≥1536×1024) | `web/public/assets/entrance.png` | **Pending** |
| **Still 1: Great Room** | [`prompts/still_1_atrium.txt`](file:///e:/Projects/real_estate/lets-scroll-main/prompts/still_1_atrium.txt) | 3:2 (≥1536×1024) | `web/public/assets/atrium.png` | **Pending** |
| **Still 2: The Deck** | [`prompts/still_2_deck.txt`](file:///e:/Projects/real_estate/lets-scroll-main/prompts/still_2_deck.txt) | 3:2 (≥1536×1024) | `web/public/assets/deck.png` | **Pending** |
| **Still 3: Master Suite** | [`prompts/still_3_suite.txt`](file:///e:/Projects/real_estate/lets-scroll-main/prompts/still_3_suite.txt) | 3:2 (≥1536×1024) | `web/public/assets/suite.png` | **Pending** |

---

## 2. Camera Flight Legs (Videos)

These must be rendered **sequentially**, because each leg (except Leg 0) requires the actual last frame of the previous leg as its starting image.
Save the final videos directly to `web/public/assets/vid/`.

### Sequential Rendering Checklist

#### [ ] Step 2.1: Render Leg 0 (Entrance)
* **Prompt File:** [`prompts/leg_0_entrance.txt`](file:///e:/Projects/real_estate/lets-scroll-main/prompts/leg_0_entrance.txt)
* **Conditioning Start Image:** `web/public/assets/entrance.png` (Still 0)
* **Output Video Filename:** `web/public/assets/vid/entrance.mp4`
* **Status:** Waiting for Still 0

*Once you drop `entrance.mp4`, I will extract its last frame as `last_entrance.png` and update the next step.*

---

#### [ ] Step 2.2: Render Leg 1 (Great Room)
* **Prompt File:** [`prompts/leg_1_atrium.txt`](file:///e:/Projects/real_estate/lets-scroll-main/prompts/leg_1_atrium.txt)
* **Conditioning Start Image:** `web/public/assets/vid/last_entrance.png` (Extracted by agent)
* **Output Video Filename:** `web/public/assets/vid/atrium.mp4`
* **Status:** Locked (Waiting for Leg 0)

*Once you drop `atrium.mp4`, I will extract its last frame as `last_atrium.png` and update the next step.*

---

#### [ ] Step 2.3: Render Leg 2 (The Deck)
* **Prompt File:** [`prompts/leg_2_deck.txt`](file:///e:/Projects/real_estate/lets-scroll-main/prompts/leg_2_deck.txt)
* **Conditioning Start Image:** `web/public/assets/vid/last_atrium.png` (Extracted by agent)
* **Output Video Filename:** `web/public/assets/vid/deck.mp4`
* **Status:** Locked (Waiting for Leg 1)

*Once you drop `deck.mp4`, I will extract its last frame as `last_deck.png` and update the next step.*

---

#### [ ] Step 2.4: Render Leg 3 (Master Suite)
* **Prompt File:** [`prompts/leg_3_suite.txt`](file:///e:/Projects/real_estate/lets-scroll-main/prompts/leg_3_suite.txt)
* **Conditioning Start Image:** `web/public/assets/vid/last_deck.png` (Extracted by agent)
* **Output Video Filename:** `web/public/assets/vid/suite.mp4`
* **Status:** Locked (Waiting for Leg 2)

---

## 3. How to Submit Assets
1. Render the image/video in your tool (e.g., Midjourney, Kling, Runway, etc.).
2. Save the file with the exact name and in the folder listed in the tables above.
3. Message me here letting me know the file is ready, and I will validate its dimensions, format, and extract the next sequential handoff frame.
