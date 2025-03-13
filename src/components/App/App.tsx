import SearchBar from '../SearchBar/SearchBar';
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import './App.css';
import { fetchPictures } from '../../services/Api';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { ItemPage, ResponsePage } from './App.types';

function App() {
  const [pictures, setPictures] = useState<ItemPage[]>([]);
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
  };

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data: unknown[] = await fetchPictures(query, page);

        if (data.length === 0) {
          toast.error('No images found');
        }

        setPictures((prev: any[]) => [...prev, ...data]);
      } catch {
        setIsError(true);
        toast.error('Error! please try again later');
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleQuery = (newQuery: string) => {
    setQuery(newQuery);
    setPictures([]);
    setPage(1);
  };
  const countPage = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <SearchBar onSubmit={handleQuery} />

      {isLoading && <Loader />}
      {pictures.length > 0 && (
        <ImageGallery pictures={pictures} onImageClick={openModal} />
      )}
      {pictures.length > 0 && <LoadMoreBtn onClick={countPage} />}
      {isError && <ErrorMessage />}

      <ImageModal
        isOpen={modalIsOpen}
        imageUrl={selectedImage}
        onRequestClose={closeModal}
      />
    </>
  );
}

export default App;
