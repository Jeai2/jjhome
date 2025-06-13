import { Header } from "./Header"; // 트랜스포머 헤더

interface MobileLayoutProps {
  children: React.ReactNode;
  onLogoClick?: () => void; // optional로 설정하여 유연하게
}

export const MobileLayout = ({ children, onLogoClick }: MobileLayoutProps) => {
  return (
    <div className="bg-background-main min-h-screen text-text-light">
      {/* 통합 Header 컴포넌트에 onLogoClick 전달 */}
      <Header onLogoClick={onLogoClick} />

      {/* 페이지 콘텐츠 영역 */}
      <main className="p-4">{children}</main>
    </div>
  );
};
