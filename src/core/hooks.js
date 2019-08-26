import { useEffect, useState } from 'react';

export const useFlash = (props, duration) => {
  const [edits, setEdits] = useState(-1);
  const [edited, setEdited] = useState(false);

  useEffect(() => {
    setEdits(edits + 1)
  }, [...props])
  useEffect(() => {
    if (edits > 0) {
      setEdited(true)
      setTimeout(() => setEdited(false), duration)
    }
  }, [edits])
  return [edited]
}