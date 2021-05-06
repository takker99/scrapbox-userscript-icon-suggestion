/** @jsx h */
import { ComponentChild } from "../deps.ts";
import { useCallback, useEffect, useMemo, useState } from "../deps.ts";
import { CursorPosition } from "../types.ts";
import { PopupMenu } from "./PopupMenu.tsx";
import { QueryInput } from "./SuggestionBox/QueryInput.tsx";

export type Item<T> = {
  element: ComponentChild;
  searchableText: string;
  value: T;
};

function useMatchedItems<T>(query: string, items: Item<T>[]): Item<T>[] {
  const matchedItems = useMemo(() => {
    return items.filter((item) => {
      const target = item.searchableText.toLowerCase();
      return target.includes(query.toLowerCase());
    });
  }, [items, query]);
  return matchedItems;
}

type SuggestionBoxProps<T> = {
  open: boolean;
  emptyMessage: string;
  items: Item<T>[];
  cursorPosition: CursorPosition;
  onSelect: (item: Item<T>, query: string) => void;
  onSelectNonexistent: (query: string) => void;
  onClose: (query: string) => void;
};

export function SuggestionBox<T>({
  open,
  emptyMessage,
  items,
  cursorPosition,
  onSelect,
  onSelectNonexistent,
  onClose,
}: SuggestionBoxProps<T>) {
  const [query, setQuery] = useState("");
  const matchedItems = useMatchedItems(query, items);
  const matchedItemsForPopupMenu = useMemo(
    () => matchedItems.map((item) => item.element),
    [matchedItems],
  );

  useEffect(() => {
    if (open === false) setQuery("");
  }, [open]);

  const handleSelect = useCallback(
    (_item: ComponentChild, index: number) => {
      onSelect(matchedItems[index], query);
    },
    [matchedItems, onSelect, query],
  );
  const handleSelectNonexistent = useCallback(() => {
    onSelectNonexistent(query);
  }, [onSelectNonexistent, query]);
  const handleClose = useCallback(() => {
    onClose(query);
  }, [onClose, query]);

  return (
    <div>
      <PopupMenu
        open={open}
        emptyMessage={emptyMessage}
        items={matchedItemsForPopupMenu}
        cursorPosition={cursorPosition}
        onSelect={handleSelect}
        onSelectNonexistent={handleSelectNonexistent}
        onClose={handleClose}
      />
      {open && (
        <QueryInput
          defaultQuery={query}
          cursorPosition={cursorPosition}
          onInput={setQuery}
          onBlur={handleClose}
        />
      )}
    </div>
  );
}
