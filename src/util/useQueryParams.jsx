import { useSearchParams } from "react-router-dom";

function useQueryParams() {
  const [SearchParams] = useSearchParams();
  return Object.fromEntries([...SearchParams]);
}

export default useQueryParams;
