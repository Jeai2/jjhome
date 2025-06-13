import { UserInfoForm } from "@/components/forms/UserInfoForm";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/common/Tabs";

export const CoupleGungapPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
      <div className="lg:col-span-2 w-full h-[500px] rounded-2xl overflow-hidden hidden lg:block">
        <img
          src="https://placehold.co/800x1000/0B0F1A/CABCE0?text=Couple+Art"
          alt="Illustration for Couple Compatibility"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:col-span-3">
        <div className="mb-8">
          <p className="text-accent-lavender font-semibold">커플 궁합</p>
          <h1 className="text-h1-xl text-text-light mt-2">
            두 사람의 인연, 그 깊이를 탐구하다
          </h1>
          <p className="text-text-muted mt-4 max-w-lg">
            서로의 사주를 통해 관계의 조화와 잠재적인 갈등 요소를 분석하고, 관계
            발전을 위한 현명한 길을 제시합니다.
          </p>
        </div>

        <Card className="bg-background-sub border-white/10 p-2 rounded-2xl">
          <Tabs defaultValue="user1" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="user1">내 정보</TabsTrigger>
              <TabsTrigger value="user2">상대방 정보</TabsTrigger>
            </TabsList>
            <TabsContent value="user1">
              <UserInfoForm title="내 정보 입력" buttonText="다음 단계로" />
            </TabsContent>
            <TabsContent value="user2">
              <UserInfoForm
                title="상대방 정보 입력"
                buttonText="궁합 결과 보기"
              />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

// Card 컴포넌트를 이 페이지에서도 사용하기 위해 임시로 정의.
// 실제로는 Card.tsx에서 import 해야 함.
const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <div className={className}>{children}</div>;
