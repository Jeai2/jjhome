// 이 컴포넌트는 오직 '보여지는 것'과 '메뉴 버튼을 누르는 행위'에만 집중한다.
// 메뉴 버튼을 눌렀을 때 무슨 일이 일어날지는, 이 컴포넌트의 지휘관(부모 컴포넌트)이 결정한다.

import { MenuIcon } from "../common/Icons"; // 방금 만든 아이콘을 가져온다.

// 이 컴포넌트가 받아야 할 '명령'의 종류를 정의한다.
// onMenuClick 이라는 이름의 함수를 받아야 한다.
interface HeaderBarMobileProps {
  onMenuClick: () => void;
}

export const HeaderBarMobile = ({ onMenuClick }: HeaderBarMobileProps) => {
  return (
    // fixed: 화면 상단에 고정, z-50: 다른 요소들보다 위에 보이도록
    // bg-background-main: tailwind.config.js에 정의한 바로 그 메인 배경색이다.
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-14 px-4 bg-background-main">
      {/* 왼쪽 로고 */}
      <div>
        {/* 지금은 텍스트로 대체하지만, 나중에 이곳에 Logo 컴포넌트나 img 태그를 넣게 될 거다. */}
        <a href="/" className="text-xl font-bold text-text-light">
          LOGO
        </a>
      </div>

      {/* 오른쪽 햄버거 메뉴 버튼 */}
      {/* 이 버튼을 클릭하면, 부모로부터 전달받은 onMenuClick 함수를 실행한다. */}
      <button
        onClick={onMenuClick}
        className="p-2 text-text-light"
        aria-label="메뉴 열기"
      >
        <MenuIcon className="w-6 h-6" />
      </button>
    </header>
  );
};
