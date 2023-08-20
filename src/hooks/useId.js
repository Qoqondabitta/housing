import { useId } from "react";

const useUniqueId = () => {
  const getId = useId();
  return getId;
};

export default useUniqueId;
