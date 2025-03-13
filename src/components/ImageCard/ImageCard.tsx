import { ItemPage } from '../App/App.types';
import s from './ImageCard.module.css';

interface ImageCardProps {
  item: ItemPage;
  onImageClick: (imageUrl: string) => void;
}

export const ImageCard = ({ item, onImageClick }: ImageCardProps) => {
  return (
    <div className={s.wrapper}>
      <li className={s.item}>
        <img
          onClick={() => onImageClick(item.urls.regular)}
          className={s.img}
          src={item.urls.small}
          alt={item.description}
          width={300}
        />
      </li>
    </div>
  );
};
