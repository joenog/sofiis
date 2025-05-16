import ResultItem from "./ResultItem";

interface ApiProps {
  results: ResultItem[];
  requestedAt: string;
  took: string;
}

export default ApiProps;
