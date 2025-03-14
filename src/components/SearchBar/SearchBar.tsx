import { useState, FormEvent } from 'react';
import { FaSearch } from 'react-icons/fa';
import s from './SearchBar.module.css';
import toast from 'react-hot-toast';

type PropsSearchBar = {
  onSubmit: (newQuery: string) => void;
};

const SearchBar = ({ onSubmit }: PropsSearchBar) => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) {
      toast("I'm waiting for your request");
      return;
    }

    onSubmit(value.trim());
    // setValue('');
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <button className={s.btn} type="submit">
          <FaSearch />
        </button>

        <input
          className={s.input}
          onChange={e => {
            setValue(e.target.value.trim());
          }}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
