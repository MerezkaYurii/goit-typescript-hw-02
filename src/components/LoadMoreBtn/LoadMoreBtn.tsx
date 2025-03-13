import s from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <button className={s.btn} onClick={onClick}>
      Lode more
    </button>
  );
};

export default LoadMoreBtn;
