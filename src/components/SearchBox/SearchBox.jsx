import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { searchSelector } from '../../redux/selector';
import {
   setValue,
   clearResult,
   fetchSearchSuggest,
} from '../../redux/features/searchSlice';

import { SuggestList } from './Suggest';
import { useDebounce, useOutSide } from '../../hooks';

import {
   IoSearchOutline,
   IoCloseOutline,
   AiOutlineLoading3Quarters,
} from '../../ultis/icons';

const SearchBox = () => {
   const { value: searchValue, loading } = useSelector(searchSelector);
   const dispatch = useDispatch();

   const focusRef = useRef(null);
   const [isFocus, setIsFocus] = useState(false);

   const navigate = useNavigate();

   const debounceValue = useDebounce(searchValue, 500);

   const handleSubmit = (e) => {
      e.preventDefault();
      navigate(`/tim-kiem/tat-ca?q=${searchValue}`);
      setIsFocus(false);
   };

   useOutSide(focusRef, (e) => {
      // if menu profile && profile not containt e.target => close profile
      if (focusRef && !focusRef?.current?.contains(e.target)) {
         setIsFocus(false);
      }
   });

   useEffect(() => {
      if (!debounceValue.trim()) {
         dispatch(clearResult());
         return;
      }

      const fetchSearchAll = async () => {
         try {
            // setLoading(true);
            dispatch(fetchSearchSuggest(debounceValue));
         } catch (error) {
            console.log(error.msg);
         }
      };
      fetchSearchAll();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [debounceValue]);

   return (
      <form
         ref={focusRef}
         onSubmit={handleSubmit}
         className={`w-full max-w-[440px] relative ${
            isFocus
               ? 'bg-secondary rounded-t-[20px]'
               : 'bg-alpha rounded-[20px]'
         }`}
      >
         <div className="h-10 w-full bg-transparent rounded-[20px] flex items-center px-2">
            <button type="submit" className="f-center bg-transparent">
               <IoSearchOutline color="var(--text-search)" size={24} />
            </button>

            <input
               type="text"
               placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
               value={searchValue}
               onChange={(e) => dispatch(setValue(e.target.value))}
               onFocus={() => setIsFocus(true)}
               className="inline-block h-[34px] w-[95%] p-[5px] pr-[35px] text-sm text-search leading-[34px] bg-transparent placeholder:text-placeholder outline-none border-none"
            />

            {searchValue.length > 0 && (
               <>
                  {loading ? (
                     <div className="f-center w-10 h-10 absolute right-[3px] top-1/2 -translate-y-1/2 rotate-0 spin">
                        <AiOutlineLoading3Quarters size={18} />
                     </div>
                  ) : (
                     <button
                        onClick={() => dispatch(setValue(''))}
                        className="f-center h-full w-10 absolute right-[3px] top-1/2 -translate-y-[50%] cursor-pointer bg-transparent text-placeholder"
                     >
                        <IoCloseOutline
                           color="var(--text-placeholder)"
                           size={20}
                        />
                     </button>
                  )}
               </>
            )}
         </div>

         {/* Suggest List  */}
         {isFocus && <SuggestList onClose={setIsFocus} />}
      </form>
   );
};

export default SearchBox;
