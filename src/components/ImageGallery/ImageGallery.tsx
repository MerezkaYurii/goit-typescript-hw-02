import { ItemPage } from '../App/App.types';
import { ImageCard } from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';
interface Props {
  pictures: ItemPage[];
  onImageClick: (imageUrl: string) => void;
}

const ImageGallery = ({ pictures, onImageClick }: Props) => {
  return (
    <>
      <ul className={s.wrapper}>
        {pictures.map((item: ItemPage) => {
          return (
            <ImageCard key={item.id} item={item} onImageClick={onImageClick} />
          );
        })}
      </ul>
    </>
  );
};

export default ImageGallery;
