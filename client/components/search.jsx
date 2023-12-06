import { useMemo, useState } from "react";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useMemo(() => {
    const debounceTimeout = 500; // 500ms delay
    let timer;

    return (searchTerm) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        search(searchTerm);
      }, debounceTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const search = (searchTerm) => {
    if (searchTerm == "") {
      navigate("/", { replace: true });
    } else {
      navigate(`/search/?bookName=${searchTerm}`);
    }
  };

  // Handle search term changes
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    debouncedSearch(event.target.value);
  };

  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
        onChange={handleChange}
      />
    </div>
  );
};
