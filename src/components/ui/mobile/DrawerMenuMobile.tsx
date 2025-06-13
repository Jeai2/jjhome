// 이 컴포넌트는 오직 '보여지는 것'에만 집중하는 순수한 UI 부품이다.
// 메뉴가 열려있는지(isOpen), 닫기 버튼을 누르면 무엇을 할지(onClose)는 모두 외부(부모)에서 결정한다.

import { XIcon } from "../common/Icons"; // X 아이콘을 가져온다.

// 이 컴포넌트가 받아야 할 '명령'과 '상태'의 종류를 정의한다.
interface DrawerMenuMobileProps {
  isOpen: boolean; // 메뉴가 열렸는지 여부 (true/false)
  onClose: () => void; // 메뉴를 닫으라는 명령을 실행할 함수
}

// IA에서 정의한 메뉴 항목들
const menuItems = [
  "종합사주",
  "신년운세",
  "이성운세",
  "재물운세",
  "커플궁합",
  "오늘의 운세",
  "운세 보관함",
  "문의사항",
];

export const DrawerMenuMobile = ({
  isOpen,
  onClose,
}: DrawerMenuMobileProps) => {
  return (
    // isOpen 상태에 따라 전체 메뉴의 투명도를 조절하고, 클릭 이벤트를 막거나 허용한다.
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
      role="dialog"
    >
      {/* 반투명 오버레이: 클릭하면 onClose 함수를 실행하여 메뉴를 닫는다. */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>

      {/* 실제 메뉴 패널 */}
      {/* isOpen 상태에 따라 오른쪽에서 슬라이드 인/아웃 효과를 적용한다. */}
      <nav
        className={`absolute top-0 right-0 h-full w-[280px] bg-background-sub shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* 닫기 버튼 영역 */}
        <div className="flex justify-end p-2 h-14 items-center">
          <button
            onClick={onClose}
            className="p-2 text-text-light"
            aria-label="메뉴 닫기"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        {/* 메뉴 목록 */}
        <div className="flex flex-col p-4">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="p-3 text-lg rounded-md text-text-light hover:bg-white/10"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};
