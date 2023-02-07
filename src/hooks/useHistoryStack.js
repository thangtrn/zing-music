import { useEffect, useState } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

function useHistoryStack() {
   const [stack, setStack] = useState([]);
   const [active, setActive] = useState(0);

   const { pathname } = useLocation();
   const type = useNavigationType();

   useEffect(() => {
      if (type === 'PUSH') {
         // nếu stack.lengt > active thì pop stack từ vị trí active + 1 cho tới cuối stack
         // thêm pathname mới vào stack
         if (stack.length > active) {
            setStack([...stack.slice(0, active), pathname]);
            setActive(active + 1);
         }
         // ngược lại thì push pathname vào stack
         else {
            setStack([...stack, pathname]);
            setActive(active + 1);
         }
      }
      // chỉ khi pathname và type thay đổi thì mới cần gọi hàm xử lý lưu trữ stack
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [pathname, type]);

   return [stack, active, setActive];
}

export default useHistoryStack;
