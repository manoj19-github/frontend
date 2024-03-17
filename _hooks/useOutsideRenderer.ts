import { useEffect } from "react";

function useOutsideAlerter(ref: any, onClose: any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose?.();
      }
    }
    // Bind the event listener
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
}
export default useOutsideAlerter;
