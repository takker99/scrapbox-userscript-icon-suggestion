/** @jsx h */
import { FunctionComponent, JSX } from "../../deps.ts";
import { useCallback, useEffect, useRef } from "../../deps.ts";
import useResizeObserver from "../../hooks/useResizeObserver.tsx";
import { calcQueryInputStyle } from "../../lib/calc-style.ts";
import { CursorPosition } from "../../types.ts";

const editor = document.querySelector<HTMLElement>(".editor")!;

export type QueryInputProps = {
  defaultQuery?: string;
  cursorPosition: CursorPosition;
  onInput?: (newQuery: string) => void;
  onBlur?: () => void;
};

export const QueryInput: FunctionComponent<QueryInputProps> = (
  { defaultQuery, cursorPosition, onInput, onBlur },
) => {
  const ref = useRef<HTMLInputElement>();
  const { width: editorWidth = 0 } = useResizeObserver({ ref: editor });
  const queryInputStyle = calcQueryInputStyle(editorWidth, cursorPosition);

  // mount されたら即 focus する
  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleInput = useCallback(
    (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
      if (e.currentTarget) onInput?.(e.currentTarget.value);
    },
    [onInput],
  );

  return (
    <form className="form-inline">
      <input
        ref={ref}
        className="form-control"
        style={queryInputStyle}
        value={defaultQuery}
        default
        onInput={handleInput}
        onBlur={onBlur}
      />
    </form>
  );
};
