import { useLocation } from 'react-router-dom'

const useSearch = () => {
  const {search} = useLocation();
  return new URLSearchParams(search)
}

export default useSearch