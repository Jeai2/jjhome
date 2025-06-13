// 이 컴포넌트는 데스크톱 레이아웃의 좌측에 고정되는 네비게이션 바다.
// 오직 데스크톱 화면에서만 보이도록 설계되었다.

import {
  Home,
  Zap,
  Heart,
  Wallet,
  Users,
  Clock,
  Library,
  HelpCircle,
} from "lucide-react";

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const mainMenuItems = [
  { id: "home", name: "홈", icon: Home },
  { id: "jonghap", name: "종합사주", icon: Zap },
  { id: "sinnyeon", name: "신년운세", icon: Zap },
  { id: "iseong", name: "이성운세", icon: Heart },
  { id: "jaemul", name: "재물운세", icon: Wallet },
  { id: "couple", name: "커플궁합", icon: Users },
  { id: "today", name: "오늘의 운세", icon: Clock },
];

const secondaryMenuItems = [
  { id: "storage", name: "운세 보관함", icon: Library },
  { id: "inquiry", name: "문의사항", icon: HelpCircle },
];

export const Sidebar = ({ currentPage, onNavigate }: SidebarProps) => {
  const handleMenuClick = (e: React.MouseEvent, pageId: string) => {
    e.preventDefault();
    onNavigate(pageId);
  };

  return (
    <aside className="hidden lg:flex flex-col w-60 h-screen fixed top-0 left-0 bg-background-sub p-6 border-r border-white/5">
      {/* 1. 로고 클릭 시 홈으로 이동 */}
      <div
        className="text-3xl font-bold text-text-light mb-12 cursor-pointer"
        onClick={() => onNavigate("home")}
      >
        LOGO
      </div>

      {/* 2. 네비게이션 메뉴 영역 */}
      <nav className="flex flex-col justify-between flex-grow">
        {/* 주 메뉴 */}
        <ul className="flex flex-col gap-2">
          {mainMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === currentPage;

            return (
              <li key={item.id}>
                <a
                  href="#"
                  onClick={(e) => handleMenuClick(e, item.id)}
                  className={`flex items-center gap-3 p-3 rounded-lg text-lg transition-colors ${
                    isActive
                      ? "bg-accent-gold text-background-main font-semibold"
                      : "text-text-muted hover:bg-white/5 hover:text-text-light"
                  }`}
                >
                  <Icon size={22} />
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* 보조 메뉴 */}
        <ul className="flex flex-col gap-2">
          {secondaryMenuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <a
                  href="#"
                  onClick={(e) => handleMenuClick(e, item.id)}
                  className="flex items-center gap-3 p-3 rounded-lg text-base text-text-muted hover:bg-white/5 hover:text-text-light transition-colors"
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
