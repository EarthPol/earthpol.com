// src/components/RecipeDigester.tsx
import React, { useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const RecipeDigester: React.FC = () => {
    const recipesBasePath = useBaseUrl('/recipes/');

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const RECIPES_BASE_PATH = recipesBasePath.endsWith('/')
            ? recipesBasePath
            : `${recipesBasePath}/`;

        function sanitizeItemName(name: string | null): string | null {
            if (!name) return name;

            // Remove fragments like "#minecraft:wool"
            name = name.replace(/#minecraft:[a-z0-9_]+/gi, '');

            // Trim out leftover symbols, hash, slashes
            name = name.replace(/[#]/g, '').trim();

            return name;
        }

        function idToItemName(id: any): string | null {
            if (!id) return null;

            let raw: string | null = null;

            if (typeof id === 'string') {
                raw = id;
            } else if (typeof id === 'object' && id.id) {
                raw = id.id;
            } else {
                return null;
            }

            raw = raw.replace(/^minecraft:/, '');

            // special case ONLY for "#minecraft:wool"
            if (raw === "#minecraft:wool") {
                return "white_wool";
            }

            raw = sanitizeItemName(raw) ?? null;
            if (!raw) return null;

            raw = raw
                .replace(/^https?:\/\/[^\s]+\/items\//i, '')
                .replace(/\.png$/i, '');

            return raw;
        }

        function itemNameToImageUrl(itemName: string | null): string | null {
            if (!itemName) return null;
            const clean = sanitizeItemName(itemName);
            if (!clean) return null;
            return `https://minecraft-api.vercel.app/images/items/${clean}.png`;
        }

        function itemIdToDisplayName(id: any): string {
            const itemName = idToItemName(id);
            if (!itemName) return 'Unknown Item';
            return itemName
                .split('_')
                .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                .join(' ');
        }

        let itemTooltipEl: HTMLDivElement | null = null;

        function getItemTooltipEl(): HTMLDivElement {
            if (!itemTooltipEl) {
                itemTooltipEl = document.createElement('div');
                itemTooltipEl.className = 'item-tooltip';
                document.body.appendChild(itemTooltipEl);
            }
            return itemTooltipEl;
        }

        function attachTooltipHandlers(element: HTMLElement, text: string) {
            const tooltip = getItemTooltipEl();
            if (!text) return;

            const show = (event: MouseEvent) => {
                tooltip.textContent = text;

                const offset = 12;
                let x = event.clientX + offset;
                let y = event.clientY + offset;

                const rect = tooltip.getBoundingClientRect();
                const vw = window.innerWidth;
                const vh = window.innerHeight;

                if (x + rect.width + 8 > vw) {
                    x = vw - rect.width - 8;
                }
                if (y + rect.height + 8 > vh) {
                    y = vh - rect.height - 8;
                }

                tooltip.style.left = `${x}px`;
                tooltip.style.top = `${y}px`;

                tooltip.classList.add('visible');
            };

            const move = (event: MouseEvent) => {
                if (!tooltip.classList.contains('visible')) return;

                const offset = 12;
                let x = event.clientX + offset;
                let y = event.clientY + offset;

                const rect = tooltip.getBoundingClientRect();
                const vw = window.innerWidth;
                const vh = window.innerHeight;

                if (x + rect.width + 8 > vw) {
                    x = vw - rect.width - 8;
                }
                if (y + rect.height + 8 > vh) {
                    y = vh - rect.height - 8;
                }

                tooltip.style.left = `${x}px`;
                tooltip.style.top = `${y}px`;
            };

            const hide = () => {
                tooltip.classList.remove('visible');
            };

            element.addEventListener('mouseenter', show);
            element.addEventListener('mousemove', move);
            element.addEventListener('mouseleave', hide);
        }

        function createItemSlot(
            itemIdOrName: any,
            count: number,
            extraClasses?: string,
        ): HTMLDivElement {
            const itemName =
                typeof itemIdOrName === 'string' && !itemIdOrName.includes(':')
                    ? itemIdOrName
                    : idToItemName(itemIdOrName);

            const slot = document.createElement('div');
            slot.className = 'slot' + (extraClasses ? ` ${extraClasses}` : '');

            if (!itemName) {
                slot.classList.add('empty');
                return slot;
            }

            const img = document.createElement('img');
            img.className = 'item-icon';
            const src = itemNameToImageUrl(itemName);
            if (src) img.src = src;

            const displayName = itemIdToDisplayName(itemIdOrName ?? itemName);
            img.alt = displayName;
            img.title = displayName;

            slot.dataset.tooltip = displayName;
            attachTooltipHandlers(slot, displayName);

            img.onerror = () => {
                img.style.display = 'none';
            };

            slot.appendChild(img);

            if (count && count > 1) {
                const countEl = document.createElement('span');
                countEl.className = 'item-count';
                countEl.textContent = String(count);
                slot.appendChild(countEl);
            }

            return slot;
        }

        function createResultSlot(resultId: any, count: number): HTMLDivElement {
            const itemName = idToItemName(resultId);
            const wrapper = document.createElement('div');
            wrapper.className = 'result-slot';

            const displayName = itemIdToDisplayName(resultId);
            wrapper.dataset.tooltip = displayName;
            attachTooltipHandlers(wrapper, displayName);

            const img = document.createElement('img');
            img.className = 'result-icon';
            const src = itemNameToImageUrl(itemName);
            if (src) img.src = src;
            img.alt = displayName;
            img.title = displayName;

            img.onerror = () => {
                img.style.display = 'none';
            };

            const countEl = document.createElement('span');
            countEl.className = 'result-count';
            countEl.textContent = count && count > 1 ? String(count) : '';

            wrapper.appendChild(img);
            wrapper.appendChild(countEl);
            return wrapper;
        }

        function renderCraftingShaped(recipe: any, fileName: string): HTMLElement {
            const card = document.createElement('article');
            card.className = 'recipe-card';

            const result = recipe.result || {};
            const resultId = result.id || result.item || result;
            const resultCount = result.count || 1;
            const displayName = itemIdToDisplayName(resultId);

            const header = document.createElement('div');
            header.className = 'recipe-card-header';

            const leftHeader = document.createElement('div');
            const title = document.createElement('div');
            title.className = 'recipe-title';
            title.textContent = displayName;

            const meta = document.createElement('div');
            meta.className = 'recipe-meta';
            const category = recipe.category || 'misc';
            meta.innerHTML = `<span><span class="chip-dot"></span>${category}</span>`;

            leftHeader.appendChild(title);
            leftHeader.appendChild(meta);

            const typeTag = document.createElement('span');
            typeTag.className = 'recipe-type';
            typeTag.textContent = 'Crafting';

            header.appendChild(leftHeader);
            header.appendChild(typeTag);

            const layout = document.createElement('div');
            layout.className = 'recipe-layout';

            const grid = document.createElement('div');
            grid.className = 'crafting-grid';

            const pattern = recipe.pattern || [];
            const key = recipe.key || {};

            for (let r = 0; r < 3; r++) {
                const row = pattern[r] || '';
                for (let c = 0; c < 3; c++) {
                    const symbol = row[c] || ' ';
                    if (symbol === ' ') {
                        const emptySlot = createItemSlot(null, 0, 'empty');
                        grid.appendChild(emptySlot);
                    } else {
                        const mapped = key[symbol];
                        let itemId: any = null;
                        let count = 1;

                        if (typeof mapped === 'string') {
                            itemId = mapped;
                        } else if (mapped && typeof mapped === 'object') {
                            if (mapped.item) itemId = mapped.item;
                            if (mapped.id) itemId = mapped.id;
                            if (mapped.count) count = mapped.count;
                        }

                        const slot = createItemSlot(itemId, count);
                        grid.appendChild(slot);
                    }
                }
            }

            const arrow = document.createElement('div');
            arrow.className = 'recipe-arrow';
            arrow.textContent = '➜';

            const resultSlot = createResultSlot(resultId, resultCount);

            layout.appendChild(grid);
            layout.appendChild(arrow);
            layout.appendChild(resultSlot);

            card.appendChild(header);
            card.appendChild(layout);

            const typeLabel = 'crafting table';
            (card as any).dataset.searchText = [
                displayName,
                category,
                fileName,
                typeLabel,
            ]
                .join(' ')
                .toLowerCase();

            return card;
        }

        function renderCraftingShapeless(recipe: any, fileName: string): HTMLElement {
            const card = document.createElement('article');
            card.className = 'recipe-card';

            const result = recipe.result || {};
            const resultId = result.id || result.item || result;
            const resultCount = result.count || 1;
            const displayName = itemIdToDisplayName(resultId);

            const header = document.createElement('div');
            header.className = 'recipe-card-header';

            const leftHeader = document.createElement('div');
            const title = document.createElement('div');
            title.className = 'recipe-title';
            title.textContent = displayName;

            const meta = document.createElement('div');
            meta.className = 'recipe-meta';

            const category = recipe.category || 'misc';
            const catSpan = document.createElement('span');
            catSpan.innerHTML = `<span class="chip-dot"></span>${category}`;
            meta.appendChild(catSpan);

            leftHeader.appendChild(title);
            leftHeader.appendChild(meta);

            const typeTag = document.createElement('span');
            typeTag.className = 'recipe-type';
            typeTag.textContent = 'Crafting';

            header.appendChild(leftHeader);
            header.appendChild(typeTag);

            const layout = document.createElement('div');
            layout.className = 'recipe-layout';

            const grid = document.createElement('div');
            grid.className = 'crafting-grid';

            const ingredients = recipe.ingredients || [];

            const slotOrder: [number, number][] = [
                [2, 0], [2, 1], [2, 2],
                [1, 0], [1, 1], [1, 2],
                [0, 0], [0, 1], [0, 2],
            ];

            const slotMap: ({ itemId: any; count: number } | null)[][] = Array.from(
                { length: 3 },
                () => Array.from({ length: 3 }, () => null),
            );

            for (let i = 0; i < ingredients.length && i < slotOrder.length; i++) {
                const ing = ingredients[i];
                let itemId: any = null;
                let count = 1;

                if (typeof ing === 'string') {
                    itemId = ing;
                } else if (ing && typeof ing === 'object') {
                    if (ing.item) itemId = ing.item;
                    else if (ing.id) itemId = ing.id;
                }

                const [r, c] = slotOrder[i];
                slotMap[r][c] = { itemId, count };
            }

            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    const slotData = slotMap[r][c];
                    if (slotData && slotData.itemId) {
                        grid.appendChild(createItemSlot(slotData.itemId, slotData.count));
                    } else {
                        grid.appendChild(createItemSlot(null, 0, 'empty'));
                    }
                }
            }

            const arrow = document.createElement('div');
            arrow.className = 'recipe-arrow';
            arrow.textContent = '➜';

            const resultSlot = createResultSlot(resultId, resultCount);

            layout.appendChild(grid);
            layout.appendChild(arrow);
            layout.appendChild(resultSlot);

            card.appendChild(header);
            card.appendChild(layout);

            const typeLabel = 'crafting shapeless crafting table';
            (card as any).dataset.searchText = [
                displayName,
                category,
                fileName,
                typeLabel,
            ]
                .join(' ')
                .toLowerCase();

            return card;
        }

        function renderFurnaceLike(recipe: any, fileName: string, type: 'furnace' | 'blasting'): HTMLElement {
            const card = document.createElement('article');
            card.className = 'recipe-card';

            const result = recipe.result || {};
            const resultId = result.id || result.item || result;
            const resultCount = result.count || 1;
            const displayName = itemIdToDisplayName(resultId);

            const header = document.createElement('div');
            header.className = 'recipe-card-header';

            const leftHeader = document.createElement('div');
            const title = document.createElement('div');
            title.className = 'recipe-title';
            title.textContent = displayName;

            const meta = document.createElement('div');
            meta.className = 'recipe-meta';
            const category = recipe.category || 'misc';
            const exp = recipe.experience != null ? `${recipe.experience} xp` : null;
            const timeTicks = recipe.cookingtime || recipe.cooktime || null;
            const timeSeconds =
                timeTicks != null ? `${(timeTicks / 20).toFixed(1)} s` : null;

            const chips: HTMLSpanElement[] = [];

            const catChip = document.createElement('span');
            catChip.innerHTML = `<span class="chip-dot"></span>${category}`;
            chips.push(catChip);

            if (exp) {
                const expChip = document.createElement('span');
                expChip.textContent = exp;
                chips.push(expChip);
            }

            if (timeSeconds) {
                const timeChip = document.createElement('span');
                timeChip.textContent = timeSeconds;
                chips.push(timeChip);
            }

            chips.forEach((ch) => meta.appendChild(ch));

            leftHeader.appendChild(title);
            leftHeader.appendChild(meta);

            const typeTag = document.createElement('span');
            typeTag.className = 'recipe-type';
            typeTag.textContent = type === 'blasting' ? 'Blast Furnace' : 'Furnace';

            header.appendChild(leftHeader);
            header.appendChild(typeTag);

            const layout = document.createElement('div');
            layout.className = 'recipe-layout';

            const furnace = document.createElement('div');
            furnace.className = 'furnace-layout';

            const ingredientCol = document.createElement('div');
            ingredientCol.className = 'furnace-column';

            let ingredient = recipe.ingredient || recipe.ingredients;
            let ingredientItem: any = null;

            if (Array.isArray(ingredient) && ingredient.length > 0) {
                const first = ingredient[0];
                if (typeof first === 'string') ingredientItem = first;
                else if (first.item) ingredientItem = first.item;
                else if (first.id) ingredientItem = first.id;
            } else if (typeof ingredient === 'string') {
                ingredientItem = ingredient;
            } else if (ingredient && typeof ingredient === 'object') {
                if (ingredient.item) ingredientItem = ingredient.item;
                else if (ingredient.id) ingredientItem = ingredient.id;
            }

            const ingredientSlot = createItemSlot(ingredientItem, 1, 'round');
            const ingredientLabel = document.createElement('div');
            ingredientLabel.className = 'furnace-label';
            ingredientLabel.textContent = 'Ingredient';

            ingredientCol.appendChild(ingredientSlot);
            ingredientCol.appendChild(ingredientLabel);

            const arrow1 = document.createElement('div');
            arrow1.className = 'recipe-arrow';
            arrow1.textContent = '➜';

            const fuelCol = document.createElement('div');
            fuelCol.className = 'furnace-column';

            const fuelSlot = createItemSlot(null, 0, 'round fuel empty');
            const fuelLabel = document.createElement('div');
            fuelLabel.className = 'furnace-label';
            fuelLabel.textContent = 'Fuel';

            fuelCol.appendChild(fuelSlot);
            fuelCol.appendChild(fuelLabel);

            const arrow2 = document.createElement('div');
            arrow2.className = 'recipe-arrow';
            arrow2.textContent = '➜';

            const resultCol = document.createElement('div');
            resultCol.className = 'furnace-column';
            const resultSlot = createResultSlot(resultId, resultCount);
            const resultLabel = document.createElement('div');
            resultLabel.className = 'furnace-label';
            resultLabel.textContent = 'Output';
            resultCol.appendChild(resultSlot);
            resultCol.appendChild(resultLabel);

            furnace.appendChild(ingredientCol);
            furnace.appendChild(arrow1);
            furnace.appendChild(fuelCol);
            furnace.appendChild(arrow2);
            furnace.appendChild(resultCol);

            layout.appendChild(furnace);

            const tiny = document.createElement('div');
            tiny.className = 'tiny-text';
            tiny.textContent = fileName;

            card.appendChild(header);
            card.appendChild(layout);
            card.appendChild(tiny);

            const typeLabel = type === 'blasting' ? 'blast furnace' : 'furnace';
            (card as any).dataset.searchText = [
                displayName,
                category,
                fileName,
                typeLabel,
                exp || '',
                timeSeconds || '',
            ]
                .join(' ')
                .toLowerCase();

            return card;
        }

        function renderRecipe(recipe: any, fileName: string): HTMLElement {
            const type = recipe.type || '';
            if (type.startsWith('minecraft:crafting_shaped')) {
                return renderCraftingShaped(recipe, fileName);
            }
            if (type.startsWith('minecraft:crafting_shapeless')) {
                return renderCraftingShapeless(recipe, fileName);
            }
            if (type === 'minecraft:smelting' || type === 'minecraft:smoker') {
                return renderFurnaceLike(recipe, fileName, 'furnace');
            }
            if (type === 'minecraft:blasting') {
                return renderFurnaceLike(recipe, fileName, 'blasting');
            }

            const fallback = document.createElement('article');
            fallback.className = 'recipe-card';
            fallback.textContent = `Unsupported recipe type: ${type} (${fileName})`;
            return fallback;
        }

        function setupSearch() {
            const input = document.getElementById('recipe-search') as HTMLInputElement | null;
            const container = document.getElementById('recipes');
            const emptyEl = document.getElementById('recipes-empty');

            if (!input || !container) return;

            input.addEventListener('input', () => {
                const query = input.value.trim().toLowerCase();
                const cards = container.querySelectorAll<HTMLElement>('.recipe-card');

                let visibleCount = 0;

                cards.forEach((card) => {
                    const text = (card.dataset.searchText || '').toLowerCase();

                    if (!query || text.includes(query)) {
                        card.style.display = '';
                        visibleCount++;
                    } else {
                        card.style.display = 'none';
                    }
                });

                if (emptyEl) {
                    emptyEl.style.display = visibleCount === 0 ? 'block' : 'none';
                }
            });
        }

        async function loadRecipes() {
            const container = document.getElementById('recipes');
            const emptyEl = document.getElementById('recipes-empty');

            if (!container || !emptyEl) return;

            try {
                const indexRes = await fetch(`${RECIPES_BASE_PATH}index.json`);
                if (!indexRes.ok) throw new Error('Could not load index.json');

                const files = await indexRes.json();
                if (!Array.isArray(files) || files.length === 0) {
                    emptyEl.style.display = 'block';
                    setupSearch();
                    return;
                }

                for (const file of files as string[]) {
                    try {
                        const res = await fetch(`${RECIPES_BASE_PATH}${file}`);
                        if (!res.ok) {
                            console.warn('Could not load recipe file:', file);
                            continue;
                        }
                        const recipe = await res.json();
                        const fileNameNoExt = file.replace(/\.json$/i, '');
                        const card = renderRecipe(recipe, fileNameNoExt);
                        container.appendChild(card);
                    } catch (e) {
                        console.error('Error parsing recipe file', file, e);
                    }
                }

                if (!container.children.length) {
                    emptyEl.style.display = 'block';
                }

                setupSearch();
            } catch (err) {
                console.error(err);
                emptyEl.style.display = 'block';
                setupSearch();
            }
        }

        loadRecipes();
    }, [recipesBasePath]);

    return (
        <div className="recipe-digester">
            <header>
                <div className="header-top">
                    <div className="header-text">
                        <h1>Recipe Digester</h1>
                        <p>
                            Custom built by EarthPol, imports recipes directly from datapacks!
                        </p>
                    </div>
                    <div className="search-wrapper">
                        <input
                            id="recipe-search"
                            type="search"
                            placeholder="Search recipes..."
                            autoComplete="off"
                        />
                    </div>
                </div>
            </header>

            <main>
                <div id="recipes" className="recipes-grid" />
                <div
                    id="recipes-empty"
                    className="recipes-empty"
                    style={{ display: 'none' }}
                >
                    No recipes were found. Make sure <code>/recipes/index.json</code> exists and
                    lists your recipe files.
                </div>
            </main>
        </div>
    );
};

export default RecipeDigester;
