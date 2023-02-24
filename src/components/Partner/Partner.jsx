import React, { useState } from 'react';

import { CgClose, PARTNER_DATA } from '~/ultis';
import { Modal } from '~/components/Modal';
import PartnerImage from './PartnerImage';
import { ButtonTippy } from '~/components/Commonts';

const Partner = () => {
   const [open, setOpen] = useState(false);

   return (
      <div className="mt-12">
         <h3 className="sm:block hidden text-center mb-6 uppercase text-xs font-bold text-secondary hover:text-hover tracking-[1.71px] leading-[18px]">
            <span onClick={() => setOpen(true)} className="cursor-pointer">
               Đối tác âm nhạc
            </span>
         </h3>
         <div className="sm:flex hidden flex-wrap -mx-[10px]">
            {PARTNER_DATA.map((item, index) => (
               <PartnerImage
                  src={item}
                  key={index}
                  className="w-[12.5%] min-w-[100px]"
               />
            ))}
         </div>

         <Modal isOpen={open} close={() => setOpen(false)}>
            <div
               onClick={(e) => e.stopPropagation()}
               className="w-[740px] max-w-[calc(90vw)] sm:flex hidden flex-col pb-5"
            >
               <div className="px-[30px] pt-5 relative text-primary leading-[1.5]">
                  <h3 className="block text-center mb-6 uppercase text-base font-bold text-secondary hover:text-hover tracking-[3.03px] leading-[1.5]">
                     <span className="cursor-pointer">Đối tác âm nhạc</span>
                  </h3>
                  <ButtonTippy
                     size="34px"
                     onClick={() => setOpen(false)}
                     tippyContent="Đóng"
                     className="bg-transparent absolute top-[15px] right-[15px]"
                  >
                     <CgClose size={26} className="text-primary" />
                  </ButtonTippy>
               </div>
               <div className="flex flex-wrap -mb-[10px] px-5">
                  {PARTNER_DATA.map((item, index) => (
                     <PartnerImage
                        src={item}
                        key={index}
                        className="w-[20%] min-w-[100px]"
                     />
                  ))}
               </div>
            </div>
         </Modal>
      </div>
   );
};

export default Partner;
